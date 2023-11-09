export function prepareFields<T>(data: T, get?: 'key' | 'value'): string {
    const arrData: string[] = []

    for (let key in data) {
        if (key === 'id' || data[key] === '' || key === 'repeat_password' || key === 'password') continue

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
