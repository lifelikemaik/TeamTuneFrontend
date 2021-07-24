import UserLoginView from "./views/UserLoginView";
import SignUpView from "./views/SignUpView";
import PlaylistListView from "./views/PlaylistListView";
import BrowsePlaylistView from "./views/BrowsePlaylistsView";
import MyTeamTuneView from "./views/MyTeamTuneView";
import CreatePlaylistView from "./views/CreatePlaylistView";
import PlaylistDetailView from "./views/PlaylistDetailView";
import LandingPageView from "./views/LandingPageView";
import InviteView from "./views/InviteView";
import PremiumBookingView from "./views/PremiumBookingView";
import LegalView from "./views/LegalView";



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
        path: "/invite/:id",
        component: InviteView,
    },
    {
        path: "/myteamtune",
        component: MyTeamTuneView,
    },
    {
        path: "/bookpremium",
        component: PremiumBookingView,
    },
    {
        path: "/legal",
        component: LegalView,
    },
];

export default routes;
