import UserLoginView from "./views/UserLoginView";
import SignUpView from "./views/SignUpView";
import MovieDetailsView from "./views/MovieDetailsView";
import PlaylistListView from "./views/PlaylistListView";

// routes within the movie database example app
// used for routing

const routes = [
    {
        path: "/",
        component: PlaylistListView,
        exact: true,
    },
    {
        path: "/login",
        component: UserLoginView,
    },
    {
        path: "/register",
        component: SignUpView,
    },
    {
        path: "/movie/:id",
        component: MovieDetailsView,
    },
];

export default routes;
