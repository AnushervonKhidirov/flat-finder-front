import type { Connection } from 'mysql'
import { createConnection } from 'mysql'

let connection: Connection | null = null

export default function getConnection(): Connection {
    if (connection) return connection

    const database = createConnection({
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
    })

    try {
        database.connect()
        connection = database
        return database
    } catch (err: any) {
        return err
    }
}
