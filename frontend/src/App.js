import './App.css';
import CoordinateSystem from './components/CoordinateSystem';
import Header from './components/Header';

function App() {
  return (
    
    <div>
      <Header />
      <CoordinateSystem func={x => x}/>
    </div>
  );
}

export default App;