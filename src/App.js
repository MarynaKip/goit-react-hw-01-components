import Profile from "./components/Profile/Profile";
import "./components/Profile/Profile.css";
import person from "./components/Profile/person.json";

function App() {
  return (
    <div className="App">
      <Profile item={person} />
    </div>
  );
}

export default App;
