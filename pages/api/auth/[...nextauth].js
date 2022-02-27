import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'your@email.com' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize (credentials, req) {
        console.log('ENTRO')
        const payload = {
          email: credentials.email,
          password: credentials.password
        }

        const res = await fetch(process.env.LOGIN_API, {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: { 'Content-Type': 'application/json' }
        })
        const user = await res.json()

        if (res.ok && user) {
          console.log('user', user)
          return user
        }

        return null
      }
    })
  ],
  pages: {
    signIn: '/login'
  },
  callbacks: {
    async jwt (token, user, account, profile, isNewUser) {
      if (user?.token) {
        token.token = user.token
      }
      return token
    },

    async session (session, token) {
      return session
    }
  }
})