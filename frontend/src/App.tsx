import { AppRoutes } from './Routes';
import { Header } from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
  return (
    <div>
      <Header/>
       <AppRoutes />
    </div>
  )
}

export default App;