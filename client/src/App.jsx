import './App.css'
//components
import About from './components/About'
import Founder from './components/Founder'
//dependencies
import Modal from 'react-modal'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

Modal.setAppElement('#root')

function App() {
  
  return (
    <>
     <About />
     <Founder />
    </>
  )
}

export default App
