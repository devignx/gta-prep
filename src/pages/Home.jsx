import { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import Usefade from "../components/UseFade";
import useStore from "../store/store";
import Feeling from "../components/Feeling";
import StressLevel from "../components/StressLevel";
import Linechart from "../components/LineChart";
import PostRecommendation from "../components/Postrecommendation";

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { updateToken, identity, setIdentity, accessToken } = useStore(
        (state) => ({
            updateToken: state.updateToken,
            identity: state.identity,
            setIdentity: state.setIdentity,
            accessToken: state.accessToken,
        })
    );

    return (
        <>
            <Usefade isActive={accessToken === ""}>
                <RegisterForm />
            </Usefade>

            <Usefade isActive={accessToken}>
                <div className="flex flex-wrap p-8 md:p-16">
                    <div className="flex mx-auto w-full md:w-1/2 flex-wrap gap-6">
                        <Feeling />
                        <StressLevel />
                        <PostRecommendation />
                    </div>
                    <div className=" w-full md:w-1/2 h-48 bg-white rounded-2xl"></div>
                </div>
            </Usefade>
        </>
    );
}
