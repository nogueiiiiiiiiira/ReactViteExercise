import style from './App.module.css'
import Menu from './components/Menu'

export default function App() {

  return (
    <div className={style.wrapHome}>
        <Menu />
        <div className={style.firstPageHeading}>
          <h1>HOME!</h1>
          <p className={style.pHome} >Seja bem vindo(a) à atividade que o professor André pediu!</p>
      </div>
    </div>
  )
}
