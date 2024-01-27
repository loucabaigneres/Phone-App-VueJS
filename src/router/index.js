import { createRouter, createWebHistory } from "vue-router";
import CallHistoryView from "../views/CallHistoryView.vue";
import ContactsView from "../views/ContactsView.vue";
import FavoritesView from "../views/FavoritesView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "call-history",
            component: CallHistoryView,
        },
        {
            path: "/contacts",
            name: "contacts",
            component: ContactsView,
        },
        {
            path: "/favorites",
            name: "favorites",
            component: FavoritesView,
        },
    ],
});

export default router;
