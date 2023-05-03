import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Hero, Navbar, Tech, Works } from './components'

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div className="bg-cover bg-hero-pattern bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        <div className="bg-primary">
          <About/>
        </div>  
          <Experience />
        <div className="bg-primary">
          <Tech />
        </div>  
          <Works />
        </div>
        
        <div className="relative z-0 bg-primary">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
