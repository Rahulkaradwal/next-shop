import React from "react";

function Spinner() {
  return (
    <div className="flex items-center gap-4 justify-center mt-4 p-4  h-full">
      <div className="w-10 h-10 border-4 border-t-primary border-gray-300 rounded-full animate-spin"></div>
    </div>
  );
}

export default Spinner;
