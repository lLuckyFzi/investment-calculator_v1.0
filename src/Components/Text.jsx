import React from "react";
import { twMerge } from "tailwind-merge";

function Text(props) {
  const { children, className } = props;

  return (
    <span className={twMerge(className, "text-[#161616]")}>{children}</span>
  );
}

export default Text;
