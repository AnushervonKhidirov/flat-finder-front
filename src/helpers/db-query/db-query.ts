import type { Connection, MysqlError } from 'mysql'
import getConnection from 'lib/database'

class dbQuery {
    connection: Connection

    constructor() {
        this.connection = getConnection()
    }

    async insert(data: {}) {
        return await this.query(
            `INSERT INTO ${process.env.USER_TABLE} (${this.prepareFields(data, 'key')})
            VALUES (${this.prepareFields(data, 'value')});`,
        )
    }

    async find(condition: string) {
        return await this.query(`SELECT * FROM ${process.env.USER_TABLE} WHERE ${condition};`) as []
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
}

export const Query = new dbQuery()
