import HttpService from "./HttpService";

export default class PlaylistService {
    static baseURL() {
        return "http://localhost:4000/playlists";
    }

    static getPlaylists() {
        return new Promise(async (resolve, reject) => {
            HttpService.get(
                this.baseURL(),
                function (data) {
                    resolve(data);
                },
                function (textStatus) {
                    reject(textStatus);
                }
            );
        });
    }

    static getPlaylist(id) {
        return new Promise(async (resolve, reject) => {
            HttpService.get(
                `${PlaylistService.baseURL()}/${id}`,
                function (data) {
                    if (data !== undefined || Object.keys(data).length !== 0) {
                        resolve(data);
                    } else {
                        reject("Error while retrieving playlist");
                    }
                },
                function (textStatus) {
                    reject(textStatus);
                }
            );
        });
    }

    static createPlaylist(playlist) {
        playlist.id = Math.floor(Math.random() * 100000000 + 1).toString();


        return new Promise((resolve, reject) => {
            HttpService.post(
                PlaylistService.baseURL(),
                playlist,
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