import React from 'react';
import './empty.css';
import '../Spacings/Spacing.css';
import '.././styles.css';
import Button from '../Buttons/Button';
import TitleHeader from '../Headers/TitleHeader';


const Empty = () => {
  return (
    <div className="bg">
      <TitleHeader color="white" text="My Receipt" points="1293" />
      <div className="centered">
        <div className="mdPadding">
          <img src="https://static.thenounproject.com/png/205283-200.png" className="receiptImage" alt="receipt"/>
        </div>

        <div className="bodyBold sm">You don't have any receipt yet.</div>
        <div className="greyFont small xs">Scan your receipt to start earning YaraPoints!</div>
        <div className="mdPadding">
          <Button style="primaryRegular action" text="Earn Points" />
        </div>
      </div>
    </div>
  )
}
export default Empty;