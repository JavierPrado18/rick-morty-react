import React from 'react';


const Location = ({location}) => {
    
    return (
        <div className='location'>
            <div className='location-item'>
                <h4>Name:</h4>
                <p>{location.name}</p>
            </div>
            <div className='location-item'>
                <h4>Type:</h4>
                <p>{location.type}</p>
            </div>
            <div className='location-item'>
                <h4>Dimension:</h4>
                <p>{location.dimension}</p>
            </div>
            <div className='location-item'>
                <h4>Poulation</h4>
                <p>{location.residents?.length}</p>
            </div>
        </div>
    );
};

export default Location