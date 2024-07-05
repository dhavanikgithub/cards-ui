import React from 'react';
import Card from './components/Card';
import Card2 from './components/Card2';
import cardsData2 from './data/cardsData2';
import cardsData from './data/cardsData';
import cardsData3 from './data/cardsData3';
import Card3 from './components/Card3';


const App = () => {
  const [isDark, setIsDark] = React.useState(false);
  const [tab,setTab] = React.useState(0);

  return (
    <div className={'main ' + (isDark ? 'dark' : '')}>
      <div className='theme-mode-container'>
        <input type="checkbox" className="checkbox" id="checkbox" onChange={() => setIsDark(!isDark)} />
        <label htmlFor="checkbox" className='checkbox-label'>
          <i className="fas fa-moon"></i>
          <i className="fas fa-sun"></i>
          <span className="ball"></span>
        </label>
      </div>
      <div className="tab">
        <button className="tablinks ff-Outfit fw-400" onClick={() => setTab(0)}>Outline</button>
        <button className="tablinks ff-Outfit fw-400" onClick={() => setTab(1)}>Gradient</button>
        <button className="tablinks ff-Outfit fw-400" onClick={() => setTab(2)}>Fill</button>
      </div>
      <div className="app">

        {tab===0 && cardsData.map((card, index) => {
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

        {tab===1 && cardsData2.map((card, index) => {
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
                isDark={isDark}
              />
            )
          }
          if (index < 39) {
            return (
              <Card2
                key={index}
                id={card.id}
                linerGradientStartColor='white'
                linerGradientEndColor={card.brColor}
                mainColor={card.mainColor}
                contentTextColor='black'
                titleTextColor={card.mainColor}
                isDark={isDark}
              />
            )
          }
        })}

        {tab===2 && cardsData3.map((card, index) => {
          if (isDark) {
            return (
              <Card3
                key={index}
                id={card.id}
                bgColor={card.darkBGColor}
                contentTextColor='white'
                titleTextColor={card.darkTitleTextColor}
                btnBGColor='black'
              />
            )
          }
          return (
            <Card3
              key={index}
              id={card.id}
              bgColor={card.bgColor}
              contentTextColor='#21272A'
              titleTextColor={card.titleTextColor}
              btnBGColor='white'
            />
          )
        })}
      </div>
    </div>
  );
};

export default App;
