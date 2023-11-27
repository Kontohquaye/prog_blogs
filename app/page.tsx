import SearchBox from "./components/Search";

export default function Home() {
  return (
    <main className="website mt-5">
      <section className="text-center">
        <h1 className="font-bold text-5xl">
          Discover and share
          <br />
          <span className="orange_gradient">
            vital information related to coding, on here!
          </span>
        </h1>
        <p className="max-w-[550px] mx-auto text-center mt-3">
          Explore diverse coding topics, tutorials, and insights on{" "}
          <strong>PBlog</strong> site. Enhance your programming skills with
          practical guides and stay updated on the latest tech trends. Happy
          coding!
        </p>
      </section>
      {/* search */}
      <SearchBox />
      {/* post */}
    </main>
  );
}
