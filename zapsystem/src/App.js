import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Deshboard from './pages/Dashboard';
import Message from './pages/Message';
import Pagina404 from './pages/Pagina404';
import NewMessage from './pages/NewMessage';
import Cabecalho from './components/Cabecalho';


function App() {

  return (
    <Router>
      <Cabecalho />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/deshboard'>
          <Deshboard />
        </Route>
        <Route path='/message'>
          <Message />
        </Route>
        <Route path='/newmessage'>
          <NewMessage />
        </Route>
        <Route>
          <Pagina404 />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
