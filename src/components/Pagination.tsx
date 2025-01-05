"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface Props {
  hasNext: boolean;
  hasPrev: boolean;
  currentPage: number;
}

function Pagination({ hasNext, hasPrev, currentPage }: Props) {
  const { replace } = useRouter();
  const useParams = useSearchParams();
  const pathname = usePathname();

  const handleNext = () => {
    const params = new URLSearchParams(useParams);
    params.set("page", (currentPage + 1).toString());
    replace(`?${params.toString()}`);
  };

  const handlePrev = () => {
    const params = new URLSearchParams(useParams);
    params.set("page", (currentPage - 1).toString());
    replace(`?${params.toString()}`);
  };

  return (
    <div className="flex justify-between items-center mt-12">
      <button
        className=" disabled:cursor-not-allowed disabled:bg-pink-300 disabled:border-pink-300 disabled:hover:text-white  w-28 border border-primary hover:bg-white hover:text-primary transition-colors duration-300  px-3 py-1 rounded-md bg-primary text-white"
        disabled={!hasPrev}
        onClick={handlePrev}
      >
        Previous
      </button>
      <button
        className=" disabled:cursor-not-allowed disabled:bg-pink-300 disabled:border-pink-300 disabled:hover:text-white  w-28 border border-primary hover:bg-white hover:text-primary transition-colors duration-300  px-3 py-1 rounded-md bg-primary text-white"
        disabled={!hasNext}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
