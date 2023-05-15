import './App.css';
import Nav from './components/Keeper';
import Footer from './components/Footer';
import Note from './components/Note';


function App() {
  return (
    <div className="App">
      <Nav />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
