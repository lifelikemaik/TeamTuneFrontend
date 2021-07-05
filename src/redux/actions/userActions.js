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

export function updateUserName(newUsername) {
    function onSuccess(user) {
        return { type: "UPDATE_SUCCESS", user: user };
    }
    function onFailure(error) {
        return { type: "UPDATE_FAILURE", error: error };
    }

    return async (dispatch) => {
        try {
            let resp = await UserService.updateUserName(newUsername);
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
