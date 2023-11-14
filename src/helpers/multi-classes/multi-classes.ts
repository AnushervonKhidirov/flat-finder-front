export default function multiClasses(classNames: string[]): string {
    return classNames.join(' ').trim().replace(/ +/g, ' ')
}
