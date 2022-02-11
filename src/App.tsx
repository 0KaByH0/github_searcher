import { Info } from './components/Info/Info';
import { Search } from './components/Search/Search';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './styles.scss';

export function App() {
  return (
    <Provider store={store}>
      <main className="wrapper">
        <Search />
        <Info />
      </main>
    </Provider>
  );
}
