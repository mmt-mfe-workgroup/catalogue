import ReactDOM from 'react-dom';
import App from './App'

const RemoteApp = (container) => {
  const rootElement = document.getElementById(container);
  ReactDOM.render(<App />, rootElement)
}

export default RemoteApp;
