
import { useContext } from 'react'
import { AppRoutes } from './Routes';
import { Header } from './components/header';
import Footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { Loading } from './components/Loading';
import { AppContext } from './contexts/AppContext';

function App() {
  const { loading } = useContext(AppContext)
  return (
    <div>
      <Header />
        <AppRoutes />
      <Footer />
      {loading && <Loading/>}
    </div>
  )
}

export default App;