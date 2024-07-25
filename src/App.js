import './App.css';
import Music from './Componenets/Common/Book/book';
import Navbar from './Componenets/Common/Navbar/navbar';
import ClientLogin from './Componenets/Client/ClientLogin';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Music/>
      {/* <ClientLogin/> */}
    </div>
  );
}

export default App;
