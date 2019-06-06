import React from 'react';
import './Header.css';
import '../Spacings/Spacing.css';
import '.././styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const InstructionHeader = (props) => {
  var headerColor;
  
  if (props.color.toLowerCase() === 'black')
    headerColor = "header black";
  else
    headerColor = "header white";

  return (
    <div className={headerColor}>
      <table width="100%" className="contentDetails sm">
        <tbody>
          <tr>
            <td width="1%"><FontAwesomeIcon icon={faTimes} className="fontAction" /></td>
            <td className="paddingmf titleBold" width="80%">{props.text}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default InstructionHeader;




