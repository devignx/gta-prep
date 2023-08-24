import React from "react";
import useStore from "../../store/store";

const ZenCards = ({ selectedCategory, randomTask }) => {
    const { theme } = useStore((state) => ({
        theme: state.theme,
    }));
    return (
            <div
                className={`text-center h-[80vh] flex justify-center items-center  w-full md:text-6xl text-3xl md:p-8 p-4  ${
                    theme === "default" ? "text-black" : "text-white"
                } `}
            >
                 {randomTask}
               
            </div>
        
    );
};

export default ZenCards;
