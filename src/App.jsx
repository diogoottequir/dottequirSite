import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const headerMarkerRef = useRef(null)
  const [headerIsStuck, setHeaderIsStuck] = useState(false)

  useEffect(() => {
    const marker = headerMarkerRef.current
    if (!marker) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => setHeaderIsStuck(!entry.isIntersecting),
      { threshold: 0, rootMargin: '-16px 0px 0px' },
    )

    observer.observe(marker)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="site-layout">
      <div className="page-shell">
        <div ref={headerMarkerRef} className="header-marker" aria-hidden="true" />
        <header className={`topbar${headerIsStuck ? ' is-stuck' : ''}`}>
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

        <main className="content-area">
          <section className="content-panel" aria-label="Área de conteúdo principal" />
          <section className="content-panel" aria-label="Área de conteúdo secundária" />
          <section className="content-panel" aria-label="Área de conteúdo adicional" />
        </main>
      </div>
    </div>
  )
}

export default App
