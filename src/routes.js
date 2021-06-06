import UserLoginView from "./views/UserLoginView";
import SignUpView from "./views/SignUpView";
import MovieDetailsView from "./views/MovieDetailsView";
import PlaylistListView from "./views/PlaylistListView";
import BrowsePlaylistiew from "./views/BrowsePlaylistsView";
import MyTeamTuneView from "./views/MyTeamTuneView";
import CreatePlaylistView from "./views/CreatePlaylistView";

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
    {
        path: "/browse",
        component: BrowsePlaylistiew,
    },
    {
        path: "/playlists",
        component: PlaylistListView,
    },
    {
        path: "/playlist/new",
        component: CreatePlaylistView
    },
    {
        path: "/myteamtune",
        component: MyTeamTuneView,
    },
];

export default routes;
