import React from "react";

export default function Main() {
  return (
    <div className=" background w-full h-screen overflow-hidden relative bg-mountain bg-center bg-cover bg-no-repeat flex justify-center items-center bg-fixed">
      {/* <section className="flex justify-center	h-screen	items-center bg-mountain bg-cover overflow-hidden	bg-center bg-fixed relative bg-no-repeat"> */}
      {/* <div className="background bg-no-repeat bg-cover w-full max-w-none top-0 left-0 bottom-0 right-0 block relative overflow-hidden object-cover"> */}
      <div className=" content absolute top-[50%] left-[50%]"></div>
      <h2
        className=" font-fonts text-white font-extrabold absolute text-center text-7xl font-mono text [text-shadow:_3px_4px_3px_rgb(0_0_0_/_80%)] drop-shadow-xl shadow-slate-800"
        id="text"
      >
        The West Mountains
        <br />
        <span className=" text-3xl font-sans">It is better with mountains</span>
      </h2>
    </div>
  );
}
