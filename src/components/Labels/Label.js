import React from 'react';
import './Label.css';
import '.././styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Label = (props) => {
  var toastStyle;
  if (props.icon != null)
    toastStyle = "IconLabel " + props.type;
  else
    toastStyle = "noIconLabel " + props.type;
  return (

    <div className={toastStyle}>
      {
        (props.icon != null) ?
          (
            <table>
              <tbody>
                <tr>
                  <td className="iconBox">{(props.icon === "danger") ? <FontAwesomeIcon icon={faExclamationTriangle} color="#1662EF" size="2x" />
                    : <FontAwesomeIcon icon={faCheckCircle} color="#FFFFFF" size="2x" />}</td>
                  <td>{props.text}</td>
                </tr>
              </tbody>
            </table>
          ) :
          props.text
      }
    </div>
  )
}
export default Label;