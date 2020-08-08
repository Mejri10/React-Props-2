import React from 'react';
import Profilecomposant from "./profile/Profilecomposant"
import './App.css';
const profile ={}
function App() {
  return (
    <div className="App">
     <Profilecomposant fullName="Tokyo" bio="..." profession="...">
       <img style={{borderradius: "20px" }} src="https://resize-elle.ladmedia.fr/rcrop/796,1024/img/var/plain_site/storage/images/mode/les-news-mode/l-instant-mode-la-collection-capsule-de-diesel-speciale-casa-de-papel-3799320/90667129-1-fre-FR/L-Instant-Mode-la-collection-capsule-de-Diesel-speciale-Casa-de-Papel.jpg" alt="" width="300" height="300" />
     </Profilecomposant>
    </div>
  );
}

export default App;
