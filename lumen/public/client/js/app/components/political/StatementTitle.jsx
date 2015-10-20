import React from 'react';

class StatementTitle extends React.Component {

  render() {
    return (
      <div className="statementTitle">
        <p>{this.props.text}</p>
      </div>
    );
  }
}

StatementTitle.propTypes = {
  text: React.PropTypes.string,
};

export default StatementTitle;
