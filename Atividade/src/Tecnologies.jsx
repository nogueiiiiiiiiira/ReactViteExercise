import Card from './components/Card'
import Menu from './components/Menu'

import style from './Tecnologies.module.css'

import REACT from './assets/img/react.svg'
import VITE from './assets/img/vite.svg'
import AXIOS from './assets/img/axios.svg'
import REACTDOM from './assets/img/reactdom.svg'
import NPM from './assets/img/npm.svg'
import NODE from './assets/img/node.svg'

export const Tecnologies = () => {
    return(
        <>
            <Menu/>
            <section className={style.wrapTec}>
                <h1>Tecnologies</h1>
                <div className={style.wrapCardsTec}>
                   <Card title='REACT JS' imgSrc={REACT} desc='O React é uma biblioteca JavaScript de código aberto para criar interfaces de usuário em páginas web.'/>
                   <Card title='VITE' imgSrc={VITE} desc='O VITE é uma ferramenta de construção de aplicativos web para o ecossistema Vue.js. Oferece uma alternativa mais rápida aos tradicionais sistemas de construção como o webpack.'/>
                   <Card title='AXIOS' imgSrc={AXIOS} desc='O AXIOS é uma biblioteca JavaScript usada para fazer solicitações HTTP a partir do navegador ou do Node.js. É amplamente utilizado em aplicativos web modernos devido à sua simplicidade e flexibilidade.'/>
                   <Card title='REACT ROUTER DOM' imgSrc={REACTDOM} desc='O REACT ROUTER DOM é uma biblioteca de roteamento para aplicativos web React. É útil para criar aplicativos de página única (SPA) e aplicativos da web com várias páginas.'/>
                   <Card title='NPM' imgSrc={NPM} desc='O NPM é um gerenciador de pacotes padrão para o ecossistema Node.js. Permite que os desenvolvedores instalem e gerenciem pacotes de software reutilizáveis ​​e dependências em seus projetos. '/>
                   <Card title='NODE.JS' imgSrc={NODE} desc='É um ambiente de tempo de execução JavaScript. Com o Node.js, é possível criar aplicativos web escaláveis e de alto desempenho.'/>
                </div>
            </section>
        </>
    )
}
