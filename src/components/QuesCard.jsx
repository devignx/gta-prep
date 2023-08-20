import { useState } from "react";
import peassad from "../assets/peas-sad.png";
import peas from "../assets/peas.png";
import Tooltip from "../components/Tooltip";
import { Link } from "react-router-dom";
export default function QuesCard() {
    return (
        <div className="w-full cursor-pointer md:w-[18rem] text-center text-2xl relative bg-white p-12 px-8 shad rounded-2xl">
            <div className="group absolute text-pri/50 top-3 right-3">
                <Tooltip text={"This is your Stress level"} />
            </div>
            <img className="mx-auto mb-4" src={peas} alt="peas" />
            <p>Answer some questions if u got free time :)</p>

            <Link
                to="/profile"
                className="bg-pri block text-white px-6 py-3 rounded-full mt-8 text-base font-medium w-full"
            >
                View in Detail
            </Link>
        </div>
    );
}
