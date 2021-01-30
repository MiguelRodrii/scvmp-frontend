import { useQuery, gql } from "@apollo/client";
import NavBar from "../components/NavBar";
import { useState } from 'react';
import TraerDatosCliente from "./traerDatosCliente";


const SearchProducto = () => {

    const [cedula,setCedula]=useState("");
    const [datos, setDatos] = useState({
        cedula: "123"
    });

    const handleInputChange = (event) => {
        setDatos({
            datos,
            [event.target.name]: event.target.value
        })
        datos.cedula=event.target.value
    }

    const GET_CLIENTE = gql(`
    {
        datosPersonales {
        cedula
      }
    }
  `);

    const { loading, error, data } = useQuery(GET_CLIENTE);
    console.log(data)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <>
            <NavBar
                siteName={`Buscar cliente`}
                sites={["Home", "Registrar producto"]}
            />
            <form className="border p-3 form">
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <select className="custom-select my-1 mr-sm-2" onClick={handleInputChange,(e)=>setCedula(e.target.value)}>
                            {data.datosPersonales.map(
                                ({
                                    cedula
                                }) => (
                                    <option  key={cedula} name="cedula" value={cedula}>{cedula}</option>
                                )
                            )}
                        </select>
                    </div>
                </div>
                {console.log(cedula)}
                {console.log(cedula)}
                {<TraerDatosCliente cliente={data} cedulaid={cedula}/>}
            </form>
        </>
    )
};
export default SearchProducto;