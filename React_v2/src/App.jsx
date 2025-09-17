import { useState } from 'react'
import Header from './Components/Header/Header.jsx'
import './App.css'
import Footer from './Components/Footer/Footer.jsx'
import CardSection from './Components/CardSection/CardSection.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <main>
    <CardSection/>
    <p>        .....................
                </p>
    <CardSection/>
    </main>
      <Footer />
    </>
  )
}

export default App
