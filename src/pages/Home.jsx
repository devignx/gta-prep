import hello from "../assets/hello.svg";
import RegisterForm from "../components/RegisterForm";
import Usefade from "../components/UseFade";

export default function Home() {
    return (
        <Usefade isActive={true}>
            <div className="flex flex-wrap lg:flex-nowrap w-full lg:overflow-y-hidden">
                <div className="flex w-full justify-center lg:overflow-y-hidden items-center">
                    <img
                        className="w-[15rem] mt-12 lg:mt-0 lg:w-[25rem]"
                        src={hello}
                        alt="hello"
                    />
                </div>
                <RegisterForm />
            </div>
        </Usefade>
    );
}
