import './style/App.css';
import { MainLayout } from './layout/Layout';
import Home from './component/Home';

function App() {
  return (
    <>
      <MainLayout>
        <Home></Home>
      </MainLayout>
    </>
  )
}

export default App
