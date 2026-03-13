import { useState } from 'react'
import './App.css'
import UserFavoriteAnimals from './Components/UserFavoriteAnimals'
import Exercise from './Components/Exercise3'
import CelebrityCard from './Components/CelebrityCard';
import Planets from './Components/Planets';

function App() {
  const user = {
  firstName: "Bob",
  lastName: "Dylan",
  favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
};

  const celebrities = [
  {
    title: "Bob Dylan",
    imageUrl:
      "https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg",
    buttonLabel: "Go to Wikipedia",
    buttonUrl: "https://en.wikipedia.org/wiki/Bob_Dylan",
    description:
      "Bob Dylan is an American singer, songwriter and cultural icon who has influenced music for more than five decades.",
  },
  {
    title: "Paul McCartney",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg",
    buttonLabel: "Go to Wikipedia",
    buttonUrl: "https://en.wikipedia.org/wiki/Paul_McCartney",
    description:
      "Paul McCartney is an English singer, songwriter, and musician best known as a member of the Beatles.",
  },
];
  const myElement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;
  return (
    <>
      <div>Hello World</div>
      <div>{myElement}</div>
      <div>React is {sum} times better with JSX</div>
      <div>
        <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3>
        <UserFavoriteAnimals favAnimals={user.favAnimals}></UserFavoriteAnimals>
      </div>
      <Exercise></Exercise>
      {
        celebrities.map((celebrity,index)=>{
          return(
            <CelebrityCard 
              key={index}
              title={celebrity.title}
              imageUrl={celebrity.imageUrl}
              description={celebrity.description}
              buttonLabel={celebrity.buttonLabel}
              buttonUrl={celebrity.buttonUrl}
            />
          )
        })
      }
    <Planets></Planets>
    </>
  )
}

export default App
