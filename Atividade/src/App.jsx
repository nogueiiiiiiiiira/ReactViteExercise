import style from './App.module.css'
import Menu from './components/Menu'

export default function App() {

  return (
    <div className={style.wrapHome}>
        <Menu />
      <h1 className={style.firstPageHeading}>Home!</h1>
    </div>
  )
}
