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
    setDonateFilter(type);
    handleFilterTypeBlood(type);
    
    const selectedType = bloodTypesInfo.find(bloodType => bloodType.type === type);

    // Realizar acciones adicionales según tus necesidades con el tipo seleccionado
    if (selectedType) {
      console.log(`You have chosen the blood type: ${type}`);
      setShowResults(true);
      
    } else {
      console.error(`Invalid blood type: ${type}`);
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
  const typeBloodFiltred = bloodTypesInfo
    .filter((eachType) => eachType.type === typeFilter)

    const typeDonateFiltered = bloodTypesInfo
    .filter((eachDonate) => eachDonate.donate.includes(donateFilter))

  
  /* HTML */
  return <div className="App">
      <Header/>
      <main>
        <Form
        typeFilter={typeFilter}
        handleFilterTypeBlood={handleFilterTypeBlood}
        donateFilter={donateFilter}
        handleFilterDonate={handleFilterDonate}
        handleSubmit={handleSubmit}
        handleSelectType={handleSelectType}
        handleReset={handleReset}
        />
      {showResults && <Results typeBloodFiltred={typeBloodFiltred} typeDonateFiltered={typeDonateFiltered}/>}
      <button type="submit" onClick={handleSubmit}>
        Enter
      </button>
      <button type="button" onClick={handleReset}>Reset</button>
      </main>
      <footer>
        <ul>
        <li>© 2023</li>
        <li>We❤️Donate</li>
        </ul>
      </footer>
  </div>;
}

/* PROP-TYPES */

/* EXPORT */
export default App;
