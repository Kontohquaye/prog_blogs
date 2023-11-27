"use client";
import { FormEvent, useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBox = () => {
  const [query, setQuery] = useState<string | null>();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery("");
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded dark:bg-[#535151]  relative max-w-md mt-3 mx-auto flex items-center h-8"
      >
        <input
          className="w-full pl-4 pr-7 shadow-lg dark:shadow-none text-sm h-full bg-transparent outline-none dark:text-white text-black"
          type="text"
          value={query ?? ""}
          placeholder="search by title"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button className="text-black absolute right-1">
          <CiSearch className="text-2xl font-bold" />
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
