import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import EmpleadosRow from './EmpleadosRow';

const EmpleadosList = () => {
    return (
        <div>
            <ListGroup>
                <EmpleadosRow></EmpleadosRow>
            </ListGroup>
        </div>
    );
};

export default EmpleadosList;