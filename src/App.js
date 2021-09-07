import './App.css'
import ListOfGifs from './components/ListOfGifs'
import { Link, Route } from 'wouter'

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/gif/colombia" className="App-link">Gifs Colombia</Link>
        <Link to="/gif/nadal" className="App-link">Gifs Nadal</Link>
        <Link to="/gif/nacional" className="App-link">Gifs Nacional</Link>
        <Link to="/gif/eeuu" className="App-link">Gifs Unite States</Link>
        <Link to="/gif/panda" className="App-link">Gifs Pandas</Link>
        <Route path="/gif/:filter" component={ListOfGifs}/>
      </section>
    </div>
  )
}

export default App
