import type { UserDB } from '@utils/types/database'

import { NextResponse } from 'next/server'
import { hash } from 'bcrypt'

import { UserQuery } from 'lib/database'

export async function POST(request: Request) {
    try {
        const requestBody: UserDB = await request.json()
        requestBody.password = await hash(requestBody.password, 10)

        const isEmailContain = await UserQuery.find(`email = '${requestBody.email}'`)

        if (isEmailContain) throw new Error('Email is already exits')

        const insertResult = await UserQuery.insert(requestBody)
        const findUser = await UserQuery.find(`id = '${insertResult.insertId}'`)

        if (findUser) {
            const { password, ...response } = findUser
            return NextResponse.json(response)
        }

        return NextResponse.json({})
    } catch (err: any) {
        return NextResponse.json({ message: err.message })
    }
}
