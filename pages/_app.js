
import reducer from "../store/reducer";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {createWrapper} from "next-redux-wrapper";

const store = createStore(reducer,composeWithDevTools());

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

const makestore = () => store;

const wrapper = createWrapper(makestore);

export default wrapper.withRedux( MyApp);