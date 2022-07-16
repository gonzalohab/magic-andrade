import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import Top from './components/Top/Top';

function App() {

  const titulo = 'MagicApp';

  return (
    <div className="App">

      <Top />

      <NavBar titulo={titulo} />

    </div>
  )
}

export default App;
