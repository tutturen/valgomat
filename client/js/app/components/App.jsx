import React from 'react';
import TitleBar from './TitleBar.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentCategoryName: 'Miljø og Ressurser',
      currentCategoryNumber: 3,
      categoryCount: 25,
    };
  }

  render() {
    return (
      <div className="valgoramaContainer">
        <TitleBar
          categoryName={this.state.currentCategoryName}
          categoryNumber={this.state.currentCategoryNumber}
          categoryCount={this.state.categoryCount}
        />
      </div>
    );
  }

}

export default App;
