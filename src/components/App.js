/* IMPORT SECTION */
// - From React
import { useState } from 'react';
// - Our
import Header from './Header';
import Form from './Form'
import Results from './Results';
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


  const bloodTypesInfo = [
    {
      type: "A+",
      donate: ["A+", "AB+"],
      receive: ["A+", "A-", "O+", "O-"],
    },
    {
      type: "A-",
      donate: ["A+", "A-", "AB+", "AB-"],
      receive: ["A-", "O-"],
    },
    {
      type: "B+",
      donate: ["B+", "AB+"],
      receive: ["B+", "B-", "O+", "O-"],
    },
    {
      type: "B-",
      donate: ["B+", "B-", "AB+", "AB-"],
      receive: ["B-", "O-"],
    },
    {
      type: "AB+",
      donate: ["AB+"],
      receive: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },
    {
      type: "AB-",
      donate: ["AB+", "AB-"],
      receive: ["A-", "B-", "AB-", "O-"],
    },
    {
      type: "O+",
      donate: ["A+", "B+", "AB+", "O+"],
      receive: ["O+", "O-"],
    },
    {
      type: "O-",
      donate: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      receive: ["O-"],
    },
  ];


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

/* PROP-TYPES */

/* EXPORT */
export default App;
