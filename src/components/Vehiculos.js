import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Vehiculos = () => {

  const [capacity, setCapacity] = useState(null);
  const [gas, setGas] = useState(null);
  const [distance, setDistance] = useState(null);
  const [pilotAvailability, setPilotAvailability] = useState(false);
  const [vehicleAvailability, setVehicleAvailability] = useState(false);
  const [depreciation, setDepreciation] = useState(null);
  const [load, setLoad] = useState("entrega de paquetes");


  const handleSubmit = (e) => {
    e.preventDefault();
  };

return (
    <div className="container">
        <div className="row">
            <h1 className="display-3 my-5 text-center ">
                Gestionar Información de los Camiones
            </h1>
            <div className="col-md-6 shadow mx-auto p-5 my-5">
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-4">
                        <input type="number" placeholder="Capacidad en metros cúbicos" className="form-control" value={capacity} onChange={(e) => setCapacity(e.target.value)} />
                    </div>
                    <div className="form-group mb-4">
                        <input type="number" placeholder="Consumo de combustible por kilómetro" className="form-control" value={gas} onChange={(e) => setGas(e.target.value)} />
                    </div>
                    <div className="form-group mb-4">
                        <input type="number" placeholder="Distancia a recorrer" className="form-control" value={distance} onChange={(e) => setDistance(e.target.value)} />
                    </div>
                    <div className="form-group form-check mb-4">
                        <input type="checkbox" className="form-check-input" id="pilotCheck" />
                        <label className="form-check-label" for="pilotCheck">Piloto Disponible</label>
                    </div>
                    <div className="form-group form-check mb-4">
                        <input type="checkbox" className="form-check-input" id="vehicleCheck" />
                        <label className="form-check-label" for="vehicleCheck">Vehículo Disponible</label>
                    </div>
                    <div className="form-group mb-4">
                        <input type="number" placeholder="Depreciación por kilómetro recorrido" className="form-control" value={depreciation} onChange={(e) => setDepreciation(e.target.value)} />
                    </div>
                    <div className="form-group mb-4">
                        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                          <option selected value="entrega de paquetes">Entrega de Paquetes</option>
                          <option value="mudanza">Mudanza</option>
                          <option value="refrigeración">Refrigeración</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Agregar Camión" className="btn btn-block btn-primary" />
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

export default Vehiculos