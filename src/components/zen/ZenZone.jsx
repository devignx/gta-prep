import React, { useState } from "react";
import Cards from "./ZenCards";
import Usefade from "../UseFade";

const ZenZone = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categoriesData = {
        "Stress Busters": [
            "Take 5 deep breaths, inhaling for 4 counts, exhaling for 6 counts.",
            "Write down 3 things you're grateful for today.",
            "Spend 5 minutes stretching to release physical tension.",
            "Set a timer for 2 minutes and focus on your breath.",
            "Listen to calming music for 10 minutes.",
            "Spend 5 minutes in nature, noticing the surroundings.",
            "Close your eyes and visualize a peaceful place for 3 minutes.",
            "Make a to-do list for the day to organize your tasks.",
            "Do a quick doodle or coloring for creative relaxation.",
            "Send a positive message or compliment to a friend.",
        ],
        "Overcoming Fears": [
            "Write down your fear and challenge it with a positive statement.",
            "Read a short article or watch a video about overcoming fear.",
            "Talk to a friend about something you fear to share the burden.",
            "Choose a small step related to your fear and take action.",
            "Find a quote that empowers you to face your fear.",
            "List 3 past situations where you conquered fear.",
            "Imagine a scenario where you've successfully overcome your fear.",
            "Identify 3 ways your life will improve after conquering the fear.",
            "Write a letter to your fear, expressing your determination.",
            "Take a deep breath and say, 'I am stronger than my fear.'",
        ],
        "Anxiety Alleviation": [
            "List 3 things you can see, 3 things you can hear, and 3 things you can touch to ground yourself.",
            "Set a timer for 1 minute and focus on your breath.",
            "Make a short checklist of tasks to ease anxious thoughts.",
            "Do a quick body scan, noticing areas of tension and releasing them.",
            "Write down a worry and then write a possible solution.",
            "Find an object to fidget with, like a stress ball or a pen.",
            "Text a friend or family member for a quick chat and connection.",
            "Name 3 things you've successfully managed in the past.",
            "Listen to a guided meditation for 5 minutes.",
            "Write 'This too shall pass' on a sticky note and keep it visible.",
        ],
        "Focus Boosting": [
            "Set a timer for 10 minutes and focus on a single task.",
            "Clear your workspace of any unnecessary items.",
            "Turn off notifications for the next 20 minutes of work.",
            "Create a short to-do list for the next hour.",
            "Start your day by organizing your tasks in order of priority.",
            "Eliminate one distraction from your environment.",
            "Take a 1-minute break and stretch to refresh your mind.",
            "Practice deep breathing for 2 minutes before a task.",
            "Visualize yourself completing a task successfully.",
            "Close unnecessary browser tabs while working.",
        ],
    };

    const getRandomTask = (category) => {
        const tasks = categoriesData[category];
        const randomIndex = Math.floor(Math.random() * tasks.length);
        return tasks[randomIndex];
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div
            className={` ${
                !selectedCategory && "flex justify-center items-center "
            }`}
        >
            <Usefade isActive={!selectedCategory}>
                <div className="flex h-[60vh]  w-full p-4 justify-center items-center overflow flex-col gap-2">
                    {Object.keys(categoriesData).map((category) => (
                        
                    <div
                            key={category}
                            className={`bg-white text-black border  p-5  hover:bg-blue-100 rounded-full cursor-pointer text-center hover:bg-blue-10`}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category}
                        </div>
                    ))}
                </div>
            </Usefade>
            {selectedCategory && (
                <Cards
                    selectedCategory={selectedCategory}
                    randomTask={getRandomTask(selectedCategory)}
                />
            )}
        </div>
    );
};

export default ZenZone;
