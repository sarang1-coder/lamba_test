import './App.css';
import Header  from './components/Pages/PageHeader.js';
import Footer from './components/Pages/PageFooter.js';
import Homepage from './components/Pages/Homepage.js';


function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
