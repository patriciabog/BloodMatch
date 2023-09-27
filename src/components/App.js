/* IMPORT SECTION */

// - From React
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

  /* EFFECTS (code when the page loads) */

  /* HANDLER FUNCTIONS */

  /* FUNCTIONS AND AUXILIARY VARIABLES TO PAINT THE HTML */

  /* HTML */
  return <div className="App">
      <Header/>
      <main>
        <Form/>
        <Results/>
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
