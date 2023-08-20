import React, { useState } from "react";
import useStore from "../store/store";

const questions = [
    "Did you wake up feeling refreshed and well-rested?",
    "Are you looking forward to the day ahead?",
    "Do you feel mentally prepared to handle challenges today?",
    "Have you managed to resolve any stress from yesterday?",
    "Do you feel confident in managing your tasks and responsibilities today?",
];

const answerValues = {
    Yes: 0,
    "Not sure": 0.5,
    "Not really": 1,
};

function Questionnaire() {
    const { theme } = useStore((state) => ({
        theme: state.theme,
    }));

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState(
        new Array(questions.length).fill(null)
    );
    const [doneClicked, setDoneClicked] = useState(true);
    const handleAnswerSelect = (answer) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = answer;
        setAnswers(newAnswers);

        if (currentQuestionIndex < questions.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handleDone = () => {
        setDoneClicked(false);
        let totalScore = 0;
        answers.forEach((answer) => {
            if (answer in answerValues) {
                totalScore += answerValues[answer];
            }
        });

        const percentage = ((totalScore / questions.length) * 100).toFixed(2);

        const apiUrl = "https://gta-alpha.vercel.app/recordings";
        const token =
            "eyJhbGciOiJSUzI1NiIsImtpZCI6IjYzODBlZjEyZjk1ZjkxNmNhZDdhNGNlMzg4ZDJjMmMzYzIzMDJmZGUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZ3RhLXN0cmVzcyIsImF1ZCI6Imd0YS1zdHJlc3MiLCJhdXRoX3RpbWUiOjE2OTI0NDgyNjcsInVzZXJfaWQiOiJGMGpURERsVnRWV3hTZWpiUEdtUUtHYUU4azYzIiwic3ViIjoiRjBqVEREbFZ0Vld4U2VqYlBHbVFLR2FFOGs2MyIsImlhdCI6MTY5MjQ0ODI2NywiZXhwIjoxNjkyNDUxODY3LCJlbWFpbCI6InNoaWJpbkBtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJzaGliaW5AbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.ku4wJaFWfbi8NNkHRfVbXR1--V4AQHnrb4Esn4qM-zG5UFeKVseZe5Tm7-oEsmdV7cYYDjerXT8yBa_BoIFIhX3DJAcVQLNs5cy3V5hH3r4FUB4GYlwmKtiGrBb84Q0mXqx0kpMN_jMSUkeUutBJNkStGh43JoQ7rh5btTJSymv6BiElWAu3btTu8agYI4WMelNHqbbRJKINRWAujCDsilifoLYD-ETXBXktS_RaI9hXlU_qp_NLw7F-uvya_Qscj1CHxg90vHU3QAwDj7kiOVT7-ubkkoEf47XZIn43n0dGUx887p6QXP3KGOhn52vGSn7kcgD_qjsphfAc5xzhvQ"; // Replace with your actual token

        const headers = {
            Authorization: token,
            "Content-Type": "application/json",
        };

        const body = JSON.stringify({
            recording: parseInt(percentage),
        });
        fetch(apiUrl, {
            method: "POST",
            headers: headers,
            body: body,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.result[0]);
                localStorage.setItem(
                    "apiResponse",
                    JSON.stringify(data.result[0])
                );
            })
            .catch((error) => {
                console.error("API Error:", error);
            });
    };

    return (
        <div
            className={`flex ${
                theme === "default" ? "text-black" : "text-white"
            } `}
        >
            <div className=" p-8 rounded-lg w-96">
                <h1 className="text-2xl font-semibold lg:text-5xl mb-4">
                    Questionnaire
                </h1>
                {currentQuestionIndex < questions.length ? (
                    <>
                        <p>{questions[currentQuestionIndex]}</p>
                        <div className="flex space-x-2 mt-4">
                            {Object.keys(answerValues).map((option, index) => (
                                <button
                                    key={index}
                                    className="bg-white border text-black py-2 px-4 rounded-md"
                                    onClick={() => handleAnswerSelect(option)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </>
                ) : (
                    <div>
                        <p>Thank you for completing the questionnaire!</p>
                        {doneClicked ? (
                            <button
                                className="bg-green-500 text-white py-2 px-4 rounded-md mt-4 w-full"
                                onClick={handleDone}
                            >
                                Done
                            </button>
                        ) : (
                            <p className="text-2xl mt-8">
                                Your data will be available to view soon :)
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Questionnaire;
