import './App.css';
import Home from './components/Home/Home';
import MyNavbar from './components/MyNavbar/MyNavbar';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Home />
    </div>
  );
}

export default App;
