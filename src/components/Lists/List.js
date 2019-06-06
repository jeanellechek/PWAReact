import React from 'react';
import './List.css';
import '.././styles.css';
import ListContent from '../Lists/ListContent';
import TitleHeader from '../Headers/TitleHeader';

const List = (props) => {
  return (
  <div>
<TitleHeader color="white" text="My Receipts"/>
      <ListContent 
     image="https://images-na.ssl-images-amazon.com/images/I/71m%2BBHcrwDL._SY606_.jpg"
     receiptNo="01231"
     date="3/10/2018"
     status="Pending"/>

      <ListContent 
     image="https://ugcorigin.s-microsoft.com/100/4b4a5cdc-57ab-477c-ac98-a194d4eabe03/200/v3/image.jpg"
     receiptNo="01232"
     date="3/10/2018"
     status="Rejected"/>

      <ListContent 
     image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVsNY75oaHTlxP6k3V61-M9Qb04OXGhB4tRg9PYGZv72QIXDcLkQ"
     receiptNo="01238"
     date="3/10/2018"
     status="+100"
     coin="1"/>

      <ListContent 
     image="https://i.pinimg.com/originals/4f/4f/68/4f4f6864b39a2c46ae75629f624f8828.jpg"
     receiptNo="01238"
     date="3/10/2018"
     status="Cancelled"/>
    </div>
    
    
  )
}
export default List;
