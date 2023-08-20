import React from "react";
import useStore from "../../store/store";

const ZenCards = ({ selectedCategory, randomTask }) => {
    const { theme } = useStore((state) => ({
        theme: state.theme,
    }));
    return (
        <div>
            <p
                className={`text-6xl  p-8 mt-7 ml-5 ${
                    theme === "default" ? "text-black" : "text-white"
                } `}
            >
                {randomTask}
            </p>
        </div>
    );
};

export default ZenCards;
