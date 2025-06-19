import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID || 'mock-client-id',
      clientSecret: process.env.AUTH_GITHUB_SECRET || 'mock-client-secret'
    })
  ],
  pages: {
    signIn: '/login'
  }
});