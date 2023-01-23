import './App.css';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
import ProfilePicture from './Component/Profile/ProfilePicture';

function App() {
  return (
    <div className="App">
      <div className = 'container'>
        <ProfilePicture />
        <FullName />
        <Address /> 
      </div>
    </div>
  );
}

export default App;
