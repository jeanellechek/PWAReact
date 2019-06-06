import React from 'react';
import './Card.css';
import CardContent from '../Cards/CardContent';
import '.././styles.css';
import TitleHeader from '../Headers/TitleHeader';

const Card = (props) => {
  return (
    <div>
      <TitleHeader color="white" text="Coupons" />

      <CardContent
        customerName="Chimikitkased Co., Ltd"
        price="2,000"
        currency="THB"
        date="14/07/2018"
        status="Pending"
        image="https://imbo.teknograd.no/s/LF7bduu" />

      <CardContent
        customerName="Chimikitkased Co., Ltd"
        price="1,500"
        currency="THB"
        date="14/07/2018"
        status="Accepted"
        image="https://imbo.teknograd.no/s/LF7bduu" />
    </div>

  )
}
export default Card;
