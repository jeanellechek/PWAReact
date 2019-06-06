import React from 'react';
import './Toast.css';
import '.././styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const Toast = (props) => {

  function displayToast() {
    var x = document.getElementById(props.type.toLowerCase() + "Toast");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);

  }

  return (
    <div><button onClick={displayToast}>Display Toast</button>
      <div id={props.type.toLowerCase() + "Toast"}>
        {(props.type.toLowerCase() === "success") ? (
          <table>
            <tbody>
              <tr>
                <td className="iconBox"><FontAwesomeIcon icon={faPaperPlane} size="2x" /></td>
                <td>A new code has been sent to {props.number}</td>
              </tr>
            </tbody>
          </table>)
          : (
            <table>
              <tbody>
                <tr>
                  <td className="iconBox"><FontAwesomeIcon icon={faExclamationTriangle} size="2x" /></td>
                  <td>Sorry! Something went wrong in our server :( Try again later.</td>
                </tr>
              </tbody>
            </table>
          )
        }

      </div>


    </div>
  )
}
export default Toast;