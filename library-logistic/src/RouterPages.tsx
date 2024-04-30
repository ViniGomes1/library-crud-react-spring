import Navbar from "components/Navbar";
import Cadastrar from "pages/Cadastrar";
import Catalogo from "pages/Catálogo";
import Modificar from "pages/Modificar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const RouterPages = () => {

    function closeModal(): void {
    }

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Cadastrar closeModal={closeModal} />} />
                <Route path="/catalogo" element={<Catalogo />} />
                <Route path={"/modificar/:modId"} element={<Modificar />} />
            </Routes>

        </BrowserRouter>
    );
}

export default RouterPages;