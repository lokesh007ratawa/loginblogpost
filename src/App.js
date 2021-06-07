import './App.css';
import Signup from './pages/signup';
import Signin from './pages/signin';
import { Route, Link,Switch } from 'react-router-dom'
import Dashboard from './pages/dashboard';
function App() {
  return (
    <>
    <Route exact path="/" component={Signin} />
     <Switch>
            
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/blog" component={Dashboard} />
          </Switch>
    </>
  );
}

export default App;
