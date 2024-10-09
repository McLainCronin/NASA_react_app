import Sidebar from "./components/Sidebar"
import Main from "./components/Main"
import Footer from "./components/Footer"
import {useEffect, useState} from 'react'

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  
  function handleToggleModal() {
    setShowModal(!showModal)
    console.log("Modal is now", !showModal)
  }
  
  useEffect(() => {
    async function fetchAPIData() {
      setLoading(true)
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`

      const today = new Date().toDateString()
      const localKey = `NASA-${today}`
      const cachedData = localStorage.getItem(localKey)

      if (cachedData) {
        const apiData = JSON.parse(cachedData)
        setData(apiData)
        setLoading(false)
        console.log("fetched from cache")
        return
      }

      localStorage.removeItem(localKey)

      try {
        const res = await fetch(url)
        const apiData = await res.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log("fetched from API today")
      } catch (error) {
        console.error(error.message)
      }
    }
    fetchAPIData()
  }, [])

  return (
    <>
    {data ? (<Main data={data}/>): (<div className="loadingState"><i className="fa-solid fa-gear"></i></div>)}
    <Sidebar data={data} handleToggleModal={handleToggleModal} showModal={showModal}/>
    {data && 
    (<Footer data={data} handleToggleModal={handleToggleModal} />

    )}
    </>
  )
}

export default App
