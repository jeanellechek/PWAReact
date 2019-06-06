import React from 'react';
import '../Shadows/Shadow.css';
import '../Spacings/Spacing.css'
import './List.css';
import '.././styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ListContent = (props) => {
  var colorType=null;
  switch(props.status.toLowerCase()){
    case 'pending': colorType="body pending sm"; break;
    case 'rejected': colorType="body rejected sm"; break;
    case 'cancelled': colorType="body cancelled sm"; break;
    default: colorType="body points sm"; break;
  }
  return (
    <div className="blockContainer">
    <div className="block">
      <table width="100%">
        <tbody>
        <tr>
          <td rowSpan="2" width="10%"><img src={props.image} className="listImage" alt="item"/></td>
          <td className="titleBold" width="50%">{props.receiptNo}</td>
          <td rowSpan="2" className={colorType} width="40%">{props.status} 
          {((props.coin ==="1") ? <img src="http://www.pngmart.com/files/7/Gold-Coin-Transparent-Background.png" className="coin" alt="points"/>:null)}</td>
          <td rowSpan="2" width="5%"><FontAwesomeIcon icon={faChevronRight} className="next" size="1x"/></td>
        </tr>
        <tr>
          <td width="50%" className="sm">{props.date}</td>
        </tr>
        </tbody>
      </table>

    </div>
    </div>
  )
}
export default ListContent;