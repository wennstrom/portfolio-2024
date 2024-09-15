import Hero from "./components/Hero";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800 items-center text-white font-sans">
        <Nav /> 
        <div className="flex flex-col w-full max-w-[1200px]">
          <Hero />
        </div>
    </div>
  )
}

export default App
