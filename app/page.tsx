import { Suspense } from "react";
import RecentPost from "./components/RecentPosts";
import SearchBox from "./components/Search";
import Loading from "./loading";

export default function Home() {
  return (
    <main className="website mt-44">
      <section className="text-center">
        <h1 className="font-bold text-2xl sm:text-5xl">
          Discover and share
          <br />
          <span className="orange_gradient">
            vital information related to coding, on here!
          </span>
        </h1>
        <p className="max-w-[550px] text-sm sm:text-base mx-auto text-center mt-3">
          Explore diverse coding topics, tutorials, and insights on{" "}
          <strong>PBlog</strong> site. Enhance your programming skills with
          practical guides and stay updated on the latest tech trends. Happy
          coding!
        </p>
      </section>
      {/* search */}
      <SearchBox />
      {/* post */}
      <section className="mt-24 ">
        <Suspense fallback={<Loading />}>
          <RecentPost />
        </Suspense>
      </section>
    </main>
  );
}
