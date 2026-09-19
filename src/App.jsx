import './App.css'

const stats = [
  { value: '120+', label: 'projetos entregues' },
  { value: '4.9/5', label: 'satisfação média' },
  { value: '15 dias', label: 'tempo médio de entrega' },
]

const services = [
  {
    title: 'Branding',
    text: 'Identidade visual clara, memorável e alinhada ao seu público.',
  },
  {
    title: 'Web Design',
    text: 'Layouts modernos, intuitivos e adaptados para celular e desktop.',
  },
  {
    title: 'Marketing',
    text: 'Estratégias para atrair atenção, gerar leads e converter clientes.',
  },
]

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

        <button type="button" className="primary-btn">
          Fale conosco
        </button>
      </header>

      <main className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Estilo e funcionalidade</p>
          <h1>Seu próximo projeto com presença e personalidade.</h1>
          <p className="subtitle">
            Criamos experiências digitais elegantes para marcas que querem crescer
            com confiança e clareza.
          </p>

          <div className="cta-row">
            <button type="button" className="primary-btn">
              Solicitar orçamento
            </button>
            <button type="button" className="secondary-btn">
              Ver serviços
            </button>
          </div>

          <ul className="stats" aria-label="Estatísticas da empresa">
            {stats.map((item) => (
              <li key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-card" aria-label="Preview da interface do site">
          <div className="card-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>

          <div className="mockup">
            <div className="mini-panel hero-panel">
              <span className="chip">Launch</span>
              <h2>Estratégia digital</h2>
            </div>

            <div className="mini-grid">
              <div className="mini-panel small panel-1">
                <span>ROI</span>
                <strong>+48%</strong>
              </div>
              <div className="mini-panel small panel-2">
                <span>Tempo</span>
                <strong>2x mais rápido</strong>
              </div>
            </div>

            <div className="chart-bars" aria-hidden="true">
              <span style={{ height: '30%' }}></span>
              <span style={{ height: '52%' }}></span>
              <span style={{ height: '78%' }}></span>
              <span style={{ height: '64%' }}></span>
              <span style={{ height: '92%' }}></span>
              <span style={{ height: '100%' }}></span>
            </div>
          </div>
        </div>
      </main>

      <section id="services" className="services">
        {services.map((service) => (
          <article key={service.title} className="service-card">
            <div className="service-icon" aria-hidden="true"></div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </section>

      <section id="about" className="cta-strip">
        <div>
          <p className="eyebrow">Por que escolher</p>
          <h2>Design simples, estratégia forte e execução com foco em resultados.</h2>
        </div>
        <button type="button" className="primary-btn">
          Agendar conversa
        </button>
      </section>
    </div>
  )
}

export default App
