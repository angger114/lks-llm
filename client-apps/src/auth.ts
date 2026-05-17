import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  trustHost: true,

  providers: [
    Credentials({
      name: "credentials",

      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        return {
          id: "1",
          name: "test",
          email: "test@test.com",
        };
      },
    }),
  ],
});