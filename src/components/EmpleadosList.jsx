import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { empleados } from './empleados';
import EmpleadosRow from './EmpleadosRow';

const EmpleadosList = () => {
    return (
        <div>
            <ListGroup>
                {
                    empleados.map( (persona, id)=>{ return <EmpleadosRow key={id} persona={persona}></EmpleadosRow> } )
                }         
            </ListGroup>
        </div>
    );
};

export default EmpleadosList;