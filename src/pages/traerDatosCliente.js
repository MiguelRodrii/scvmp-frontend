import { useQuery, gql } from "@apollo/client";

const TraerDatosCliente = ({cedulaid}) => {

    let nombre="";
    let email="";
    let direccion="";
    let ruc="";
    let fecha=new Date();

    const GET_DOG_PHOTO = gql(`
    query DatosPersonales($cedula: String!) {
        datosPersonales(cedula: $cedula ){
            email
            direccion
            ruc
    }
    usuarios(cedula: $cedula ){
        nombre
        apellido
}
      }
    `);
  const { loading, error, data } = useQuery(GET_DOG_PHOTO, {
    variables: { cedula:cedulaid }
  });

  if (data===undefined) {
      console.log(data)
  }else{if (data.datosPersonales.length>0) {
        nombre=data.usuarios[0].nombre+" "+data.usuarios[0].apellido;
        email=data.datosPersonales[0].email;
        direccion=data.datosPersonales[0].direccion;
        ruc=data.datosPersonales[0].ruc;
        console.log(nombre);

  }
  }
      
 if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    
    return (
        <>
            <div className="form-row">
                <div className="col-md-3">
                    <label>Nombre</label>
                    <input
                        placeholder="Ingrese"
                        className="form-control"
                        defaultValue={nombre}
                    ></input>
                </div>
                <div className="col-md-3">
                    <label>Ruc</label>
                    <input
                        placeholder="Ingrese"
                        className="form-control"
                        defaultValue={ruc}
                    ></input>
                </div>
            </div>
            <div className="form-row">
                <div className="col-md-3">
                    <label >Email</label>
                    <input
                        placeholder="Ingrese su correo"
                        className="form-control"
                        defaultValue={email}
                        type="email"
                    ></input>
                </div>
                <div className="col-md-3">
                    <label >Dirección</label>
                    <input
                        placeholder="Ingrese"
                        className="form-control"
                        defaultValue={direccion}
                    ></input>
                </div>
            </div>
            <div className="form-row">
                <div className="col-md-3">
                    <label >Fecha</label>
                    <input
                        placeholder="Ingrese"
                        className="form-control"
                        type="date"
                        defaultValue={fecha}
                    ></input>
                </div>
            </div>
            <div className="container ml-5">
            </div>
        </>
    )
};
export default TraerDatosCliente;