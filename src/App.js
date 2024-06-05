import './App.css';
// import MyAlert from './components/alert';
import Header from './components/header';
import MyCrousel from './components/crousel';
import MyContactUs from './components/contactUs';
import MyAboutUs from './components/aboutUs';
function App() {
  return (
    <div className="App">
      {/* <MyAlert text="Welcome to Avisina International" /> */}
      <Header />
      <MyCrousel />
      <MyAboutUs />
      <MyContactUs />
    </div>
  );
}

export default App;