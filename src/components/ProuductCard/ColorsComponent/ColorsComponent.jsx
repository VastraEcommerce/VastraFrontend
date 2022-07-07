import React from "react";

export default function ColorsComponent(x) {
  return (
    <div
      className={`w-[1.2rem] h-[1.2rem] border border-neutral rounded-full bg-[${x}] hover:border-neutral `}></div>
  );
}
