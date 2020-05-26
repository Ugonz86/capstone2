import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import Firebase, { FirebaseContext } from './components/Firebase';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';

const render = (Component) => {
    ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <AppContainer>
            <HashRouter>
                <Component/>
            </HashRouter>
        </AppContainer>
    </FirebaseContext.Provider>,
    document.getElementById('root'));
};

serviceWorker.unregister();

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable */