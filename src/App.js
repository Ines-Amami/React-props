import Profil from "./Components/Profile/Profil.js";
import Img from "./photo.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
     <Profil
      imge={Img}
        fullName="Ines Amami"
        bio="  I'm a start-freelance in Gafsa(Tunis).I specialize in web, app design, and design logos. I
        wish to work with some companies, so contact me if you like to work together on your next project."
        profession="web developer"  
     />
      </div>
 );
}

export default App;
