import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar'
import Top from './components/Top/Top';

function App() {

  const title = 'MagicApp';

  return (
    <div className="App">

      <Top />

      <NavBar title={title} />

      <ItemListContainer title={title} />


    </div>
  )
}

export default App;
