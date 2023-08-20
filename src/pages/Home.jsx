import { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import Usefade from "../components/UseFade";
import useStore from "../store/store";
import Feeling from "../components/Feeling";
import StressLevel from "../components/StressLevel";
import Linechart from "../components/LineChart";
import PostRecommendation from "../components/Postrecommendation";
import MeditationApp from "../components/meditation/MeditationApp";
import UserChart from "../components/UserChart";
import data from "../components/employee.json";
import smiley from "../assets/smiley.svg";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [choice, setChoice] = useState("");
    const [renderedComp, setRenderedComp] = useState("userchart");
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

    return (
        <>
            {/* <Usefade isActive={accessToken === ""}>
                <RegisterForm />
            </Usefade> */}

            <Usefade isActive={true}>
                <div className="flex flex-wrap p-8 justify-between md:p-16">
                    <div className="flex w-full md:w-[50%] flex-wrap gap-6">
                        <Feeling />
                        <StressLevel />
                        <PostRecommendation />
                    </div>

                    <div
                        className={`w-full mt-12 md:mt-0 relative md:w-[45%] h-[80vh] pl-4 rounded-2xl ${
                            theme === "default" ? "bg-white" : theme
                        } `}
                    >
                        <button
                            onClick={() =>
                                choice ? setChoice(false) : setChoice(true)
                            }
                            className="absolute flex justify-center items-center bg-white text-3xl rounded-full shad-blu w-16 h-16 text-pri -bottom-8 centerh"
                        >
                            {!choice ? (
                                <img src={smiley} alt="smiley" />
                            ) : (
                                <IoCloseCircleOutline />
                            )}
                        </button>

                        {choice && (
                            <div className="flex flex-wrap topppp gap-6 w-1/2 absolute centerrr mx-auto items-end justify-center">
                                <button
                                    onClick={() => {
                                        setRenderedComp("zen");
                                        setChoice(false);
                                    }}
                                    className="px-6 py-5 w-fit h-fit shad-blu bg-white rounded-2xl"
                                >
                                    Zen Mode
                                </button>
                                <button
                                    onClick={() => {
                                        setRenderedComp("meditation");
                                        setChoice(false);
                                    }}
                                    className="px-6 py-5 w-fit h-fit shad-blu bg-white rounded-2xl"
                                >
                                    Mediatation
                                </button>
                                <button
                                    onClick={() => {
                                        {
                                            setRenderedComp("help");
                                            setChoice(false);
                                        }
                                    }}
                                    className="px-6 py-5 w-fit h-fit shad-blu bg-white rounded-2xl"
                                >
                                    Get Help
                                </button>
                                <button
                                    onClick={() => {
                                        setRenderedComp("journal");
                                        setChoice(false);
                                    }}
                                    className="px-6 py-5 w-fit h-fit shad-blu bg-white rounded-2xl"
                                >
                                    My Journal
                                </button>
                            </div>
                        )}

                        {renderedComp === "meditation" && <MeditationApp />}
                        {renderedComp === "linechart" && <Linechart />}
                        {renderedComp === "userchart" && (
                            <UserChart employeeData={data.employees} />
                        )}
                    </div>
                </div>
            </Usefade>
        </>
    );
}
