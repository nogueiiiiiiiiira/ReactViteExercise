import style from './Card.module.css'

export default function Card(props){
    return(
          <div className={style.wrapCard}>
            <div className={style.Card}>
              <h2 className={style.cardTitle}>{props.title}</h2>
              <br />
              <img className={style.img} src={props.imgSrc} alt={props.title} width={150}/>
              <br />
              <div className={style.cardBody}>
                <p className={style.cardText}>{props.desc}</p>
                <p>{props.value}</p>
              </div>
            </div>
          </div>
    )
}

