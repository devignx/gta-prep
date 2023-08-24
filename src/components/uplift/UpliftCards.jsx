import React from "react";
import useStore from "../../store/store";

const UpliftCards = ({ selectedCategory, randomQuote }) => {
    const { theme } = useStore((state) => ({
        theme: state.theme,
    }));
    return (
        <div className=" h-[70vh] overflow-y-auto  flex justify-center items-center">
            <p
                className={`md:text-6xl  text-3xl p-8 md:mt-6 ml-5 ${
                    theme === "default" ? "text-black" : "text-white"
                } `}
            >
                {randomQuote}
                
            </p>
        </div>
    );
};

export default UpliftCards;
