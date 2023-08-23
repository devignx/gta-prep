import { useState } from "react";
import Usefade from "../components/UseFade";
import useStore from "../store/store";
import MeditationApp from "../components/meditation/MeditationApp";
import smiley from "../assets/smiley.svg";
import { IoCloseCircleOutline } from "react-icons/io5";
import ContactsPage from "../components/GetHelp";
import ZenZone from "../components/zen/ZenZone";
import Journal from "../components/journal/Journal";
import Hello from "../components/Hello";

export default function Home() {
    const Nav = () => {
        return (
            <div className="flex flex-wrap topppp gap-6 w-1/2  h-auto absolute centerrr mx-auto items-end justify-center">
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
                    Meditation
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
        );
    };

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [choice, setChoice] = useState("zen");
    const [renderedComp, setRenderedComp] = useState("hello");
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
                <div className="flex flex-wrap p-8 justify-center md:p-16">
            
                    <div
                        className={`w-full  relative md:w-[45%] md:h-[80vh] min-h-[80vh] h-auto rounded-2xl ${
                            theme === "default" ? "bg-white" : theme
                        } `}
                    >
                        <button
                            onClick={() =>
                                renderedComp !== "nav"
                                    ? setRenderedComp("nav")
                                    : setRenderedComp("hello")
                            }
                            className="absolute flex justify-center items-center bg-white text-3xl rounded-full shad-blu w-16 h-16 text-pri -bottom-8 centerh"
                        >
                            {renderedComp !== "nav" ? (
                                <img src={smiley} alt="smiley" />
                            ) : (
                                <IoCloseCircleOutline />
                            )}
                        </button>

                        {renderedComp === "nav" && <Nav />}
                        {renderedComp === "meditation" && <MeditationApp />}
                        {renderedComp === "help" && <ContactsPage />}
                        {renderedComp === "zen" && <ZenZone />}
                        {renderedComp === "journal" && <Journal />}
                        {renderedComp === "hello" && <Hello />}
                      
                      
                    </div>
                </div>
            </Usefade>
        </>
    );
}
