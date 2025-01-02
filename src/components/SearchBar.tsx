"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function SearchBar() {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    e.preventDefault();
    router.push(`/list?name=${name}`);
  };
  return (
    <form
      className="flex  items-center justify-between gap-4 bg-gray-100 flex-1 p-2 py-1 rounded-md"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search"
        name="name"
        className=" w-full bg-transparent outline-none"
      />
      <button className="cursor-pointer">
        <Image src="/search.png" alt="Search" width={16} height={16} />
      </button>
    </form>
  );
}

export default SearchBar;
