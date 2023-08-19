import React, { useState, useEffect, useRef } from "react";

const audioMap = {
    "Zen Garden": "zen-garden.mp3",
    "Starry Night": "starry-night.mp3",
    "Beach Meditation": "beach-waves.mp3",
    "Forest Retreat": "forest-retreat.mp3",
    "Tibetan Singing Bowls": "tibetan-bowl.mp3",
};

function MeditationTimer({ theme, duration, onFinish }) {
    const [remainingTime, setRemainingTime] = useState(duration * 60);
    const [isPaused, setIsPaused] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        if (!audioRef.current) {
            const newAudio = new Audio(`/${audioMap[theme]}`);
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
    }, [theme, isPaused]);

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
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-lg font-medium mb-2">{theme}</h2>
                <p className="text-gray-600 mb-4">
                    Remaining Time: {formatTime(remainingTime)}
                </p>
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-md w-full"
                    onClick={handlePauseResume}
                >
                    {isPaused ? "Resume" : "Pause"}
                </button>
                <button
                    className="bg-red-500 text-white py-2 px-4 rounded-md w-full mt-2"
                    onClick={handleFinish}
                >
                    Finish Meditation
                </button>
            </div>
        </div>
    );
}

export default MeditationTimer;
