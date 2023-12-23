export default function multiClasses(...args: string[]): string {
    return args.join(' ').trim().replace(/ +/g, ' ')
}
