import { lazy } from "react";

const Home = lazy(() => import("../views/Home"));
const About = lazy(() => import("../views/About"));

export default [
    {
        path: "/",
        component: Home,
        exact: true,
    },
    {
        path: "/about",
        component: About,
        exact: true
    }
];