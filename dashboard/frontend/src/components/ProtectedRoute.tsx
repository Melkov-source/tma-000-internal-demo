import { JSX } from "solid-js";
import { Navigate } from "@solidjs/router";

export default function ProtectedRoute(props: { children: JSX.Element }) {
    const isAuth = !!localStorage.getItem("token");
    return isAuth ? props.children : <Navigate href="/login" />;
}