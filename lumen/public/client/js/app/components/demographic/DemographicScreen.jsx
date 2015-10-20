import React from 'react';
import InfoScreen from './InfoScreen.jsx';
import GenderQuestion from './GenderQuestion.jsx';
import BulletpointQuestion from './BulletpointQuestion.jsx';

const QUESTION = {
  ageGroup: 0,
  lastParty: 1,
  county: 2,
  municipality: 3,
};

class DemographicScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gender: 2,
      ageGroup: 0,
      lastParty: 0,
      county: 0,
      municipality: 0,
    };
    this.questions = [
      {
        name: 'Alder:',
        alternatives: [
          '0 - 18',
          '19 - 25',
          '26 - 35',
          '36 - 45',
          '46 - 55',
          '56 - 65',
          '66 - 75',
          '76+',
        ],
      },
      {
        name: 'Stemte ved forrige valg:',
        alternatives: [
          'Miløpartiet De Grønne',
          'Rødt',
          'Sosialistisk Venstreparti',
          'Arbeiderpartiet',
          'Senterpartiet',
          'Kristelig Folkeparti',
          'Venstre',
          'Høyre',
          'Fremskrittspartiet',
          'Andre',
          'Ingen',
        ],
      },
      {
        name: 'Fylke:',
        alternatives: [
          'Akershus',
          'Aust-Agder',
          'Buskerud',
        ],
      },
      { name: 'Kommune:',
        alternatives: (county) => this.getMunicipalities(county),
      },

    ];
  }

  getMunicipalities(county) {
    const data = {
    1: ['Asker', 'Enebakk', 'Fet', 'Frogn', 'Nannestad', 'Nes', 'Nesodden', 'Ski', 'Sørum', 'Ås'],
    2: ['Arendal', 'Birkenes', 'Bygland', 'Bykle', 'Evje og Hornnes', 'Froland', 'Gjerstad', 'Grimstad'],
    3: ['Drammen', 'Flesberg', 'Gol', 'Hemsedal', 'Hol', 'Hole', 'Hurum', 'Kongsberg', 'Eiker', 'Nes'],
    };
    return data[county];
  }

  onAnswerSelect(index, value) {
    switch (index) {
      case QUESTION.ageGroup:
        this.setState({ ageGroup: value });
      break;
      case QUESTION.lastParty:
        this.setState({ lastParty: value });
      break;
      case QUESTION.county:
        this.setState({ county: value });
      break;
      case QUESTION.municipality:
        this.props.onFinish(
          this.state.gender,
          this.state.ageGroup,
          this.state.lastParty,
          value
        );
      break;
      default: break;
    }
  }

  getQuestion(index, alternativesIsFunction = false, key = '') {
    const question = this.questions[index];
    const name = question.name;
    const alternatives = alternativesIsFunction ?
      question.alternatives(key) :
      question.alternatives;
    return (
      <BulletpointQuestion
        index={index}
        name={name}
        alternatives={alternatives}
        onSelect = {(i, val) => this.onAnswerSelect(i, val)}
      />
    );
  }

  render() {
    console.log(this.state);
    let itemShowing;
    if (this.state.gender === 0) {
      itemShowing = <InfoScreen />;
    } else if (this.state.ageGroup === 0) {
      itemShowing = this.getQuestion(QUESTION.ageGroup);
    } else if (this.state.lastParty === 0) {
      itemShowing = this.getQuestion(QUESTION.lastParty);
    } else if (this.state.county === 0) {
      itemShowing = this.getQuestion(QUESTION.county);
    } else if (this.state.municipality === 0) {
      itemShowing = this.getQuestion(QUESTION.municipality, true, this.state.county);
    }
    return itemShowing;
  }
}

DemographicScreen.propTypes = {
  onFinish: React.PropTypes.func,
};

export default DemographicScreen;
