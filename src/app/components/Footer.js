import React from "react";
import Image from "next/image";
import AudioPlayer from "./AudioPlayer";
export default function Footer() {
  return (
    <div id="footer">
      <section className="flex justify-center h-[500px] beforecreate items-center bg-footerimg bg-cover overflow-hidden bg-center bg-fixed relative">
        <h2
          className="text-white font-fonts font-extrabold absolute text-center text-5xl font-mono text [text-shadow:_3px_4px_3px_rgb(0_0_0_/_80%)] drop-shadow-xl shadow-slate-800"
          id="text"
        >
          TRAVEL VIBE
          <br />
          <span className=" text-2xl font-sans reveal">
            It is better with mountains
          </span>
        </h2>
        <div className=" fixed z-50 right-auto bottom-auto top-2 left-2 flex h-12">
          <a href="#">
            <Image src={"/home.png"} width={40} height={10} alt="" />
          </a>
        </div>
        <div className=" fixed z-50 right-auto top-auto bottom-6 left-2 flex h-12">
          <a>
            <AudioPlayer />
          </a>
        </div>
        <div className=" fixed z-50 left-auto top-auto bottom-6 right-6 flex h-12">
          <a href="#" className="icon m-2">
            <Image src={"/facebook.png"} width={40} height={10} alt="" />
          </a>
          <a href="#" className="icon m-2">
            <Image src={"/instagram.png"} width={40} height={10} alt="" />
          </a>
          <a href="#" className="icon m-2">
            <Image src={"/twitter.png"} width={40} height={10} alt="" />
          </a>
          <a href="#" className="icon m-2">
            <Image src={"/github.png"} width={40} height={10} alt="" />
          </a>
        </div>
      </section>
    </div>
  );
}
