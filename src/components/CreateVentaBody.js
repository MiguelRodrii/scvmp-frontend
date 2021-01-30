import ProductosDisponiblesVentas from "./ProductosDisponiblesVentas";
import PreSoldProducts from "./PreSoldProducts";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useReducer } from "react";
import ReactNotification, { store } from 'react-notifications-component';

function productsReducer(state, action) {
    switch (action.type) {
        case "in":
            return {
                disponibles: [...state.disponibles],
                preAdquiridos: [...state.preAdquiridos, {
                    id: 1,
                    costo_compra_no_iva: 20.25,
                    costo_venta_no_iva: 10.15,
                    cantidad_disponible: 11,
                    fecha_expiracion: "1999/12/13",
                    id_descripción_producto: 1
                }]
            };
        case "log":
            return state;
        case "addProduct":
            // Método para la busqueda del producto seleccionado y la posición del mismo
            const findProductOn = (array, id) => {
                for (let index = 0; index < array.length; index++) {
                    if (array[index].id === id) {
                        return {
                            selectedProduct: array[index],
                            index: index
                        };
                    }

                }
            };
            let { selectedProduct, index } = findProductOn(state.disponibles, action.id);

            if (selectedProduct.cantidad_disponible >= parseInt(action.cantidad)) {
                store.addNotification({
                    title: "Adición exitosa",
                    message: `Ha agregado ${action.cantidad} unidades de ${selectedProduct.descripcion.nombre}`,
                    type: "success",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 2000,
                        onScreen: true
                    }
                });

                const updateDisponibles = () => {
                    if (state.disponibles[index].cantidad_disponible - parseInt(action.cantidad) === 0) {
                        state.disponibles[index].cantidad_disponible -= parseInt(action.cantidad);
                        state.disponibles.splice(index, 1);
                    } else {
                        state.disponibles[index].cantidad_disponible -= parseInt(action.cantidad);
                    }
                }
                updateDisponibles();

                const updatePreAdquiridos = () => {

                    const found = state.preAdquiridos.find(
                        (element) => {
                            return element.id === selectedProduct.id;
                        });
                    if (found === undefined) {
                        state.preAdquiridos.push(
                            {
                                id: selectedProduct.id,
                                cantidad: parseInt(action.cantidad),
                                nombre: selectedProduct.descripcion.nombre,
                                precioUnitario: parseFloat(selectedProduct.costo_venta_no_iva) + (parseFloat(selectedProduct.costo_venta_no_iva) * 0.12),
                                total: (parseFloat(selectedProduct.costo_venta_no_iva) + (parseFloat(selectedProduct.costo_venta_no_iva) * 0.12)) * parseFloat(action.cantidad)
                            }
                        );
                    } else {
                        const idx = () => {
                            for (let index = 0; index < state.preAdquiridos.length; index++) {
                                if (state.preAdquiridos[index].id === selectedProduct.id) {
                                    return index;
                                }

                            }
                        }
                        const idxPreAdquirido = idx();

                        state.preAdquiridos[idxPreAdquirido].cantidad += parseInt(action.cantidad);
                        state.preAdquiridos[idxPreAdquirido].total += (parseFloat(selectedProduct.costo_venta_no_iva) + (parseFloat(selectedProduct.costo_venta_no_iva) * 0.12)) * parseFloat(action.cantidad);
                    }
                }

                updatePreAdquiridos();
                return {
                    disponibles: [...state.disponibles],
                    preAdquiridos: [...state.preAdquiridos],
                    totales: []
                };
            } else {
                store.addNotification({
                    title: "Cantidad superior a la disponible",
                    message: `Actualmente solo están disponibles ${selectedProduct.cantidad_disponible} unidades de ${selectedProduct.descripcion.nombre}, por favor defina una cantidad menor.`,
                    type: "warning",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 5000,
                        onScreen: true
                    }
                });
                return state;
            }
        default:
            return state;
    }
}

const CreateVentaBody = ({ productosDisponibles }) => {
    const [productos, dispatch] = useReducer(productsReducer, {
        disponibles: productosDisponibles.productosVendibles,
        preAdquiridos: [],
        totales: { total: 0, subtotal: 0, iva: 0 }
    });

    return (
        <>
            <ReactNotification></ReactNotification>
            <Container fluid>
                <Row>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col><ProductosDisponiblesVentas productos={productos} dispatch={dispatch}></ProductosDisponiblesVentas></Col>
                    <Col>
                        <PreSoldProducts productos={productos} dispatch={dispatch}></PreSoldProducts>
                    </Col>
                </Row>
                <Row></Row>
            </Container>
        </>
    );
}

export default CreateVentaBody