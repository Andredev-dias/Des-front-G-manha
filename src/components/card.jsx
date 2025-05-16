import style from "./card.module.css"
import Tilt from 'react-parallax-tilt';

export const Card = (props) => {
    return(
        <Tilt>
            <div className={style.wrapCard}>
                <img src={props.imagem} alt={props.titulo} />
                <h3>{props.titulo}</h3>
                <p>{props.descricao}</p>
            </div>
        </Tilt>
    )
}

//esta com as props desestruturadas é melhor de usar
// export const CardOutro = ({imagem, titulo, descricao}) => {
//     return(
//         <div>
//             <img src={imagem} alt={titulo} />
//             <h3>{titulo}</h3>
//             <p>{descricao}</p>
//         </div>
//     )
// }