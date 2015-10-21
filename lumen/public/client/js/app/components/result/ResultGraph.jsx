import React from 'react';
import Result from './Result.jsx';

class ResultGraph extends React.Component {

  render() {
    const results = this.props.results.map((result) =>
      <Result
        key={result.name}
        name={result.name}
        logo={result.logo}
        score={result.score > 0 ? (result.score / this.props.maxScore) * 100 : 0}
      />
    );

    return (
      <div className="resultGraph">
        { results }
      </div>
    );
  }
}

ResultGraph.propTypes = {
  results: React.PropTypes.array,
  maxScore: React.PropTypes.number,
};

export default ResultGraph;
