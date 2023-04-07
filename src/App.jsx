import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  

  return (
    <div className="App">
      <Header></Header>
      <h1 className='text-3xl font-semibold text-purple-500'>Yes, I can!!</h1>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
