import React from "react";
import hello from "../assets/hello.svg";

export default function Hello(){
    return(
<div className="flex h-full w-full justify-center items-center text-center text-3xl text-blue-400 ">
<img
                        className="w-[15rem] mt-12 lg:mt-0 lg:w-[25rem]"
                        src={hello}
                        alt="hello"
                    />
                </div>

    )
}