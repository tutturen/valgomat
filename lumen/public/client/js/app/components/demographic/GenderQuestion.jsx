import React from 'react';

class GenderQuestion extends React.Component {

  render() {
    return (
      <div className="genderQuestion">
        <div className="gender" onClick={() => this.props.onSelect(2)}>
          <img src="assets/gender/female.png" alt="kvinne" />
          <p>KVINNE</p>
        </div>
        <div className="gender" onClick={() => this.props.onSelect(1)}>
          <img src="assets/gender/male.png" alt="mann" />
          <p>MANN</p>
        </div>
      </div>
    );
  }
}

GenderQuestion.propTypes = {
  onSelect: React.PropTypes.func,
};

export default GenderQuestion;
