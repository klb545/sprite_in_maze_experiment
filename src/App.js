import './App.css';
import Navbar from './main/Navbar';
import componentDiagram from './images/componentDiagram.png'
import MainContainer from './main/MainContainer';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <MainContainer/>
      <img src={componentDiagram}/>
    </div>
  );
}

export default App;
