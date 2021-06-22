import UserService from "../../services/UserService";

export function login(username, password) {
    function onSuccess(user) {
        return { type: "LOGIN_SUCCESS", user: user };
    }
    function onFailure(error) {
        return { type: "LOGIN_FAILURE", error: error };
    }

    return async (dispatch) => {
        try {
            let resp = await UserService.login(username, password);
            dispatch(onSuccess(resp.user));
        } catch (e) {
            dispatch(onFailure(e));
        }
    };
}

export function logout() {
    UserService.logout();
    return { type: "LOGOUT" };
}

export function loginReset() {
    return { type: "LOGIN_RESET" };
}

export function register(username, password, isAdmin, code) {
    function onSuccess(user) {
        return { type: "LOGIN_SUCCESS", user: user };
    }
    function onFailure(error) {
        return { type: "LOGIN_FAILURE", error: error };
    }

    return async (dispatch) => {
        try {
            let resp = await UserService.register(username, password, isAdmin, code);
            dispatch(onSuccess(resp.user));
        } catch (e) {
            dispatch(onFailure(e));
        }
    };
}

export function deleteAccount(username, password) {
    function onSuccess(user) {
        return { type: "DELETE_SUCCESS", user: user };
    }
    function onFailure(error) {
        return { type: "DELETE_FAILURE", error: error };
    }
    return async (dispatch) => {
        try {
            let resp = await UserService.deleteAccount(username, password);
            dispatch(onSuccess(resp.user));
        } catch (e) {
            dispatch(onFailure(e));
        }
    };
}

export function getUserPlaylists() {
    function onSuccess(playlists) {
        return { type: "GETUSERPLAYLISTS_SUCCESS", playlists: playlists };
    }
    function onFailure(error) {
        console.log("failed to get users playlists", error);
    }

    return async (dispatch) => {
        try {
            let playlists = await UserService.getUserPlaylists();
            dispatch(onSuccess(playlists));
        } catch (e) {
            onFailure(e);
        }
    };
}
