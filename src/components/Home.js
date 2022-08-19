import React from 'react'
import Truck from '../assets/truck.jpg';
import { TbArrowBigRight } from 'react-icons/tb';

const Home = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col my-5">
                <div className="card text-center" style={{ width: "40rem", borderColor: "red" }}>
                    <img src={Truck} className="card-img-top" alt="imagen" />
                    <div className="card-body">
                        <h5 className="card-title">Vehiculos Disponibles</h5>
                        <p className="card-text">Puedes rentar uno de nuestros vehiculos dependiendo de la disponibilidad de los mismos.</p>
                        <a href="#" className="btn btn-danger fs-2"><TbArrowBigRight /></a>
                    </div>
                </div>
            </div>
            <div className='col my-5 fs-1 text-center'>
                <p className='pt-5'>Somos la mejor opción para rentar un camión de transporte:</p>

                <ul className="list-group fs-5 pt-5">
                    <li className="list-group-item list-group-item-danger" aria-current="true">Nuestros camiones están siempre en optimas condiciones</li>
                    <li className="list-group-item">Virtud 2</li>
                    <li className="list-group-item list-group-item-danger">Virtud 3</li>
                    <li className="list-group-item">Virtud 4</li>
                    <li className="list-group-item list-group-item-danger">Virtud 5</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Home