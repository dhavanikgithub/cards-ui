// App.js
import React from 'react';
import Card from './components/Card';
import Card2 from './components/Card2';
import cardsData2 from './data/cardsData2';


const App = () => {
  const [isDark, setIsDark] = React.useState(false);

  const cardsData = [
    { id: 1, bgColor: 'rgba(250, 245, 255)', brColor: '#e3cdfa', mainColor: '#a64dff', darkMainColor: '#B95FFF', darkBGColor: '#232027', darkBRColor: '#4A4352' },
    { id: 2, bgColor: 'rgb(240, 252, 255)', brColor: 'rgba(0, 155, 221, 0.2)', mainColor: '#4ddbff', darkMainColor: '#4DDBFF', darkBGColor: '#182123', darkBRColor: '#133443' },
    { id: 3, bgColor: 'rgb(245, 250, 255)', brColor: 'rgba(106, 127, 255, 0.2)', mainColor: '#4da6ff', darkMainColor: '#006EC1', darkBGColor: '#1C2024', darkBRColor: '#29324E' },
    { id: 4, bgColor: 'rgb(243, 255, 250)', brColor: '#b0f5d3', mainColor: '#42de9d', darkMainColor: '#42DE9D', darkBGColor: '#171F1C', darkBRColor: '#29324E' },
    { id: 5, bgColor: 'rgb(255, 252, 240)', brColor: '#ffefad', mainColor: '#ffdb4d', darkMainColor: '#FFDB4D', darkBGColor: '#1F1E15', darkBRColor: '#57513B' },
    { id: 6, bgColor: 'rgba(254, 232, 230, 0.7)', brColor: 'rgb(253, 186, 180)', mainColor: '#f86153', darkMainColor: '#CE3B35', darkBGColor: '#291F1E', darkBRColor: '#57513B' },
    { id: 7, bgColor: 'rgba(238, 242, 247, 0.7)', brColor: 'rgb(203, 216, 230)', mainColor: '#86a2c6', darkMainColor: '#86A2C6', darkBGColor: '#1D1F22', darkBRColor: '#818992' },
    { id: 8, bgColor: 'rgba(229, 250, 255, 0.7)', brColor: 'rgb(179, 240, 255)', mainColor: '#4dddff', darkMainColor: '#4DDDFF', darkBGColor: '#131F21', darkBRColor: '#3D5257' },
    { id: 9, bgColor: 'rgba(241, 238, 246, 0.7)', brColor: 'rgb(212, 205, 228)', mainColor: '#9f8ac1', darkMainColor: '#9F8AC1', darkBGColor: '#212024', darkBRColor: '#868190' },
    { id: 10, bgColor: 'rgba(232, 252, 251, 0.5)', brColor: 'rgb(186, 247, 243)', mainColor: '#61eae4', darkMainColor: '#61EAE4', darkBGColor: '#131B1B', darkBRColor: '#3B4F4D' },
    { id: 11, bgColor: 'rgba(247, 243, 238, 0.7)', brColor: 'rgb(230, 218, 204)', mainColor: '#c6a986', darkMainColor: '#C6A986', darkBGColor: '#201E1B', darkBRColor: '#3E3A36' },
    { id: 12, bgColor: 'rgba(250, 236, 234, 0.7)', brColor: 'rgb(241, 199, 192)', mainColor: '#dd7d6f', darkMainColor: '#DD7D6F', darkBGColor: '#261F1E', darkBRColor: '#9D827D' },
    { id: 13, bgColor: 'rgba(229, 242, 255, 0.7)', brColor: 'rgb(179, 217, 255)', mainColor: '#4da6ff', darkMainColor: '#006EC1', darkBGColor: '#192127', darkBRColor: '#3D4957' },
    { id: 14, bgColor: 'rgba(234, 251, 243, 0.7)', brColor: 'rgb(191, 243, 219)', mainColor: '#69e2a9', darkMainColor: '#69E2A9', darkBGColor: '#151E1A', darkBRColor: '#3B4B43' },
    { id: 15, bgColor: 'rgba(251, 253, 231, 0.7)', brColor: 'rgb(243, 249, 184)', mainColor: '#e4f15a', darkMainColor: '#E4F15A', darkBGColor: '#1A1B0F', darkBRColor: '#3F460C' },
    { id: 16, bgColor: 'rgba(250, 234, 239, 0.7)', brColor: 'rgb(240, 193, 207)', mainColor: '#dd6f91', darkMainColor: '#BA4F73', darkBGColor: '#271F21', darkBRColor: '#9C7D86' },
    { id: 17, bgColor: 'rgba(238, 247, 238, 0.7)', brColor: 'rgb(203, 231, 203)', mainColor: '#86c686', darkMainColor: '#86C686', darkBGColor: '#1A1F1A', darkBRColor: '#373F37' },
    { id: 18, bgColor: 'rgba(243, 247, 237, 0.7)', brColor: 'rgb(219, 232, 201)', mainColor: '#adc883', darkMainColor: '#ADC883', darkBGColor: '#1C1E19', darkBRColor: '#3C4037' },
    { id: 19, bgColor: 'rgba(252, 239, 232, 0.7)', brColor: 'rgb(246, 207, 187)', mainColor: '#ea9161', darkMainColor: '#EA9161', darkBGColor: '#241E1A', darkBRColor: '#4E413B' },
  ];
  
  






  return (
    <div className={'main ' + (isDark ? 'dark' : '')}>
      <div>
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
