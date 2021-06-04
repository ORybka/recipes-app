import renderApp from './framework/render';
import dataStore from './data/dataStore';
import App from './components/App';

window.dataStore = dataStore;

renderApp(App, document.getElementById('app-root'));
