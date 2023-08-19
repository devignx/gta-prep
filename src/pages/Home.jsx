import { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import Usefade from "../components/UseFade";

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <>
            <Usefade isActive={!isLoggedIn}>
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
