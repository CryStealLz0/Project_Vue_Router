import Example from "./components/ExampleComponent.vue";
import Home from "./components/HomeComponent.vue";
import User from "./components/UsernameComponent.vue";

export const routes = [
    {
        path: "/home",
        name: "home",
        component: Home,
    },
    {
        path: "/example",
        name: "example",
        component: Example,
    },
    {
        path: "/user/:username?",
        name: "user",
        component: User,
    },
];
