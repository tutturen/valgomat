import React from 'react';

class Result extends React.Component {

  render() {
    const style = {
      height: this.props.score,
    };
    return (
      <div className="result">
        <div className="resultBlock" style={style}></div>
        <img src={this.props.logo} alt={this.props.name} />
      </div>
    );
  }
}

Result.propTypes = {
  name: React.PropTypes.string,
  logo: React.PropTypes.string,
  score: React.PropTypes.number,
};

export default Result;
