import './App.css';
import Music from './Componenets/Common/Book/book';
import Navbar from './Componenets/Common/Navbar/navbar';
import ClientLogin from './Componenets/Client/ClientLogin';
import Books from './Componenets/Common/Book/book';
function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Music/> */}
      {/* <ClientLogin/> */}
      <Books/>
    </div>
  );
}

export default App;
