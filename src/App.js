import './App.css'
import { Link, Route } from 'wouter'
import Home from './pages/Home'
import Detail from './pages/Detail'
import SearchResults from './pages/SearchResults'
import StaticContext from './contexts/StaticContext'
import { GifsContextProvider } from './contexts/GifsContext'

function App() {
  return (
    <StaticContext.Provider value={{
      name: 'danachury',
      cool: true
    }}>
      <div className="App">
        <section className="App-content">
          <Link to="/" className="App-link">GIFFY</Link>
          <GifsContextProvider>
            <Route path="/" component={Home}/>
            <Route path="/search/:filter" component={SearchResults}/>
            <Route path="/gif/:id" component={Detail}/>
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  )
}

export default App
