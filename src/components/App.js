/* IMPORT SECTION */
// - From React
import { useState } from 'react';
// - Our
import Header from './Header';
import Form from './Form'
import Results from './Results';
import bloodTypesInfo from './data/bloodTypesInfo';
//import BloodImage from './BloodImage';
// - Sass
import '../styles/App.scss';
// - Images

/* COMPONENT SECTION */
function App() {
  /* STATE VARIABLES (DATA) */
const [typeFilter, setTypeFilter] = useState('');
const [donateFilter, setDonateFilter] = useState('');
const [showResults, setShowResults] = useState(false);

  /* EFFECTS (code when the page loads) */


  /* HANDLER FUNCTIONS */

  const handleFilterTypeBlood = (value) => {
    setTypeFilter(value);
 };

  const handleFilterDonate = (value) => {
    setDonateFilter(value);
  };

  const handleSelectType = (ev) => {
    const type = ev.target.value;
    setTypeFilter(type);
    handleFilterTypeBlood(type);
    
    const selectedType = bloodTypesInfo.find(bloodType => bloodType.type === type);

    if (selectedType) {
      console.log(`You have chosen the blood type: ${type}`);
      setShowResults(true);
      
    } else {
      console.error(`Invalid blood type: ${type}`);
      setShowResults(false);
    }
  };

  const handleSelectDonate = (ev) => {
    const donate = ev.target.value;
    setDonateFilter(donate);
    handleFilterDonate(donate);

    const selectedDonate = bloodTypesInfo.find(donateOption => donateOption.donate === donate);

    if (selectedDonate) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    setShowResults(true);    
  };

  const handleReset = () => {
    setTypeFilter('');
    setDonateFilter('');
    setShowResults(false);
  };

  /* FUNCTIONS AND AUXILIARY VARIABLES TO PAINT THE HTML */
  const typeBloodFiltered = bloodTypesInfo
    .filter((eachType) => eachType.type === typeFilter)
  
  /* HTML */
  return <div className="App">
      <Header/>
      <main>
        <hr className='line-break'/>
        
        <Form
          typeFilter={typeFilter}
          handleFilterTypeBlood={handleFilterTypeBlood}
          donateFilter={donateFilter}
          handleFilterDonate={handleFilterDonate}
          handleSubmit={handleSubmit}
          handleSelectType={handleSelectType}
          handleReset={handleReset}
          handleSelectDonate={handleSelectDonate}
        />
      <hr className='line-break' />

      {showResults && <Results typeBloodFiltered={typeBloodFiltered}/>}
   
      </main>
      <footer className='footer'>
        <ul className='footer__list'>
        <li className='footer__list__item'>© 2023</li>
        <li className='footer__list__item'>We❤️Donate</li>
        </ul>
      </footer>
  </div>;
}

/* EXPORT */
export default App;
