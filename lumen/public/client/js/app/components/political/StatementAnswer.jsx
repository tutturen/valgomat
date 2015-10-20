import React from 'react';
import classNames from 'classnames';


class StatementAnswer extends React.Component {

  render() {
    const smile = (this.props.smileDegree > 5 || this.props.smileDegree < 1) ? 3 : this.props.smileDegree;
    let text = '';
    switch (smile) {
      case 1: text = 'Helt uenig'; break;
      case 2: text = 'Uenig'; break;
      case 4: text = 'Enig'; break;
      case 5: text = 'Helt enig'; break;
      default: text = 'Nøytral'; break;
    }
    const statementClass = classNames('statementAnswer', { selected: this.props.isSelected });
    return (
      <div className={statementClass} onClick={() => this.props.onAnswer()}>
        <img src={'http://valgomat.dagbladet.no/img/valgomat15/alt-' + smile + '.png'} />
        <div className="statementAnswerText">{text}</div>
      </div>
    );
  }
}

StatementAnswer.propTypes = {
  isSelected: React.PropTypes.bool,
  smileDegree: React.PropTypes.number,
  onAnswer: React.PropTypes.func,
};

export default StatementAnswer;
