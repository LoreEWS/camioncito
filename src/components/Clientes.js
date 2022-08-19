import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Clientes = () => {

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [receivingAddress, setReceivingAddress] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

return (
    <div className="container">
        <div className="row">
            <h1 className="display-3 my-5 text-center ">
                Actualizar mis datos 
            </h1>
            <div className="col-md-6 shadow mx-auto p-5 my-5">
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-4">
                        <input type="text" placeholder="Nombre" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group mb-4">
                        <input type="text" placeholder="Apellidos" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className="form-group mb-4">
                        <input type="text" placeholder="Dirección de Recepción de Carga" className="form-control" value={receivingAddress} onChange={(e) => setReceivingAddress(e.target.value)} />
                    </div>
                    <div className="form-group mb-4">
                        <input type="text" placeholder="Dirección de Entrega de Carga" className="form-control" value={deliveryAddress} onChange={(e) => setDeliveryAddress(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Enviar Datos" className="btn btn-block btn-primary" />
                        <Link to="/" className="btn btn-danger ms-3">
                            Cancelar
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
)
}

export default Clientes