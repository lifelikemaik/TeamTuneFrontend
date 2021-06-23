import UserLoginView from "./views/UserLoginView";
import SignUpView from "./views/SignUpView";
import MovieDetailsView from "./views/MovieDetailsView";
import PlaylistListView from "./views/PlaylistListView";
import BrowsePlaylistiew from "./views/BrowsePlaylistsView";
import MyTeamTuneView from "./views/MyTeamTuneView";
import MyTeamTuneAccountView from "./views/MyTeamTuneAccountView";
import MyTeamTuneSubscriptionView from "./views/MyTeamTuneSubscriptionView";
import MyTeamTuneDeleteAccountView from "./views/MyTeamTuneDeleteAccountView";
import CallbackView from "./views/CallbackView";
import CreatePlaylistView from "./views/CreatePlaylistView";
import PlaylistDetailView from "./views/PlaylistDetailView";



// routes within the movie database example app
// used for routing

const routes = [
    {
        path: "/",
        component: BrowsePlaylistiew,
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
      path: "/playlist/:id",
      component: PlaylistDetailView,
    },
    {
        path: "/playlist/new",
        component: CreatePlaylistView
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
