import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  session: { strategy: 'jwt' },
  secret: process.env.ADMIN_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
          throw new Error('Authentication Configuration is not defined');
        }

        if (email !== process.env.ADMIN_EMAIL) {
          throw new Error('Email or password is not correct');
        }
        if (password !== process.env.ADMIN_PASSWORD) {
          throw new Error('Email or password is not correct');
        }

        return { id: email, email };
      },
    }),
  ],
});
