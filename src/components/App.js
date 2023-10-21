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

  const handleSelectType = ({ target }) => {
    const type = target.value;
    [setTypeFilter, handleFilterTypeBlood].forEach(func => func(type));

    const isValidType = bloodTypesInfo.find(bloodType => bloodType.type === type) !== undefined;
    setShowResults(isValidType);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    setShowResults(true);    
  };

  const handleReset = () => {
    setTypeFilter('');
    setShowResults(false);
  };

  /* FUNCTIONS AND AUXILIARY VARIABLES TO PAINT THE HTML */
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
          handleSubmit={handleSubmit}
          handleSelectType={handleSelectType}
          handleReset={handleReset}
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
