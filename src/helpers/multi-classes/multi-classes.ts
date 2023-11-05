export default function multiClasses(classNames: string[]): string {
    return classNames.filter(className => className && className).join(' ')
}
