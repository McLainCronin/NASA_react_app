import Sidebar from "./components/Sidebar"
import Main from "./components/Main"
import Footer from "./components/Footer"
import {useState} from 'react'

function App() {
  const NASA_KEY = import.meta.env.VITE_APP_NASA_KEY
  const [showModal, setShowModal] = useState(false)

 function handleToggleModal() {
   setShowModal(!showModal)
 }

  return (
    <>
    <Main/>
    {showModal && (
      <Sidebar handleToggleModal={handleToggleModal}/>
      )}
    <Footer handleToggleModal={handleToggleModal} />
    </>
  )
}

export default App
