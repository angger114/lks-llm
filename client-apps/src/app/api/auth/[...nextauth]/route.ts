import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  secret: "testsecret",

  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        return {
          id: "1",
          name: "Test User",
          email: "test@test.com",
        };
      },
    }),
  ],

  pages: {
    signIn: "/signin",
  },
});

export { handler as GET, handler as POST };