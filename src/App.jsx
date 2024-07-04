import React from 'react';
import Card from './components/Card';
import Card2 from './components/Card2';
import cardsData2 from './data/cardsData2';
import cardsData from './data/cardsData';


const App = () => {
  const [isDark, setIsDark] = React.useState(false);

  return (
    <div className={'main ' + (isDark ? 'dark' : '')}>
      <div className='theme-mode-container'>
        <input type="checkbox" className="checkbox" id="checkbox" onChange={() => setIsDark(!isDark)} />
        <label for="checkbox" className='checkbox-label'>
          <i className="fas fa-moon"></i>
          <i className="fas fa-sun"></i>
          <span className="ball"></span>
        </label>
      </div>
      <div className="app">

        {cardsData.map((card, index) => {
          if (isDark) {
            return (
              <Card
                key={index}
                id={card.id}
                bgColor={card.darkBGColor}
                brColor={card.darkBRColor}
                mainColor={card.darkMainColor}
                dark={isDark}
              />
            )
          }
          return (
            <Card
              key={index}
              id={card.id}
              bgColor={card.bgColor}
              brColor={card.brColor}
              mainColor={card.mainColor}
              dark={isDark}
            />
          )
        })}

        {cardsData2.map((card, index) => {
          if (isDark) {
            return (
              <Card2
                key={index}
                id={card.id}
                linerGradientStartColor='#121212'
                linerGradientEndColor={card.darkBRColor}
                mainColor={card.darkMainColor}
                contentTextColor='white'
                titleTextColor={card.darkMainColor}
              />
            )
          }
          if(index < 19){
            return (
              <Card2
                key={index}
                id={card.id}
                linerGradientStartColor='white'
                linerGradientEndColor={card.brColor}
                mainColor={card.mainColor}
                contentTextColor='black'
                titleTextColor={card.mainColor}
              />
            )
          }
        })}
      </div>
    </div>
  );
};

export default App;
