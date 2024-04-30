import { NavLink } from 'react-router-dom';
import './styles.css'

function Card({ nomeLivro, nomeAutor, nomeEditora, codigo }: any) {

    return (
        <div className="catalog-card">
            <NavLink to={"/modificar/"+codigo}>
                <div className="id-top">
                    <h5>{codigo}</h5>
                </div>
                <div className="card-top">
                    <h3>{nomeLivro}</h3>
                </div>
                <hr className="border-2" />

                <div className="card-bottom">
                    <h4>{nomeAutor}</h4>
                    <h4>{nomeEditora}</h4>
                </div>
            </NavLink>

        </div>

    );
}

export default Card;