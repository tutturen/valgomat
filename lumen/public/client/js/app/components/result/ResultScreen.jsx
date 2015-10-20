import React from 'react';
import ResultInfo from './ResultInfo.jsx';
import ResultGraph from './ResultGraph.jsx';

class ResultScreen extends React.Component {

  render() {
    return (
      <div className="resultScreen">
        <ResultInfo
          winnerName={this.props.winner.name}
          winnerLogo={this.props.winner.logo}
        />
        <ResultGraph
          results={this.props.results}
        />
      </div>
    );
  }
}

ResultScreen.propTypes = {
  winner: React.PropTypes.object,
  results: React.PropTypes.array,
};

export default ResultScreen;
