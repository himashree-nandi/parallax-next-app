import React from "react";

export default function TheJournal() {
  return (
    <div>
      <section id="thejournal" className="font-fonts">
        <div className=" p-[100px] bg-black overflow-hidden relative">
          <h2
            className="font-sans font-medium mb-7 text-white text-center text-4xl text"
            id="text"
          >
            The Journal
            <br />
            <br />
            <p className=" text-base text-white">
              we seek to provide the most authentic content from adventtures,
              explore and travellers around the world. Our long-term mission is
              to aducaate, inspire and enable all peoples to experience and
              protect wilderness.
            </p>
          </h2>
          <div className=" items-center justify-center max-w-[1320px] mx-auto grid lg:grid-cols-2 md:grid-cols-1 gap-2 reveal">
            <div className=" text-center">
              <div className=" h-72 w-96 rounded-xl mx-auto shadow-2xl overflow-hidden">
                <div className=" bg-[url('/journal1.jpg')] h-72 w-96 bg-cover hover:scale-125 duration-1000"></div>
              </div>
              <span>
                <p className="my-5">Feb 29, 2024</p>
                <h1 className=" text-2xl">An Unforgettable</h1>
                <p className="my-2">
                  When we walked into the wilds, everything <br />
                  will change and move so slow
                </p>
              </span>
            </div>
            <div className=" text-center">
              <div className=" h-72 w-96 rounded-xl mx-auto shadow-2xl overflow-hidden">
                <div className=" bg-[url('/journal2.jpg')] h-72 w-96 bg-cover hover:scale-125 duration-1000"></div>
              </div>
              <span>
                <p className=" my-2">Feb 29, 2024</p>
                <h1 className=" text-2xl">Into The Wild</h1>
                <p className="my-2">
                  When we walked into the wilds, everything
                  <br />
                  will change and move so slow
                </p>
              </span>
            </div>
          </div>
        </div>
        {/* <div className=" text-center">
          <a href="#footer">
            <button className=" text-blue-800 font-medium text-xl">
              ALL POSTS
            </button>
          </a>
        </div> */}
      </section>
    </div>
  );
}
