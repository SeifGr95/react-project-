//import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile'
import MyImg from './images/img.JPEG'


function App() {
  function handle(fullName){
     alert(fullName);
  }
  return (
    <div className="App">
      <Profile 
      fullName="Seif Gorchene" 

      bio="Student at GoMyCode"

      profession="front-end developer"

      pic={MyImg}
      handleName={handle}/>
     
    </div>
  );
}

export default App;
