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

    static getPublicPlaylists() {
        return new Promise(async (resolve, reject) => {
            HttpService.get(
                this.baseURL() + "/public",
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
                this.baseURL() + "/my_playlists",
                function (data) {
                    resolve(data);
                },
                function (textStatus) {
                    reject(textStatus);
                }
            );
        });
    }

    static getPlaylist(id, loggedIn) {
        const url = loggedIn ? `${PlaylistService.baseURL()}/${id}` : `${PlaylistService.baseURL()}/invited/${id}`;
        return new Promise(async (resolve, reject) => {
            HttpService.get(
                url,
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

    static searchForSong(songName) {
        const url = PlaylistService.baseURL() + '/songs/' + songName
        return new Promise((resolve, reject) => {
            HttpService.get(
                url,
                function (data) {
                    if (data !== undefined) {
                        resolve(data);
                    } else {
                        reject('Error while searching for song');
                    }
                },
                function (textStatus) {
                    console.log('error');
                    reject(textStatus);
                }
            );
        });
    }

    static searchForSongInvite(songName, playlistId) {
        const url = PlaylistService.baseURL() + '/songs/' + songName + '/invited/' + playlistId
        return new Promise((resolve, reject) => {
            HttpService.get(
                url,
                function (data) {
                    if (data !== undefined) {
                        resolve(data);
                    } else {
                        reject('Error while searching for song');
                    }
                },
                function (textStatus) {
                    console.log('error');
                    reject(textStatus);
                }
            );
        });
    }

    static addSongToPlaylist(playlistId, songId) {
        const url = PlaylistService.baseURL() + '/' + playlistId + '/songs/' + songId;
        return new Promise((resolve, reject) => {
            HttpService.put(
                url,
                {},
                function (data) {
                    resolve(data);
                },
                function (textStatus) {
                    reject(textStatus);
                }
            );
        });
    }

    static addSongToPlaylistInvite(playlistId, songId) {
        const url = PlaylistService.baseURL() + '/invite/' + playlistId + '/songs/' + songId;
        return new Promise((resolve, reject) => {
            HttpService.put(
                url,
                {},
                function (data) {
                    resolve(data);
                },
                function (textStatus) {
                    reject(textStatus);
                }
            );
        });
    }

    static updatePlaylist(playlistId, updatedPlaylist) {
        const url = PlaylistService.baseURL() + '/' + playlistId;
        return new Promise((resolve, reject) => {
            HttpService.put(
                url,
                updatedPlaylist,
                function (data) {
                    resolve(data);
                },
                function (textStatus) {
                    reject(textStatus);
                }
            )
            ;
        });
    }

    static followPlaylist(playlistId) {
        const url = PlaylistService.baseURL() + '/' + playlistId + '/follow';
        return new Promise((resolve, reject) => {
            HttpService.get(
                url,
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

    static getPlaylistLength(playlistId) {
        const url = PlaylistService.baseURL() + '/length/' + playlistId;
        return new Promise((resolve, reject) => {
            HttpService.get(
                url,
                function (data) {
                    if (data !== undefined || Object.keys(data).length !== 0) {
                        resolve(data);
                    } else {
                        reject("Error while retrieving playlist length");
                    }
                },
                function (textStatus) {
                    reject(textStatus);
                }
            );
        });
    }

    static copyPlaylist(playlistId) {
        const url = PlaylistService.baseURL() + '/copy/' + playlistId;
        return new Promise((resolve, reject) => {
            HttpService.put(
                url,
                {},
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