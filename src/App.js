import "./App.css";
import Music from "./Componenets/Common/Book/book";
import Navbar from "./Componenets/Common/Navbar/navbar";
import ClientLogin from "./Componenets/Client/ClientLogin";
import Books from "./Componenets/Common/Book/book";
import { Login } from "./Componenets/Client/Login";
function App() {
  return (
    <div className="App">
      <Login>
        <Navbar />
        <ClientLogin />
      </Login>
      {/* <Music/> */}
      {/* <Books/> */}
    </div>
  );
}

export default App;
