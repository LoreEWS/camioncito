import React from 'react';
import { FiFacebook} from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';



const Footer = () => {
  return (
    <footer className="text-center bg-light text-muted">
        <div className="me-5 d-none d-lg-block">
            <span>Encuentranos en nuestras redes sociales</span>
        </div>
        <div>
            <a href="#" className="me-4 text-reset">
                <FiFacebook />
            </a>
            <a href="#" className="me-4 text-reset">
                <FcGoogle />
            </a>
            <a href="#" className="me-4 text-reset">
                <AiOutlineTwitter />
            </a>
            <a href="#" className="me-4 text-reset">
                <AiOutlineInstagram />
            </a>
        </div>
        <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
            © 2022 Copyright:
            <span className="text-reset fw-bold"> Camioncito S.A.</span>
        </div>

    </footer>
  )
}

export default Footer