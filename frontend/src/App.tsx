
import { AppRoutes } from './Routes';
import { Header } from './components/header';
import Footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';



function App() {
  return (
    <div>
      <Header />
        <AppRoutes />
      <Footer />
    </div>
  )
}

export default App;