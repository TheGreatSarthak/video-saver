import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import { store } from './features/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <NavBar/>
      <Outlet/>
    </Provider>
  );
}

export default App;
