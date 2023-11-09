import type { AuthOptions, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',
            type: 'credentials',
            credentials: {
                email: { label: 'email', type: 'email' },
                password: { label: 'password', type: 'password' },
            },
            async authorize(credentials) {
                const user = { id: '1', name: 'J Smith', email: 'jsmith@example.com' }

                if (user) {
                    return user
                } else {
                    return null
                }
            },
        }),
    ],
}
