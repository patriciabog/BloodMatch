/* IMPORT SECTION */
import { useState } from 'react';
import Header from './Header';
import Form from './Form'
import Results from './Results';
import bloodTypesInfo from './data/bloodTypesInfo';
import ChatContainer from './ChatContainer';
import '../styles/App.scss';

function App() {
  /* STATE VARIABLES (DATA) */
const [typeFilter, setTypeFilter] = useState('');
const [donateFilter, setDonateFilter] = useState('');
const [showResults, setShowResults] = useState(false);

  /* HANDLER FUNCTIONS */
  /**
 * Handles the selection of a blood type and the selection of a donation option for filtering.
 *
 * @param {string} value - The selected blood type.
 * @returns {void}
 */
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

  /**
 * Handles the selection of a donation option from the user interface.
 *
 * @param {Event} ev - The event object representing the user's selection.
 * @returns {void}
 */
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
  /**
 * Filters blood types based on the selected type.
 * @type {Array<object>}
 */
  const typeBloodFiltered = bloodTypesInfo
    .filter((eachType) => eachType.type === typeFilter)
  
  /* HTML */
  return <div className="App">
      <Header/>
      <main className='main'>
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
      <div>
        <ChatContainer />
      </div>
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
