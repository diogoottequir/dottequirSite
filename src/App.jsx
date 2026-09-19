import './App.css'

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand" aria-label="Dottequir home">
          <span className="brand-mark">D</span>
          Dottequir
        </div>

        <nav className="nav" aria-label="Navegação principal">
          <a href="#about">Sobre</a>
          <a href="#services">Serviços</a>
          <a href="#contact">Contato</a>
        </nav>
      </header>
    </div>
  )
}

export default App
