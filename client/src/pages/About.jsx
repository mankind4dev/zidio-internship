import React, { useEffect } from "react";
import mankind from "../assets/slack.jpg";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";


export default function Home() {
  const { currentUser } = useSelector((state) => state.user);
  const inLine = "Hello, I'm Mankind4dev";

  useEffect(() => {
    const text = document.querySelector(".text");
    if (text) {
      text.innerHTML = text.innerText
        .split("")
        .map(
          (char, i) =>
            `<span style="transform: rotate(${i * 3.5}deg)">${char}</span>`
        )
        .join("");
    }
  }, []);

  return (
    <>
      <div className="flex flex-col p-28 px-3 max-w-6xl mx-auto">
        <div className="flex flex-col max-w-lg ">
          <h1 className="color">ZIDIO INTERNSHIP</h1>
          <p className="text-lg text-gray-500 font-bold">
            At Zidio, we believe in the power of innovation and creativity to
            transform the world.
          </p>
          <p className="text-lg text-gray-400 font-bold">
            Our mission is to inspire and empower individuals to reach their
            full{" "}
          </p>
          <p className="text-lg text-gray-400 font-bold">
            potential by providing innovative solutions and cutting-edge
            technology. With a focus on excellence, we are committed to creating
            a brighter future for all. Welcome to{" "}
          </p>{" "}
          <p className="text-lg text-blue-500 font-bold"> Zidio,</p>
          <p className="text-lg text-gray-400 font-bold">
            where possibilities are endless and dreams become reality.
          </p>
        </div>
        <div className="info">
          <div className="p-4">
            <div className="flex self-center">
              <p className="text-4xl font-bold">Hello, I'm </p>
              <h1 className="inline">
                <p className="color">Mankind4dev</p>
              </h1>
            </div>
            <p className="text-gray-800 py-2 px-[31px] text-xs sm:text-sm ">
              A passionate full-Stack Developer with a love for crafting digital
              experiences that delight and inspire.
            </p>
            <p className="text-gray-700 py-2 px-[31px] text-xs sm:text-sm">
              {" "}
              With a background in HTML, CSS, Tailwindcss, JavaScript,
              TypeScript and Git,
            </p>{" "}
            <p className="text-gray-600 py-2 px-[31px] text-xs sm:text-sm">
              I bring a unique perspecive to work, combining creativty with
              technical expertise to create innovative solutions.
            </p>
            <p className="text-gray-500 py-2 px-[31px] text-xs sm:text-sm">
              My journey in the world of development began 3 years ago and since
              then, i've been on a mission to continuously learn and grow in
              this ever-evolving field. Whether it's building sleek front-end
              interfaces or designing robust back-end systems, I thrive on the
              challenges and rewards of bringing ideals to life through code.
            </p>
            <p className="text-gray-400 py-2 px-[31px] text-xs sm:text-sm">
              When I'm not coding, you can find me in reading about technical
              tools libries, exploring new technologies or contributing to the
              developer community. I believe that the best projects are born out
              of collaboration and a shared passion for excellence.
            </p>
            <p className="text-gray-300 py-2 px-[31px] text-xs sm:text-sm">
              Let's create something amazing together
            </p>
          </div>
          <div className="circle">
            <img src={mankind} alt="" className="logo" />
            <div className="text">
              <p className="">
                Mankind4dev, a unique creativity and technical expertise -
              </p>
            </div>
          </div>
        </div>
        <div className="text-3xl"></div>
      </div>
      <Footer />
    </>
  );
}
