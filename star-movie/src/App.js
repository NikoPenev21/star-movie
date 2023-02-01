import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';
import PageNotFound from './components/PageNotFound';
import Watchlist from './components/Watchlist'

function App() {
    return (
     <div className='app'>
      <Router>
        <Header />
          <div>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/movie/:imdbID" exact component={MovieDetail} />
              <Route path="/watchlist" exact component={Watchlist} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
          <Footer />
      </Router>
     </div>
    );
}

export default App;
