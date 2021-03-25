import Profile from "./components/Profile/Profile";
import "./components/Profile/Profile.css";
import person from "./components/Profile/person.json";

import Statistics from "./components/Statistics/Statistics";
import statisticalData from "./components/Statistics/statistical-data.json";

import FriendList from "./components/Friends/FriendList";
import friends from "./components/Friends/friends.json";

import TransactionHistory from "./components/Transactions/TransactionHistory";
import transactions from "./components/Transactions/transactions.json";

function App() {
  return (
    <div className="App">
      <Profile item={person} />
      <Statistics title="Upload stats" stats={statisticalData} />;
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
