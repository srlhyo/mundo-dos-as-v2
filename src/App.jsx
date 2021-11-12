import logo from "./images/logo-small.svg";

function App() {
  return (
    <div>
      <header>
        <img src={logo} alt="Logo" />
        <nav>
          <ul>
            <li>home</li>
            <li>sobre nos</li>
            <li>galeria</li>
            <li>contacto</li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default App
