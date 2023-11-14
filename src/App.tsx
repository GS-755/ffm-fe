import routes from './router';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./style/App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route 
            key={route.path}
            path={route.path}
            element={route.element} 
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;