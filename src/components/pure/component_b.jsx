import React, {useState} from 'react';
import PropTypes from "prop-types";
import { Contact } from '../../models/contact.class';

export const ComponentB = ({ contact }) => {

    const [conected, setConected] = useState(contact.conected);

    const updateStatus = () => {
        setConected(!conected);
    };

    return (
        <div>
            <h2>
                Nombre: {contact.nombre}
            </h2>
            <h2>
                Apellido: {contact.apellido}
            </h2>
            <h2>
                Email: {contact.email}
            </h2>
            <h2>
                Estado: {conected ? "Contacto En Línea" : "Contacto No Disponible"}
            </h2>
            <button onClick={updateStatus}>Cambiar estado</button>
        </div>
    );
};

ComponentB.protoTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ComponentB;
