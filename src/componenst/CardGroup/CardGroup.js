import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const proucts = [
        {id: 1, name: 'Leptop pro', pricr: '12300', images: './images/piliyes-1.jpg'},
        {id: 2, name: 'Leptop Crow', pricr: '12300', img: './images/piliyes-1.jpg'},
        {id: 3, name: 'Leptop Gor', pricr: '12300', img: './images/piliyes-1.jpg'},
    ]
    return (
        <div>
            <h2>This is cards</h2>
            <div className="card-group">
            {
                proucts.map(proucts => <Card key={proucts.id} proucts={proucts}></Card>)
            }
            </div>
        </div>
    );
};

export default CardGroup;