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

export function registerInvite(username, playlistId) {
    function onSuccess(user) {
        return { type: "INVITE_SUCCESS", user: user };
    }
    function onFailure(error) {
        return { type: "INVITE_FAILURE", error: error };
    }

    return async (dispatch) => {
        try {
            let resp = await UserService.registerInvite(username, playlistId);
            dispatch(onSuccess(resp.user));
        } catch (e) {
            dispatch(onFailure(e));
        }
    };
}

export function updateUsername(newUsername) {
    function onSuccess(user) {
        return { type: "UPDATE_USERNAME_SUCCESS", user: user };
    }
    function onFailure(error) {
        return { type: "UPDATE_USERNAME_FAILURE", error: error };
    }

    return async (dispatch) => {
        try {
            let resp = await UserService.updateUsername(newUsername);
            dispatch(onSuccess(resp.user));
        } catch (e) {
            dispatch(onFailure(e));
        }
    };
}

export function updatePassword(newPassword) {
    function onSuccess(user) {
        return { type: "UPDATE_PASSWORD_SUCCESS", user: user };
    }
    function onFailure(error) {
        return { type: "UPDATE_PASSWORD_FAILURE", error: error };
    }

    return async (dispatch) => {
        try {
            let resp = await UserService.updatePassword(newPassword);
            dispatch(onSuccess(resp.user));
        } catch (e) {
            dispatch(onFailure(e));
        }
    };
}


export function deleteAccount(username) {
    function onSuccess(user) {
        return { type: "DELETE_SUCCESS", user: user };
    }
    function onFailure(error) {
        return { type: "DELETE_FAILURE", error: error };
    }
    return async (dispatch) => {
        try {
            let resp = await UserService.deleteAccount(username);
            dispatch(onSuccess(resp.user));
            UserService.logout();
        } catch (e) {
            dispatch(onFailure(e));
        }
    };
}
