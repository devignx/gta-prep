import React, { useState, useEffect, useRef } from "react";
import useStore from "../../store/store";
import { FaPause, FaPlay, FaStop } from "react-icons/fa";

const audioMap = {
    zengarden: "zen-garden.mp3",
    starry: "starry-night.mp3",
    beach: "beach-waves.mp3",
    forest: "forest-retreat.mp3",
    tibet: "tibetan-bowl.mp3",
};

function MeditationTimer({ myTheme, duration, onFinish }) {
    const [remainingTime, setRemainingTime] = useState(duration * 60);
    const [isPaused, setIsPaused] = useState(false);
    const audioRef = useRef(null);
    const {
        // updateToken, identity, setIdentity,
        accessToken,
        theme,
    } = useStore((state) => ({
        updateToken: state.updateToken,
        identity: state.identity,
        setIdentity: state.setIdentity,
        accessToken: state.accessToken,
        theme: state.theme,
    }));

    useEffect(() => {
        if (!audioRef.current) {
            console.log(myTheme)
            const newAudio = new Audio(`/${audioMap[myTheme]}`);
            console.log(newAudio)
            newAudio.loop = true;
            audioRef.current = newAudio;
        }

        if (!isPaused) {
            audioRef.current.play();

            const timerInterval = setInterval(() => {
                setRemainingTime((prevTime) => prevTime - 1);
            }, 1000);

            return () => {
                clearInterval(timerInterval);
            };
        } else {
            audioRef.current.pause();
        }
    }, [myTheme, isPaused]);

    useEffect(() => {
        if (isPaused && audioRef.current) {
            audioRef.current.pause();
        } else if (!isPaused && audioRef.current) {
            audioRef.current.play();
        }
    }, [isPaused]);

    useEffect(() => {
        if (remainingTime === 0 && audioRef.current) {
            audioRef.current.pause();
            onFinish();
        }
    }, [remainingTime, onFinish]);

    const handlePauseResume = () => {
        setIsPaused((prevIsPaused) => !prevIsPaused);
    };

    const handleFinish = () => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
        setRemainingTime(duration * 60);
        onFinish();
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`;
    };

    return (
        <div className={`p-12  h-[80vh] rounded-2xl flex flex-col justify-center items-center `}>
            
                <h2 className="text-4xl md:text-6xl text-white font-medium mb-2 flex justify-center">
                    {theme}
                </h2>
                <p className="text-white/30 text-xl  mb-4 mt-4 ">
                    Remaining Time:
                   
                </p>
                <div className="md:text-[8rem] w-[90%] text-white/30 text-5xl flex justify-center md:mb-16 mb-8 ">{formatTime(remainingTime)}</div>
                <div className="flex flex-wrap justify-center md:gap-20 gap-6">
                    <button
                        className={` ${theme} w-16 h-16 flex justify-center items-center text-white py-2 px-4 rounded-full`}
                        onClick={handlePauseResume}
                    >
                        {isPaused ? <FaPlay /> : <FaPause />}
                    </button>
                    <button
                        className={` ${theme} w-16 h-16 flex justify-center items-center text-white py-2 px-4 rounded-full`}
                        onClick={handleFinish}
                    >
                        <FaStop />
                    </button>
                </div>
            </div>
    );
}

export default MeditationTimer;
