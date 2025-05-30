import { Navigate, useNavigate } from "@solidjs/router";
import TelegramLoginButton from "./TelegramLoginButton";

type TelegramUser = {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
};

export default function Login() {
    let button_test: HTMLElement | null;
    const navigate = useNavigate();

    if (localStorage.getItem("token") !== null) {
        navigate("/dashboard", { replace: true })
        return;
    }

    const handleAuth = (user: TelegramUser) => {
        localStorage.setItem("token", user.id.toString());
        button_test?.remove();
        navigate("/dashboard", { replace: true })
    };

    const handleLoaded = (button: HTMLElement) => {
        button_test = button;
    }

    return (
        <TelegramLoginButton botName="MeowWowLife_bot" onAuth={handleAuth} onLoaded={handleLoaded} />
    );
}