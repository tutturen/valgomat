import React from 'react';

class ResultInfo extends React.Component {

  render() {
    return (
      <div className="resultInfo">
        <img src={this.props.winnerLogo} alt={this.props.winnerName} />
        <p>Valgorama er ferdig, og det viser seg at du er en tilhenger av politikken til {this.props.winnerName}.</p>
      </div>
    );
  }
}

ResultInfo.propTypes = {
  winnerName: React.PropTypes.string,
  winnerLogo: React.PropTypes.string,
};

export default ResultInfo;
