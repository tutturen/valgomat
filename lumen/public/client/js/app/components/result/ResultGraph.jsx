import React from 'react';
import Result from './Result.jsx';

class ResultGraph extends React.Component {

  render() {
    const results = this.props.results.map((result) =>
      <Result
        key={result.name}
        name={result.name}
        logo={result.logo}
        score={result.score}
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
};

export default ResultGraph;
