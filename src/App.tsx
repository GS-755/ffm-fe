import routes from './router';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
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