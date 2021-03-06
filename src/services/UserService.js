import HttpService from "./HttpService";

export default class UserService {
    static baseURL() {
        return "https://backend.teamtune.fun/auth";
    }

    static register(user, pass, isAdmin, code) {
        return new Promise((resolve, reject) => {
            HttpService.post(
                `${UserService.baseURL()}/register`,
                {
                    username: user,
                    password: pass,
                    isAdmin: isAdmin,
                    code: code,
                },
                function (data) {
                    resolve(data);
                },
                function (textStatus) {
                    reject(textStatus);
                }
            );
        });
    }

    static registerInvite(user, playlistId) {
        return new Promise((resolve, reject) => {
            HttpService.post(
                `${UserService.baseURL()}/register_invite`,
                {
                    username: user,
                    playlist_id: playlistId,
                },
                function (data) {
                    resolve(data);
                },
                function (textStatus) {
                    reject(textStatus);
                }
            );
        });
    }

    static login(user, pass) {
        return new Promise((resolve, reject) => {
            HttpService.post(
                `${UserService.baseURL()}/login`,
                {
                    username: user,
                    password: pass,
                },
                function (data) {
                    resolve(data);
                },
                function (textStatus) {
                    reject(textStatus);
                }
            );
        });
    }

    static logout() {
        window.localStorage.removeItem("jwtToken");
    }

    static deleteAccount(userId) {
        return new Promise((resolve, reject) => {
            HttpService.remove(
                `${UserService.baseURL()}/delete_account/${userId}`,
                function (data) {
                    resolve(data);
                },
                function (textStatus) {
                    reject(textStatus);
                }
            );
        });
    }

    static updateUsername(user) {
        return new Promise((resolve, reject) => {
            HttpService.put(
                `${UserService.baseURL()}/updateUsername`,
                {
                    username: user,
                },
                function (data) {
                    resolve(data);
                },
                function (textStatus) {
                    reject(textStatus);
                }
            );
        });
    }

    static getUserPlaylists() {
        return new Promise(async (resolve, reject) => {
            HttpService.get(
                this.baseURL()+"/my_playlists",
                function (data) {
                    resolve(data);
                },
                function (textStatus) {
                    reject(textStatus);
                }
            );
        });
    }
}
