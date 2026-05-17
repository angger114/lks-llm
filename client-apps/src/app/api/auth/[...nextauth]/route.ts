import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,

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

export { handler as GET, handler as POST };