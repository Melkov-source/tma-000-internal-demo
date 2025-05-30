import { onMount } from "solid-js";

type TelegramUser = {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
};

type Props = {
    botName: string;
    onAuth: (user: TelegramUser) => void;
    onLoaded: (button: HTMLElement) => void;
};

export default function TelegramLoginButton(props: Props) {
    (window as any).onTelegramAuth = (user: TelegramUser) => {
        props.onAuth(user);
    };

    onMount(() => {
        const ID: string = "telegram-login-script";
        const WIDGET: string = "https://telegram.org/js/telegram-widget.js?22";

        const script = document.getElementById(ID);

        if (!script) {
            const script = document.createElement("script");

            script.id = ID;
            script.src = WIDGET;

            script.async = true;

            script.setAttribute("data-telegram-login", props.botName);
            script.setAttribute("data-size", "large");
            script.setAttribute("data-onauth", "onTelegramAuth(user)");
            script.setAttribute("data-request-access", "write");

            document.body.appendChild(script);

            script.onload = () => {
                var element = document.getElementById("telegram-login-MeowWowLife_bot")!;

                props.onLoaded(element);
            }
        }
    });

    return <div />;
}