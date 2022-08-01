import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar'
import Top from './components/Top/Top';

function App() {

  const title = 'MagicApp';

  return (
    <div className="App">

      <Top />

      <NavBar title={title} />

      {/*<ItemListContainer title={title} />*/}

      <ItemDetailContainer />


    </div>
  )
}

export default App;
