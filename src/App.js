import './App.css';
import { Footer } from './parts/Footer';
import { Header } from './parts/Header'
import CoursePreview from './pages/CoursePreview'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CoursePreview></CoursePreview>
      <Footer></Footer>      
    </div>
  );
}

export default App;
