import './App.css'
//components
import About from './components/About'
import Founder from './components/Founder'
import Mission from './components/Mission'
import GetInvolved from './components/GetInvolved'
import Footer from './components/Footer'
import Test from './components/Test'
//dependencies
import Modal from 'react-modal'
import StripeContainer from './components/StripeContainer'


Modal.setAppElement('#root')

function App() {
  
  return (
    <>
     <About />
     <Founder />
     <Mission   />
     <GetInvolved />
     <Footer />
     <Test />
    </>
  )
}

export default App
