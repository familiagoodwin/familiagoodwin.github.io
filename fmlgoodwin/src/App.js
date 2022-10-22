import 'bulma/css/bulma.min.css'
import './App.css';
import './pages/css/pages.css'
import Capa from './pages/Capa';
import MainMenu from './components/MainMenu';
import GlobalVarsProvider from './contexts/GlobalVarsProvider';

function App() {
  return (
    <GlobalVarsProvider>
      <div className="App">
        <Capa />
        <MainMenu />
      </div>
    </GlobalVarsProvider>
  );
}

export default App;
