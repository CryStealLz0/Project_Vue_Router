import Example from "./components/ExampleComponent.vue";
import Home from "./components/HomeComponent.vue";
import User from "./components/UserComponent.vue";
import Hello from "./components/HelloComponent.vue";
import Bye from "./components/ByeComponent.vue";
import NotFound from "./components/NotFoundComponent.vue";

export const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
        // Dengan alias. ini bisa membuat kita dapat mengakses path dengan "/" dan "/rumah"
        // alias: "/rumah",
    },
    {
        path: "/rumah",
        /* dengan redirect kita bisa mengakses rumah dengan "/ruman" namun akan di arahkan / otomatis akan
         mengubah yang tadinya "/rumah menjadi "/" sesuai redirect nya */
        redirect: "/",
    },
    {
        path: "/example",
        name: "example",
        component: Example,
    },
    {
        name: "About",
        path: "/about",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "./components/AboutComponent.vue"
            ),
    },
    {
        path: "/user/:username?",
        name: "user",
        component: User,
        children: [
            {
                path: "hello",
                component: Hello,
            },
            {
                path: "bye",
                component: Bye,
            },
        ],
    },

    {
        path: "/:pathMatch(.*)*",
        name: "notFound",
        component: NotFound,
    },
];
