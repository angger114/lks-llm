import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  secret: process.env.AUTH_SECRET,

  providers: [
    CredentialsProvider({
      name: "credentials",

      credentials: {
        email: {},
        password: {},
      },

      async authorize() {
        return {
          id: "1",
          name: "test",
          email: "test@test.com",
        };
      },
    }),
  ],
});

export default handler;