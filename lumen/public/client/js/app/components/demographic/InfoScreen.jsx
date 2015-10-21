import React from 'react';
import GenderQuestion from './GenderQuestion.jsx';

class InfoScreen extends React.Component {

  render() {
    return (
      <div className="infoScreen">
        <div className="leftContainer">
          <h2>Valgorama 2015</h2>
          <h3>Hvilket parti passer for deg?</h3>
          <h4>Velg kjønn for å starte testen</h4>
        </div>
        <div className="rightContainer">
          <p>Hvor viktig du angir hver sak er, tro det eller ei, avgjørende for hvilket parti du havner på.</p>
        </div>
        <GenderQuestion onSelect={(nr) => this.props.onGenderSelect(nr)} />
      </div>
    );
  }
}

InfoScreen.propTypes = {
  onGenderSelect: React.PropTypes.func,
};

export default InfoScreen;
