
import './App.css'

function App() {
  return (
    <div className="App">
      <div style={{color:'black'}}>
        this en
        {process.env.TESTENV}
      </div>
    </div>
  )
}

export default App
