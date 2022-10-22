import 'bulma/css/bulma.min.css'
import './App.css';
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
