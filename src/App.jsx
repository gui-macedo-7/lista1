import './App.css'
import BemVindo from './components/BemVindo'
import PropAutenticado from './components/PropAutenticado'
import PropDesconto from './components/PropDesconto'
import PropEstudante from './components/PropEstudante'
import PropIdade from './components/PropIdade'
import PropLogado from './components/PropLogado'
import PropNome from './components/PropNome'
import PropNota from './components/PropNota'
import PropNível from './components/PropNível'
import PropOnline from './components/PropOnline'

function App() {
  return (
    <>
      <div className='App'>
        <BemVindo />
      </div>

      <div>
        <PropNome nome="Guilherme" />
      </div>

      <div>
        <PropAutenticado autenticado={true} />
        <PropAutenticado autenticado={false} />
      </div>

      <div>
        <PropIdade idade={19} />
        <PropIdade idade={15} />
      </div>

      <div>
        <PropEstudante estudante={true} />
        <PropEstudante estudante={false} />
      </div>

      <div>
        <PropNota nota={90} />
        <PropNota nota={70} />
        <PropNota nota={60} />
      </div>

      <div>
        <PropDesconto temDesconto={true} />
        <PropDesconto temDesconto={false} />
      </div>

      <div>
        <PropOnline online={true} />
        <PropOnline online={false} />
      </div>

      <div>
        <PropNível nivel={'iniciante'} />
        <PropNível nivel={'intermediário'} />
        <PropNível nivel={'avançado'} />
      </div>

      <div>
        <PropLogado logado={true} />
        <PropLogado logado={false} />
      </div>
    </>
  )
}
export default App
