import type { MysqlError } from 'mysql'

import { NextResponse } from 'next/server'
import { hash, compare } from 'bcrypt'
import getConnection from 'lib/database'

import { prepareFields } from '@helpers/db-query/db-query'

export async function POST(request: Request) {
    try {
        const connection = getConnection()
        const requestBody = await request.json()
        const hashPassword = await hash(requestBody.password, 0)

        const result = new Promise((resolve, reject) => {
            connection.query(`
                INSERT INTO ${process.env.USER_TABLE} (${prepareFields(requestBody, 'key')}, password)
                VALUES (${prepareFields(requestBody, 'value')}, '${hashPassword}')
            `, (err: MysqlError, result: any) => {
                if (err) reject(err)
                resolve(result)
            })
        })

        return NextResponse.json({ message: "Now you're our user" })
    } catch {
        return NextResponse.json({ message: 'error happened, never try aging' })
    }
}
