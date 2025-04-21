import { 
  BrowserRouter as Router, 
  Route, 
  Routes 
} from "react-router-dom"
import Home from "./pages/Home/Home"
import PokemonDetail from "./pages/PokemonDetail/PokemonDetail"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pokemon" element={<PokemonDetail/>} />
      </Routes>
    </Router>
  )
}

export default App
