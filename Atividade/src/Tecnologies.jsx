import Card from './components/Card'
import Menu from './components/Menu'

import style from './Tecnologies.module.css'

export const Tecnologies = () => {
    return(
        <>
            <Menu/>
            <section className={style.wrapTec}>
                <h1>Tecnologies</h1>
                <div className={style.wrapCardTec}>
                  
                </div>
            </section>
        </>
    )
}
