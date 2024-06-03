import './App.css';
import MyNavbar from './components/navbar'; 
import MyAlert from './components/alert';
import MyCrousel from './components/crousel';
import MyContactUs from './components/contactUs';

function App() {
  return (
    <div className="App">
      <MyAlert text="Welcome to Avisina International" />
      <MyNavbar />
      <MyCrousel />
      <MyContactUs />
    </div>
  );
}

export default App;