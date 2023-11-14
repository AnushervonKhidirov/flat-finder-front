import type { SignInForm } from '@utils/types/form'

import { NextResponse } from 'next/server'
import { compareSync } from 'bcrypt'

import { UserQuery } from 'lib/database'

export async function POST(request: Request) {
    try {
        const requestBody: SignInForm = await request.json()

        const user = await UserQuery.find(`email = '${requestBody.email}'`)

        if (user) {
            if (!compareSync(requestBody.password, user.password)) {
                return NextResponse.json({ message: 'Wrong password' })
            }

            const { password, ...response } = user

            return NextResponse.json(response)
        }

        return NextResponse.json({ message: 'User not found' })
    } catch (err: any) {
        return NextResponse.json({ message: err.message })
    }
}
