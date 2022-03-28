import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card2 from '../Card2/Card2';

const CardGroup2 = () => {
    const proucts = [
        {id: 1, name: 'Leptop pro', pricr: '12300', images: './images/piliyes-1.jpg'},
        {id: 2, name: 'Leptop Crow', pricr: '12300', img: './images/piliyes-1.jpg'},
        {id: 3, name: 'Leptop Gor', pricr: '12300', img: './images/piliyes-1.jpg'},
    ]
    return (
        <div>
            <CardGroup>
            {
                proucts.map(proucts => <Card2 key={proucts.id} proucts={proucts}></Card2>)
            }
            </CardGroup>
        </div>
    );
};

export default CardGroup2;