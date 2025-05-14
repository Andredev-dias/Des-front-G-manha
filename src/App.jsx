import style from './App.module.css'

function App() {
  return (
    <>
      <nav className={style.menu}>
        <p><a href="#s1">Apresentação</a></p>
        <p><a href="#s2">Tecnologias</a></p>
        <p><a href="#s3">Projetos</a></p>
        <p><a href="#s4">Contato</a></p>
      </nav>
      <main>
        <section className={style.s1} id='s1'>
          <h2>Apresentação</h2>
        </section>
        <section className={style.s2} id='s2'>
          <h2>Tecnologias</h2>
        </section>
        <section className={style.s3} id='s3'>
          <h2>Projetos</h2>
        </section>
        <section className={style.s4} id='s4'>
          <h2>Contato</h2>
        </section>
      </main>
      <footer>
        <h3>redes sociais</h3>
      </footer>
    </>
  )
}

export default App











