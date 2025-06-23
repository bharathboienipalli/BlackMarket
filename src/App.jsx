import React from 'react';
import NavBar from "./components/NavBar";
import Search from './components/Search';
import MiddlePart from './components/MiddlePart';
import Word from './components/Word';
import Division from './components/Divisions';
import Buttons from './components/Buttons';
import Footer from './components/Footer';
const App =()=>{
const imageNames = ['back.png','doc.jpg','p2.jpg','p3.jpg','p4.jpg','p5.jpg','p6.jpg','p7.jpg','p8.jpg','p9.jps','p10.jpeg']; 
const imageGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)", 
  gap: "10px"
};

let arr=['Family','Business','Jewellery','Couples','Wedding','Farmer','Kitchen',
  'Doctor','Celebration','Office','Travel','Shopping','Education','Students','Insurance','Mobile','Computer',
  'Food','Festivals'];
return(
    <section >
      <NavBar/>
      <Search type="text" placeholder="Search the largest collection of Indian Images"/>
      <MiddlePart imagePath={imageNames[0]}/>
      <Word text="Popular Collection"/>
      <section style={imageGrid} className="images">
      <Division images={imageNames[1]} />
      <Division images={imageNames[2]} />
      <Division images={imageNames[3]} />
      <Division images={imageNames[4]} />
      <Division images={imageNames[5]} />
      <Division images={imageNames[6]} />
      <Division images={imageNames[1]} />
      <Division images={imageNames[2]} />
      <Division images={imageNames[3]} />
      <Division images={imageNames[4]} />
      <Division images={imageNames[5]} />
      <Division images={imageNames[6]} />
      <Division images={imageNames[1]} />
      <Division images={imageNames[2]} />
      <Division images={imageNames[3]} />
      <Division images={imageNames[4]} />
      <Division images={imageNames[7]} />
      <Division images={imageNames[8]} />
         <Division images={imageNames[2]} />
      <Division images={imageNames[6]} />
      </section>
      <section className="details">
      <h1>WHY BLACKMARKET?</h1>
India's diversity and complexity can be witnessed through its people, traditions and values associated with distinctive regional customs, habits, lifestyle and festivals. That's why our content reflects the innate expressions of deep-rooted feelings of individuals through which spring their day-to-day actions. From contemporary concepts and ideas to the broadest range of categories depicting Indians in virtually all walks of life, age groups and expressions - you will find it all here!
      </section>
          <Word text="Popular Search"/>
          <div className="buttons">
            <Buttons word={arr[1]} />
          <Buttons word={arr[2]} />
          <Buttons word={arr[3]} />
          <Buttons word={arr[4]} />
          <Buttons word={arr[5]} />
          <Buttons word={arr[6]} />
          <Buttons word={arr[7]} />
          <Buttons word={arr[8]} />
          <Buttons word={arr[9]} />
          <Buttons word={arr[10]} />
          <Buttons word={arr[11]} />
          <Buttons word={arr[12]} />
          <Buttons word={arr[13]} />
          <Buttons word={arr[14]} />
          <Buttons word={arr[15]} />
          <Buttons word={arr[16]} />
          </div>
      <Footer />
    </section>
  )
}
export default App

