import React, { useEffect } from "react";

export default function About() {
  useEffect(() => {
    window.addEventListener("scroll", reveal);
    function reveal() {
      var reveals = document.querySelectorAll(".reveal");
      for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if (revealtop < windowheight - revealpoint) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }
  }, []);

  return (
    <div>
      <section id="section" className="beforecreate font-fonts">
        <div className=" relative p-[100px] bg-black">
          <h2
            className="font-sans font-medium mb-7 text-white text-center text-4xl text"
            id="text"
          >
            Explore the world with West Compas
            <br />
            <br />
            <p className=" text-base text-white">
              we seek to provide the most authentic content from adventtures,
              explore and travellers around the world. Our long-term mission is
              to aducaate, inspire and enable all peoples to experience and
              protect wilderness.
            </p>
          </h2>
          <div className=" items-center justify-center max-w-[1320px] mx-auto grid lg:grid-cols-3 md:grid-cols-1 gap-2 reveal">
            <div className=" w-72 h-96 rounded-xl mx-auto shadow-2xl overflow-hidden">
              <div className=" bg-[url('/alaska.jpg')] w-72 h-96 bg-cover hover:scale-125 duration-1000">
                <h1 className=" font-medium text-2xl p-10 [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)] ">
                  West Mountain Trek ALASKA
                </h1>
              </div>
            </div>
            <div className=" w-72 h-96 rounded-xl mx-auto shadow-2xl overflow-hidden">
              <div className=" bg-[url('/nepal.jpg')] w-72 h-96 bg-cover hover:scale-125 duration-1000">
                <h1 className=" font-medium text-2xl p-10 [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)] ">
                  West Mountains Park NEPAL
                </h1>
              </div>
            </div>
            <div className=" w-72 h-96 rounded-xl mx-auto shadow-2xl overflow-hidden">
              <div className=" bg-[url('/sail-island.jpg')] w-72 h-96 bg-cover hover:scale-125 duration-1000">
                <h1 className=" font-medium text-2xl p-10 [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)] ">
                  West Mountains Sail ICELAND
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" text-center">
          <a href="#thejournal">
            <button className=" text-blue-800 font-medium text-xl">
              SEE MORE{" "}
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
