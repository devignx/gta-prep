import useStore from "../store/store";

const About = () => {
    const { theme } = useStore((state) => ({
        theme: state.theme,
    }));


    return (
        <div
            className={` ${
                theme === "default" ? "text-black" : "text-white"
            } flex flex-col max-w-4xl  h-[70vh] overflow-scroll mx-auto mt-4 p-4 items-center justify-center`}
        >
            <h3 className="md:text-3xl font-bold mt-6  ">
            About PEAS: Your Stress Management Companion
            </h3>
            <p className="mt-8 font-thin">Welcome to PEAS – your personal stress management companion designed to help you navigate life's challenges with ease. At PEAS, we understand the demanding pace of modern life and the toll it can take on your well-being. That's why we've crafted a collection of powerful tools to empower you in your journey towards a calmer and more balanced life.

</p>
        </div>
    );
};

export default About;
