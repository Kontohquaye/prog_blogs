import connect from "@/app/libs/db";
import User from "@/app/models/User";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const options = {
  providers: [
    GithubProvider({
      async profile(profile) {
        // console.log("github-profile:", profile.login);
        let userRole = "Github User";
        if (profile?.email === "ekontoh07@gmail.com") {
          userRole = "admin";
        }
        await connect();

        const user = await User.findOne({ email: profile.email });
        if (!user) {
          const newUser = new User({
            email: profile.email,
            profilePicture: profile.avatar_url,
            username: profile.login,
          });
          const savedUser = await newUser.save();
          return {
            ...profile,
            role: userRole,
            _id: savedUser._id.toString(),
            image: savedUser.profilePicture,
            username: savedUser.username,
          };
        }
        return {
          ...profile,
          role: userRole,
          image: user.profilePicture,
          _id: user._id.toString(),
          username: user.username,
        };
      },
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      async profile(profile) {
        // console.log("google-profile:", profile);
        let userRole = "Google User";
        await connect();

        const user = await User.findOne({
          email: profile.email,
        });
        if (!user) {
          const newUser = new User({
            email: profile.email,
            profilePicture: profile.picture,
            username: profile.name,
          });
          const savedUser = await newUser.save();
          return {
            ...profile,
            id: profile.sub,
            role: userRole,
            _id: savedUser._id.toString(),
            image: savedUser.profilePicture,
            username: savedUser.username,
          };
        }
        return {
          ...profile,
          id: profile.sub,
          role: userRole,
          _id: user._id.toString(),
          image: user.profilePicture,
          username: user.username,
        };
      },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    // sever
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token._id = user._id;
      }
      return token;
    },
    // front-end
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
        session.user._id = token._id;
      }

      return session;
    },
  },
  session: {
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 3 * 24 * 60 * 60, // 3 days
  },
};
