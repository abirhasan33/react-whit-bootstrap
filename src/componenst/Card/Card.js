import React from 'react';

const Card = (props) => {
    const {name, pricr,} = props.proucts;
    console.log(props.proucts)
    return (
        <div className="card">
          <img src="../CardGroup/images/piliyes-1.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p>${pricr}</p>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
    );
};

export default Card;