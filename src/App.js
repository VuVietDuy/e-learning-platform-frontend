import './App.css';
import {publicRouter} from './routes'
import { Route,BrowserRouter as Router, Routes ,  } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRouter.map((route, index) => {
            const Layout = route.layout;
            const Page = route.element;
            return (
              <Route path={route.path} element={
                <Layout>
                  <Page></Page>
                </Layout>
              } key={index}></Route>
              );
            })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
