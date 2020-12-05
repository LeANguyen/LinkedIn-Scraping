import logo from "./logo.svg";
import "./App.css";
import ScrapeProfileScreen from "./screens/ScrapeProfileScreen";

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
  return <ScrapeProfileScreen></ScrapeProfileScreen>;
}

export default App;
