import { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import Usefade from "../components/UseFade";
import useStore from "../store/store";

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { updateToken, identity, setIdentity, accessToken } = useStore((state)=> ({updateToken: state.updateToken, identity: state.identity, setIdentity: state.setIdentity, accessToken: state.accessToken}))

    return (
        <>
            <Usefade isActive={accessToken === ''}>
                <RegisterForm />
            </Usefade>

            <Usefade isActive={isLoggedIn}>
                <div className="flex gap ">
                    <div></div>
                </div>
            </Usefade>
        </>
    );
}
