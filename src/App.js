import logo from './logo.svg';
import './App.css';
import Saffron from './components/Saffron';
import White from './components/White';
import Green from './components/Green';
import Pole from './components/Pole';
import Base from './components/Base';

function App() {
  return (
    <marquee  behavior="alternate" scroll="bounce">
    <div className='main-header'>
       
    <Saffron />
    <White />
    <Green />
   
    </div>
    </marquee>

  );
}

export default App;
