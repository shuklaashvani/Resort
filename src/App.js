import {Route,Switch} from 'react-router-dom'
import Home from './Component/Home/Home';
import Rooms from './Component/rooms/Rooms';
import Layout from './layout/Layout';
import classes from './App.css';
import Error from './Component/Error/Error'
import SingleRoom from './Component/SingleRoom/SingleRoom';

function App() {
  return (
    <div>
        <Layout />
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Rooms' component={Rooms} />
          <Route exact path='/Rooms/:slug' component={SingleRoom} />
          <Route component={Error} />
      </Switch>
      
    </div>
  );
}

export default App;
