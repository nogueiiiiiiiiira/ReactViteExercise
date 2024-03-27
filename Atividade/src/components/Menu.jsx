import style from './Menu.module.css'

export default function Menu(){
    
    return(
    
    <div className={style.wrapMenu}>
        <div className={style.navLinks}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/tec">Tecnologies</a></li>
                <li><a href="/media">Calculations</a></li>
                <li><a href="/contact">Contacts</a></li>
                <li><a href="/rickyAndMortyAPI">Ricky And Morty API</a></li>
                </ul>   
                </div>
    </div>
    )
}