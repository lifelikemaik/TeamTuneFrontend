import React, {useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import {
    MuiThemeProvider,
    createMuiTheme,
    makeStyles,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import ScrollContainer from "./components/layout/ScrollContainer";

import reducers from "./redux/reducers";
import routes from "./routes";
import Header from "./components/layout/Header";
import AppTheme from "./theming/themetypes";
import AppThemeOptions from "./theming/themes";
import Background from "./components/layout/Background";

const useStyles = makeStyles((theme) => ({
    appRoot: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
    },
}));

function App() {
    const classes = useStyles();

    // set document title
    useEffect(() => {
        document.title = "TeamTune App";
    }, []);

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    // create store for redux
    const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

    // theme for app
    const [theme, setTheme] = React.useState(AppTheme.LIGHT);

    // toggle theme
    const toggleTheme = () => {
        setTheme(theme === AppTheme.LIGHT ? AppTheme.DARK : AppTheme.LIGHT);
    };

    return (
        <div className={classes.appRoot}>
            <MuiThemeProvider theme={createMuiTheme(AppThemeOptions[theme])}>
                <Provider store={store}>
                    <CssBaseline/>
                    <React.Fragment>
                        <Header
                            darkmode={theme === AppTheme.DARK}
                        />
                        <Background/>
                        <ScrollContainer>
                            <Switch>
                                {routes.map((route, i) => (
                                    <Route key={i} {...route} />
                                ))}
                            </Switch>
                        </ScrollContainer>
                    </React.Fragment>
                </Provider>
            </MuiThemeProvider>
        </div>
    );
}

export default App;
