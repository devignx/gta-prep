import { useState } from "react";
import Usefade from "../components/UseFade";
import useStore from "../store/store";
import MeditationApp from "../components/meditation/MeditationApp";
import smiley from "../assets/smiley.svg";
import { IoCloseCircleOutline } from "react-icons/io5";
import ContactsPage from "../components/About";
import ZenZone from "../components/zen/ZenZone";
import Journal from "../components/journal/Journal";
import Hello from "../components/Hello";
import Uplift from "../components/uplift/Uplift";
import About from "../components/About";

export default function Home() {
    const Nav = () => {
        return (
            <div className="flex flex-col gap-6 w-full  h-[60vh] mt-10  items-center justify-center">
              
              <div className="flex md:flex-row  flex-col gap-4 md:gap-6 justify-center items-center"><button
                    onClick={() => {
                        setRenderedComp("zen");
                        setChoice(false);
                    }}
                    className="p-5 w-fit h-fit shad-blu bg-white rounded-2xl"
                >
                    Zen Mode
                </button>
                <button
                    onClick={() => {
                        setRenderedComp("meditation");
                        setChoice(false);
                    }}
                    className="p-5 w-fit h-fit shad-blu bg-white rounded-2xl"
                >
                    Meditation
                </button></div>
                <div className="flex md:flex-row  flex-col gap-4 md:gap-6 justify-center items-center">
                <button
                    onClick={() => {
                        setRenderedComp("uplift");
                        setChoice(false);
                    }}
                    className="p-5 w-fit h-fit shad-blu bg-white rounded-2xl"
                >
                    Uplift Yourself
                </button>
                <button
                    onClick={() => {
                        {
                            setRenderedComp("journal");
                            setChoice(false);
                        }
                    }}
                    className="p-5 w-fit h-fit shad-blu bg-white rounded-2xl"
                >
                    My Journal
                </button>
                </div>
                <button
                    onClick={() => {
                        setRenderedComp("about");
                        setChoice(false);
                    }}
                    className="p-5  w-fit h-fit shad-blu bg-white rounded-2xl"
                >
                    About this app
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
                        className={`w-full p-4 relative md:w-[45%] md:h-[80vh] h-[80vh] rounded-2xl  ${
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
                        {renderedComp === "about" && <About />}
                        {renderedComp === "zen" && <ZenZone />}
                        {renderedComp === "journal" && <Journal />}
                        {renderedComp === "hello" && <Hello />}
                        {renderedComp === "uplift" && <Uplift />}
                      
                      
                    </div>
                </div>
            </Usefade>
        </>
    );
}
