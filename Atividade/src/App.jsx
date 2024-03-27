import style from './App.module.css'
import Menu from './components/Menu'

import prof from './assets/prof.jpg'
import Card from './components/Card'

export default function App() {

  return (
    <div className={style.wrapHome}>
        <Menu />
        <div className={style.firstPageHeading}>
          <h1>HOME!</h1>
          <p className={style.pHome} >Seja bem vindo(a) à atividade que o professor André pediu só para poder descansar!</p>
        <br />
        <br />
        <div>
          <Card 
          title='PROFESSOR ANDRE' 
          imgSrc={prof} 
          desc='' 
          value = "Aumente o salário dele!"
          />
          </div>


      </div>
    </div>
  )
}
