import React from "react";
import useStore from "../../store/store";

const UpliftCards = ({ selectedCategory, randomQuote }) => {
    const { theme } = useStore((state) => ({
        theme: state.theme,
    }));
    return (
        <div>
            <p
                className={`md:text-6xl  p-8 mt-7 ml-5 ${
                    theme === "default" ? "text-black" : "text-white"
                } `}
            >
                {randomQuote}
            </p>
        </div>
    );
};

export default UpliftCards;
