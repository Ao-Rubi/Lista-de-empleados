import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import EmpleadosAvatar from './EmpleadosAvatar';
import Badge from 'react-bootstrap/Badge';

const EmpleadosRow = ({persona}) => {
    const {department, fullName, pic, title} = {...persona}

    return (
        <ListGroupItem className='d-flex'>
            <EmpleadosAvatar imagen={pic}></EmpleadosAvatar>
            <div>
                <h4>{fullName}</h4>
                <p>{title} <Badge bg="info">{department}</Badge> </p>
            </div>
        </ListGroupItem>
    );
};

export default EmpleadosRow;