import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import EmpleadosAvatar from './EmpleadosAvatar';
import Badge from 'react-bootstrap/Badge';

const EmpleadosRow = () => {
    return (
        <div>
            <ListGroupItem>
                <EmpleadosAvatar></EmpleadosAvatar>
                <div>
                    <h4>nombre</h4>
                    <p>posicion <Badge bg="info">cargo</Badge> </p>
                </div>
            </ListGroupItem>
        </div>
    );
};

export default EmpleadosRow;