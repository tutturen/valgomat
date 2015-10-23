import React from 'react';
import TitleBar from './TitleBar.jsx';
import Content from './Content.jsx';
import DemographicScreen from './demographic/DemographicScreen.jsx';
import PoliticalStatement from './political/PoliticalStatement.jsx';
import ResultScreen from './result/ResultScreen.jsx';
import axios from 'axios';

const PHASE = {
  demographic: 1,
  political: 2,
  result: 3,
};

const API = '/api/v1';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userId: 4,
      phase: PHASE.demographic,
      statementIndex: 0,
      statements: [],
      statementAnswers: [],
    };
  }

  componentDidMount() {
    axios.get(API + '/start')
    .then((res) => this.setState({ userId: res.data.userId }))
    .catch((res) => console.log('Error starting: ', res));
  }

  savePoliticalData(id, agreement, importance) {
    const answer = {
      statement_id: id,
      answer: agreement,
      weight: importance,
    };
    const statementAnswers = this.state.statementAnswers.concat([answer]);
    const newIndex = this.state.statementIndex + 1;
    if (newIndex === this.state.statements.length) {
      axios.post(API + '/result', {
        userId: this.state.userId,
        statements: statementAnswers,
      })
      .then((response) => {
        this.setState({
          phase: PHASE.result,
          winner: response.data.winner,
          results: response.data.results,
        });
      })
      .catch((response) => console.log('Error: ', response.data));
    } else {
      this.setState({
      statementAnswers: this.state.statementAnswers.concat([answer]),
      statementIndex: this.state.statementIndex + 1,
    });
    }
  }

  saveDemographicData(gender, ageGroup, lastParty, municipality) {
    axios.post(API + '/statements', {
      userId: this.state.userId,
      gender: gender,
      ageGroup: ageGroup,
      lastParty: lastParty,
      municipality: municipality,
    })
    .then((res) => {
      this.setState({
        phase: PHASE.political,
        statements: res.data.statements,
      });
    })
    .catch((res) => console.log('Error: ', res));
  }

  renderDemographicScreen() {
    return (
      <DemographicScreen
        onFinish={(gend, age, par, mun) => this.saveDemographicData(gend, age, par, mun)}
      />
    );
  }

  renderPoliticalScreen(statement) {
    return (
      <PoliticalStatement
        id={statement.id}
        statement={statement.text}
        onSubmit={(id, agreement, importance) => this.savePoliticalData(id, agreement, importance)}
      />
    );
  }

  renderResultScreen() {
    return (
      <ResultScreen
        winner={this.state.winner}
        results={this.state.results}
      />
    );
  }

  render() {
    let content;
    let currentCategoryName = '';
    let currentCategoryNumber = 0;
    let categoryCount = 0;

    if (this.state.phase === PHASE.demographic) {
      content = this.renderDemographicScreen();
      currentCategoryName = 'Valgorama';
    } else if (this.state.phase === PHASE.political) {
      const currentStatement = this.state.statements[this.state.statementIndex];
      content = this.renderPoliticalScreen(currentStatement);
      currentCategoryName = currentStatement.topic.name;
      currentCategoryNumber = this.state.statementIndex + 1;
      categoryCount = this.state.statements.length;
    } else {
      content = this.renderResultScreen();
      currentCategoryName = 'Resultat';
    }

    return (
      <div className="valgoramaContainer">
        <TitleBar
          categoryName={currentCategoryName}
          categoryNumber={currentCategoryNumber}
          categoryCount={categoryCount}
        />

        <Content>
          {content}
        </Content>
      </div>
    );
  }

}

export default App;
