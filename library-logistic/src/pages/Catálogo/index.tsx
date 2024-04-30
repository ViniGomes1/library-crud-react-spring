import Card from "components/Card";
import './styles.css'
import { useBook } from "hooks/useBook";

function Catalogo() {

    const { data } = useBook()

    return (
        <>
            <div className="catalog-container">
                <h1>Catalálogo</h1>
            </div>
            <div className="container my-4">
                <div className="row">
                    {
                        data?.map((data: any, index: any)=> (
                            <div className="col-sm-3" key={index}>
                                <Card
                                codigo={data.codigo}
                                nomeLivro={data.nomeLivro} 
                                nomeAutor={data.nomeAutor}
                                nomeEditora={data.nomeEditora}
                                />

                            </div>
                        ))
                    }
                </div>

            </div>

        </>
    );
}

export default Catalogo;