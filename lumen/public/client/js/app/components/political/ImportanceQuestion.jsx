import React from 'react';
import ImportanceAnswer from './ImportanceAnswer.jsx';

class ImportanceQuestion extends React.Component {

  render() {
    const answers = [1, 2, 3].map((nr) =>
      <ImportanceAnswer key={nr} importance={nr} onAnswer={() => this.props.onAnswer(nr)} />
    );
    return (
      <div className="importanceQuestion">
        <h5 className="importanceTitle">Hvor viktig er dette for deg?</h5>
        <div className="importanceAnswerList">
          {answers}
        </div>
      </div>
    );
  }
}

ImportanceQuestion.propTypes = {
  onAnswer: React.PropTypes.func,
};

export default ImportanceQuestion;
