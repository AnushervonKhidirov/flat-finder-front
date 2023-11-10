import type { Connection, MysqlError } from 'mysql'
import { createConnection } from 'mysql'

let savedConnection: Connection | null = null

class dbQuery {
    connection: Connection
    table: string

    constructor(table: string) {
        this.connection = savedConnection ? savedConnection : this.connect()
        this.table = table
    }

    async insert(data: {}) {
        return await this.query(
            `INSERT INTO ${this.table} (${this.prepareFields(data, 'key')})
            VALUES (${this.prepareFields(data, 'value')});`,
        )
    }

    async find(condition: string) {
        return (await this.query(`SELECT * FROM ${this.table} WHERE ${condition};`)) as []
    }

    async query(query: string) {
        return new Promise((resolve, reject) => {
            this.connection.query(query, (err: MysqlError, result: any) => {
                if (err) reject(err)
                resolve(result)
            })
        })
    }

    prepareFields<T>(data: T, get?: 'key' | 'value') {
        const arrData: string[] = []

        for (let key in data) {
            const skip = key === 'id' || key === 'repeat_password' || data[key] === ''

            if (skip) continue

            if (get === 'key') {
                arrData.push(key)
                continue
            }

            if (get === 'value') {
                arrData.push(`'${data[key]}'`)
                continue
            }

            arrData.push(`${key} = '${data[key]}'`)
        }

        return arrData.join(', ')
    }

    connect() {        
        const database = createConnection({
            host: process.env.DATABASE_HOST,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
        })

        try {
            database.connect()
            savedConnection = database
            return database
        } catch (err: any) {
            return err
        }
    }
}

export const UserQuery = new dbQuery(process.env.USER_TABLE!)
// export const OfferQuery = new dbQuery(process.env.OFFER_TABLE!)
