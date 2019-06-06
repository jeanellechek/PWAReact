import React from 'react';
import '../Cards/Card.css';
import '../Spacings/Spacing.css'
import '../Shadows/Shadow.css';
import '.././styles.css';

const CardContent = (props) => {
var statusColor;
switch(props.status.toLowerCase()){
  case 'pending': statusColor="tag bodyBold blackFont warning md"; break;
  case 'accepted':  statusColor="tag bodyBold whiteFont success md"; break;
  default: statusColor="";
}

  return (
    
    <div className="blockContainer sm">
    <div className="block">
      <table width="100%">
        <tbody>
        <tr>
          <td className="bodyBold" width="80%">
          <div className="xs">{props.customerName}</div>
          </td>
          <td rowSpan="3" width="10%">
            <div className="container">
              <div className={statusColor}>{props.status}</div>
              <img src={props.image} className="cardImage" alt="coupon"/>
              </div>
              </td>
          </tr>
          <tr>
          <td className="headlines">
            <div className="xs">{props.price} {props.currency} off</div></td>
          </tr>
          <tr>
          <td className="small">
          <div className="xs">{props.date}</div></td>
        </tr>
        </tbody>
      </table>
      </div>
    </div>
  )
}
export default CardContent;