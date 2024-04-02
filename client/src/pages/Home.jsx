import React from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Location from "../components/Location"

export default function Home() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      <div className="flex flex-col p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Zidio internship <span className="text-slate-500">perfect</span>
          <br />
          innovation
        </h1>
        <div className="text-gray-400 py-2 px-[31px] text-xs sm:text-sm">
          At Zidio we believe in the power of innovation and creativity to
          <br />
          transform the world. Our mission is to inspire and empower individuals
          to reach their full potential goal....
        </div>
        <div className="flex flex-col justify-center gap-4 sm:flex-col">
          <div className="">
            {currentUser && (
              <div className="flex flex-col p-5 border-4 w-[50%] h-[50%]">
                <h1 className="flex text-3xl font-bold justify-center">
                  Location of the user
                </h1>
                <div className="flex flex-col gap-4">
                  <p className="text-3xl ">
                    Username :{" "}
                    <span className="text-slate-400">
                      {currentUser.username}
                    </span>
                  </p>
                  <p className="text-3xl">
                    Gmail :{" "}
                    <span className="text-slate-400">{currentUser.email}</span>
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col p-5 border w-full h-full">
            <Location />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
