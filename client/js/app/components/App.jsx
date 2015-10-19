import React from 'react';
import TitleBar from './TitleBar.jsx';
import Content from './Content.jsx';
import DemographicScreen from './demographic/DemographicScreen.jsx';

const PHASE = {
  'demograpic': 1,
  'political': 2,
  'result': 3,
};

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      phase: PHASE.demograpic,
      currentCategoryName: 'Miljø og Ressurser',
      currentCategoryNumber: 3,
      categoryCount: 25,
    };
  }

  renderDemographicScreen() {
    return (
    <DemographicScreen
      onFinish={() => this.setState({ phase: PHASE.political })}
    />
    );
  }

  renderPoliticalScreen() {
    return "politiske utsagn";
  }

  renderResultScreen() {

  }

  render() {
    let content;
    if (this.state.phase === PHASE.demograpic) {
      content = this.renderDemographicScreen();
    } else if (this.state.phase === PHASE.political) {
      content = this.renderPoliticalScreen();
    } else {
      content = this.renderResultScreen();
    }

    return (
      <div className="valgoramaContainer">
        <TitleBar
          categoryName={this.state.currentCategoryName}
          categoryNumber={this.state.currentCategoryNumber}
          categoryCount={this.state.categoryCount}
        />

        <Content>
          {content}
        </Content>
      </div>
    );
  }

}

export default App;
