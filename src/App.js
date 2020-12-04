import logo from "./logo.svg";
import "./App.css";
import MultipleScrapingScreen from "./screens/MultipleScrapingScreen";
import SingleScrapingScreen from "./screens/SingleScrapingScreen";

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit the MAN FUCK YOU GITHUB Why are you so complicated AND YOU GIVE
  //         ME SEIZURE AND I am depressed and I will nuke your HQ
  //         <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  // return <MultipleScrapingScreen></MultipleScrapingScreen>;
  return <SingleScrapingScreen></SingleScrapingScreen>;
}

export default App;
