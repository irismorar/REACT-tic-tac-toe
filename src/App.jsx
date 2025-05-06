import './App.css';
import { initialState } from './state/initialState';

export default function App() {
  return (
    <main>
      <h1>TIC-TAC-TOE</h1>
      <section className='game_container'>
        <div>Player 1</div>
        <section></section>
        <div>Player 2</div>
      </section>
      <button>restart</button> {/* restart | play again */}
    </main>
  )
}
