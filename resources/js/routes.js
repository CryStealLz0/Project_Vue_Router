import Example from "./components/ExampleComponent.vue";
import Home from "./components/HomeComponent.vue";

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
];
