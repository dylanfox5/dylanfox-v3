import './App.css';
import Home from './components/Home/Home';
import MyNavbar from './components/MyNavbar/MyNavbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
