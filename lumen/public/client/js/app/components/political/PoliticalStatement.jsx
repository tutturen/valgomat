import React from 'react';
import StatementTitle from './StatementTitle.jsx';
import StatementAnswers from './StatementAnswers.jsx';
import ImportanceQuestion from './ImportanceQuestion.jsx';

class PoliticalStatement extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      answer: 0,
    };
  }

  submitAnswers(importance) {
    this.props.onSubmit(this.props.id, this.state.answer, importance);
    this.setState({ answer: 0 });
  }

  render() {
    return (
      <div className="politicalStatement">
        <StatementTitle text={this.props.statement} />
        <StatementAnswers selected={this.state.answer} onAnswer={(answer) => this.setState({ answer: answer })} />
        { this.state.answer > 0 && <ImportanceQuestion onAnswer={(importance) => this.submitAnswers(importance)} /> }
      </div>
    );
  }
}

PoliticalStatement.propTypes = {
  id: React.PropTypes.number,
  statement: React.PropTypes.string,
  onSubmit: React.PropTypes.func,
};

export default PoliticalStatement;
