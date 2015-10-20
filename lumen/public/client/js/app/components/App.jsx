import React from 'react';
import TitleBar from './TitleBar.jsx';
import Content from './Content.jsx';
import DemographicScreen from './demographic/DemographicScreen.jsx';
import PoliticalStatement from './political/PoliticalStatement.jsx';
import axios from 'axios';

const PHASE = {
  'demograpic': 1,
  'political': 2,
  'result': 3,
};

const API = 'http://localhost:8888/api/v1';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userId: 4,
      phase: PHASE.political,
      statementIndex: 0,
      statements: [
        {
          id: 12,
          text: 'Alle subsidier til norsk petroleumsvirksomhet bør stoppes nå, og hele næringen bør avvikles innen 20 år.',
          category: 'Økonomi',
        },
        {
          id: 13,
          text: 'Lokalpolitikerne bør kunne bestemme mer over fordelene for el-biler.',
          category: 'Miljø',
        },
      ],
      statementAnswers: [],
    };
  }

  saveStatement(id, agreement, importance) {
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

  renderDemographicScreen() {
    return (
    <DemographicScreen
      onFinish={() => this.setState({ phase: PHASE.political })}
    />
    );
  }

  renderPoliticalScreen(statement) {
    return (
      <PoliticalStatement
        id={statement.id}
        statement={statement.text}
        onSubmit={(id, agreement, importance) => this.saveStatement(id, agreement, importance)}
      />
    );
  }

  renderResultScreen() {
    return 'Resultat - Vinner: ' + this.state.winner.name;
  }

  render() {
    let content;
    let currentCategoryName = '';
    let currentCategoryNumber = 0;
    let categoryCount = 0;
    if (this.state.phase === PHASE.demograpic) {
      content = this.renderDemographicScreen();
    } else if (this.state.phase === PHASE.political) {
      const currentStatement = this.state.statements[this.state.statementIndex];
      content = this.renderPoliticalScreen(currentStatement);
      currentCategoryName = currentStatement.category;
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
