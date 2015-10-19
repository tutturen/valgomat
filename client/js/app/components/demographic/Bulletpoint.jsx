import React from 'react';

class Bulletpoint extends React.Component {

  render() {
    return (
      <div className="bulletpoint">
        <div className="bulletpointName" onClick={() => this.props.onClick()}>{this.props.text}</div>
      </div>
    );
  }
}

Bulletpoint.propTypes = {
  text: React.PropTypes.string,
  onClick: React.PropTypes.func,
};

export default Bulletpoint;
