import 'bulma/css/bulma-rtl.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';
import './components/css/components.css'
import './pages/css/pages.css'
import Capa from './pages/Capa';
import GlobalVarsProvider from './contexts/GlobalVarsProvider';
import Principal from './pages/Principal';

function App() {
  return (
    <GlobalVarsProvider>
      <div className="App">
        <Capa />
        <Principal />
      </div>
    </GlobalVarsProvider>
  );
}

export default App;
