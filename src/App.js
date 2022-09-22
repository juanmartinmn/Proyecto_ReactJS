import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    
    <>
      <NavBar></NavBar>
      <ItemListContainer greeting={"hola cabros"}></ItemListContainer>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <NavBar></NavBar>
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
