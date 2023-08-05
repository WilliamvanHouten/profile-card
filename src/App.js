import UserProfileCard from './UserProfileCard';
import React from 'react';
import ReactDOM from 'react-dom';
import CardStyles from './CardStyles.css';

function App() {
  return (
      <div className="App">
          <UserProfileCard />
      </div>
  );
}

ReactDOM.render(App, document.getElementById("root"))
ReactDOM.render(<UserProfileCard/>, document.getElementById("root"))

export default App;