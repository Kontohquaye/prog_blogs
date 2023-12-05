"use client";

import { useRouter } from "next/navigation";

const ReadMore = () => {
  return (
    <button
      onClick={() => {
        window.location.reload();
      }}
      className="text-base mt-2 sm:text-lg w-1/2 mx-auto font-medium  bg-softDark dark:bg-white px-3 py-1 rounded-lg hover:bg-opacity-75 dark:hover:bg-opacity-75 text-white  dark:text-softDark"
    >
      Read full article
    </button>
  );
};

export default ReadMore;
