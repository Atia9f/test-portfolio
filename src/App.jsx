import About from './component/About'
import Banner from './component/Banner'
import Contact from './component/Contact'
import Navbar from './component/Navbar'
import Projects from './component/Projects'
import Technologies from './component/Technologies'

function App() {

  return (
    <>
      <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      </div>
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>


      <div className='container mx-auto px-8'>
        <Navbar></Navbar>
        <Banner></Banner>
        <About></About>
        <Technologies></Technologies>
        <Projects></Projects>
        <Contact></Contact>
      </div>

    </>
  )
}

export default App
