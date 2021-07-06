import UserLoginView from "./views/UserLoginView";
import SignUpView from "./views/SignUpView";
import MovieDetailsView from "./views/MovieDetailsView";
import PlaylistListView from "./views/PlaylistListView";
import BrowsePlaylistView from "./views/BrowsePlaylistsView";
import MyTeamTuneView from "./views/MyTeamTuneView";
import CallbackView from "./views/CallbackView";
import CreatePlaylistView from "./views/CreatePlaylistView";
import PlaylistDetailView from "./views/PlaylistDetailView";
import LandingPageView from "./views/LandingPageView";



// routes within the movie database example app
// used for routing

const routes = [
    {
        path: "/",
        component: LandingPageView,
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
        component: BrowsePlaylistView,
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
      path: "/playlist/:id",
      component: PlaylistDetailView,
    },
    {
        path: "/myteamtune",
        component: MyTeamTuneView,
    },
    {
        path: "/callback",
        component: CallbackView,
    },
];

export default routes;
