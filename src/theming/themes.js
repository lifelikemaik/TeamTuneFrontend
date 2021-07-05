import { AppTheme } from "./themetypes";

const themeindependent = {
    mixins: {
        textfieldminheight: "38px",
    },
};

const appThemeOptions = {
    [AppTheme.LIGHT]: {
        palette: {
            type: "light",
            primary: {
                light: "#3f3a3a",
                main: "#191414",
                dark: "#000000",
            },
            secondary: {
                light: "#96ffd3",
                main: "#62D2A2",
                dark: "#29a073",
            },
            background: {
                paper: "#fff",
                default: "#fafafa",
            },
        },
        ...themeindependent,
    },
    [AppTheme.DARK]: {
        palette: {
            type: "dark",
            primary: {
                light: "#616161",
                main: "#424242",
                dark: "#212121",
            },
            secondary: {
                light: "#5A42EA",
                main: "#3E22E6",
                dark: "#22108E",
            },
            background: {
                paper: "#303030",
                default: "#000",
            },
            header_text: {
                light: "#62D2A2",
                main: "#fafafa",
                dark: "#191414"
            },
        },
        ...themeindependent,
    },
};

export default appThemeOptions;
