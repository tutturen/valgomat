import React from 'react';
import StatementAnswer from './StatementAnswer.jsx';

class StatementAnswers extends React.Component {

  render() {
    const answers = [1, 2, 3, 4, 5].map((nr) =>
      <StatementAnswer
        key={nr}
        isSelected={this.props.selected === nr}
        smileDegree={nr}
        onAnswer={() => this.props.onAnswer(nr)}
      />
    );
    return (
      <div className="statementAnswerList">
        {answers}
      </div>
    );
  }
}

StatementAnswers.propTypes = {
  selected: React.PropTypes.number,
  smileDegree: React.PropTypes.number,
  onAnswer: React.PropTypes.func,
};

export default StatementAnswers;
