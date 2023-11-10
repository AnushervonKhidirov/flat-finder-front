import type { UserForm } from '@utils/types/user'

import { NextResponse } from 'next/server'
import { hash } from 'bcrypt'

import { UserQuery } from 'lib/database'

export async function POST(request: Request) {
    try {
        const requestBody: UserForm = await request.json()
        requestBody.password = await hash(requestBody.password, 0)

        const isEmailContain = await UserQuery.find(`email = '${requestBody.email}'`)

        if (isEmailContain.length) throw new Error('Email is already exits')

        await UserQuery.insert(requestBody)

        return NextResponse.json({ message: "Now you're our user" })
    } catch (err: any) {
        return NextResponse.json({ message: err.message })
    }
}
