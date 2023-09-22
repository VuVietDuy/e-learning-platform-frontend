import './App.css';
import { Footer } from './parts/Footer';
import { Header } from './parts/Header'
import { HomePage } from './pages/HomePage'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HomePage></HomePage>
      <Footer></Footer>      
    </div>
  );
}

export default App;
