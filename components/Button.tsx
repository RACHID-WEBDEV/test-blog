import { title } from "process";
import React from "react";

const Button = ({ title }: { title: string }) => {
  return (
    <button
      type="button"
      className="text-white bg-gray-800 uppercase hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-7 py-3 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
    >
      {title}
    </button>
  );
};

export default Button;
