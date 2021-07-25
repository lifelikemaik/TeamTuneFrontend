import HttpService from "./HttpService";

export default class CallbackService {
    static baseURL() {
        return "http://teamtune.fun:4000/callback";
    }

    static getCallback() {
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

    
}