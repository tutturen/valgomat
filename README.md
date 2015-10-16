# valgorama
Showcase for webdesign

##Beskrivelse
Valgorama samler først inn demogragiske data, og stiller deretter en rekke politiske spørsmål.
Hvert spørsmål har fem svar:
  - Helt enig
  - Litt enig
  - Nøytral
  - Litt uenig
  - Helt uenig
Hvert svar skal også vektes:
  - Veldig viktig
  - Viktig
  - Ikke viktig
Etter å ha svart på alle spørsmålene, får man opp en graf som viser deg hvilket politisk parti som passer deg best.

##Krav
- [ ] Må kunne ta høyde for høy samtidig trafikk
- [ ] Må fungere like bra på store og små skjermer
- [ ] API'et må være generelt nok for flere platformer

##Server
Tatt utgangspunkt i Lumen (http://lumen.laravel.com/) i PHP.
###Modeller
- User (id, gender, ageGroup, partyLastElection, county)
- AgeGroup (id, startAge, endAge)
- Party (id, name)
- County (id, name)
- Municipality (id, name, countyId)
- Topic (id, name)
- Question (id, text, topicId)
- QuestionWeight (id, questionId, partyId)
- QuestionAnswer (id, answerWeight, importanceWeight,userId, questionId)

##Client
Tatt utgangspunkt i React.js (https://facebook.github.io/react/) i Javascript.

###React Components
Dette gir et grovt overblikk på hvilke React Components som det er behov for.
- App
  - TitleBar
  - Content
    - DemographicQuestion
      - GenderQuestion
        - GenderOption
      - BulletpointQuestion
        - BulletpointQuestionTitle
        - Bulletpoint
    - PoliticalQuestion
      - PoliticalQuestionTitle
      - QuestionAnswers
        - QuestionAnswer
      - ImportanceQuestion
        - ImportanceAnswer
    - ResultScreen
      - ResultScreenInfo
      - ResultGraph
        - GraphOption


