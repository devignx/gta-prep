import React, { useState } from "react";
import MeditationTimer from "./MeditationTimer";

const themes = [
    "Zen Garden",
    "Starry Night",
    "Beach Meditation",
    "Forest Retreat",
    "Tibetan Singing Bowls",
];

const durations = [5, 10, 20, 30];

function MeditationApp() {
    const [selectedTheme, setSelectedTheme] = useState("");
    const [selectedDuration, setSelectedDuration] = useState(5);
    const [meditationStarted, setMeditationStarted] = useState(false);

    const handleThemeChange = (event) => {
        setSelectedTheme(event.target.value);
    };

    const handleDurationChange = (event) => {
        setSelectedDuration(Number(event.target.value));
    };

    const handleStartMeditation = () => {
        setMeditationStarted(true);
    };

    const handleFinishMeditation = () => {
        setMeditationStarted(false);
    };

    if (meditationStarted) {
        return (
            <MeditationTimer
                theme={selectedTheme}
                duration={selectedDuration}
                onFinish={handleFinishMeditation}
            />
        );
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-semibold mb-4">
                    Meditation Theme Selector
                </h1>
                <label className="block mb-2 font-medium">
                    Choose a Meditation Theme:
                </label>
                <select
                    className="block w-full p-2 border rounded-md mb-4"
                    onChange={handleThemeChange}
                >
                    <option value="">Select a theme</option>
                    {themes.map((theme, index) => (
                        <option key={index} value={theme}>
                            {theme}
                        </option>
                    ))}
                </select>
                <label className="block mb-2 font-medium">
                    Select Meditation Duration:
                </label>
                <select
                    className="block w-full p-2 border rounded-md mb-4"
                    onChange={handleDurationChange}
                >
                    {durations.map((duration, index) => (
                        <option key={index} value={duration}>
                            {duration} minutes
                        </option>
                    ))}
                </select>
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-md w-full"
                    onClick={handleStartMeditation}
                >
                    Start Meditation
                </button>
            </div>
        </div>
    );
}

export default MeditationApp;
