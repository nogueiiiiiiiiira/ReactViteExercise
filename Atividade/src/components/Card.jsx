import style from './Card.module.css'

export default function Card(props){
    return(
      
      <div className={style.wrapCard}>
        <div className={style.Card}>
          <h1 className={style.cardTitle}>{props.title}</h1>
          <img className={style.cardImgTop} src={props.imgSrc} alt={props.title} width={300} height={200}/>
          <div className={style.cardBody}>
              <p className={cardText}>props.desc/p>
                  <p>{props.value}</p>
                   
            </div>
          </div>
    )
}
