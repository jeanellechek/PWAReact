import React from 'react';
import './Header.css';
import '../Spacings/Spacing.css';
import '.././styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const TitleHeader = (props) => {
  var headerColor;

  if (props.color.toLowerCase() === 'black')
    headerColor = "header black";
  else
    headerColor = "header white";

  return (
    <div className={headerColor}>
      <table width="100%">
        <tbody>
          <tr>
            <td width="1%"><FontAwesomeIcon icon={faArrowLeft} className="fontAction" /></td>
            <td className="paddingmf titleBold">{props.text}</td>
            <td>
              {(props.points != null) ?
                <div className="titleBold right">{props.points}
                  <img
                    src="http://www.pngmart.com/files/7/Gold-Coin-Transparent-Background.png"
                    className="coin" alt="points"/> </div>
                : <FontAwesomeIcon icon={faEllipsisH} className="fontAction right" />}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default TitleHeader;




