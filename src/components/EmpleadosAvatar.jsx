import React from 'react';

const EmpleadosAvatar = (props) => {
    return (
        <div>
            <img src={props.imagen} alt={props.imagen} />
        </div>
    );
};

export default EmpleadosAvatar;