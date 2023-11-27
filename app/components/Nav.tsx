import Image from "next/image";
import Logo from "../images/logo.png";
import ThemeButton from "./ThemeButton";
// import dynamic from 'next/dynamic'

// fix-2
// const ThemeButton = dynamic(() => import("./ThemeButton"), { ssr: false })

const Nav = () => {
  return (
    <div className="flex items-center justify-between website pt-3">
      <div className="flex items-center">
        <Image
          src={Logo}
          placeholder="blur"
          width={40}
          height={40}
          alt="logo"
        />
        <h1 className="font-black pl-1 text-lg">PBlogs</h1>
      </div>

      <div className="flex items-center justify-evenly w-1/4">
        <ThemeButton />
        <p>categories</p>
        <p>login</p>
      </div>
    </div>
  );
};

export default Nav;
