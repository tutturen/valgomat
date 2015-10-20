import React from 'react';
import Bulletpoint from './Bulletpoint.jsx';

class BulletpointQuestion extends React.Component {

  render() {
    const alternativeList = this.props.alternatives.map((alternative, index) =>
      <Bulletpoint
        key={index}
        text={alternative}
        onClick={() => this.props.onSelect(this.props.index, index + 1)}
      />
    );
    return (
      <div className="bulletpointQuestion">
        <div className="questionName">{this.props.name}</div>
        <div className="alternatives">
        {alternativeList}
        </div>
      </div>
    );
  }
}

BulletpointQuestion.propTypes = {
  index: React.PropTypes.number,
  name: React.PropTypes.string,
  alternatives: React.PropTypes.array,
  onSelect: React.PropTypes.func,
};

export default BulletpointQuestion;
