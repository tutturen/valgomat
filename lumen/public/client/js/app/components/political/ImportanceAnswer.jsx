import React from 'react';

class ImportanceAnswer extends React.Component {

  render() {
    const titles = {
      1: 'Ikke viktig',
      2: 'Viktig',
      3: 'Veldig viktig',
    };
    return (
      <div className="importanceAnswer" onClick={() => this.props.onAnswer()}>
        {titles[this.props.importance]}
      </div>
    );
  }
}

ImportanceAnswer.propTypes = {
  importance: React.PropTypes.number,
  onAnswer: React.PropTypes.func,
};

export default ImportanceAnswer;
