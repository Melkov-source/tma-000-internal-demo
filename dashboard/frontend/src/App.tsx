import { Navigate, Route, Router } from "@solidjs/router";
import Layout from "./layouts/Layout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function NotFound() {
    return (<h1>404 — Страница не найдена</h1>);
}

export default function App() {
    return (
        <Router root={Layout}>
            <Route
                path="/"
                component={() =>
                    localStorage.getItem("token") ? (
                        <Navigate href="/dashboard" />
                    ) : (
                        <Navigate href="/login" />
                    )
                }
            />

            <Route path="/login" component={Login}></Route>

            <Route
                path="/dashboard"
                component={() => (
                    <Dashboard />
                )}
            />

            <Route
                path="/dashboard/test"
                component={() => (
                    <ProtectedRoute>
                        <h1>asdasd</h1>
                    </ProtectedRoute>
                )}
            />
        </Router>
    );
}