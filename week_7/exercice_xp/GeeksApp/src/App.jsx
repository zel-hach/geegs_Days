import { useState } from 'react'
import './App.css'
import UserFavoriteAnimals from './Components/UserFavoriteAnimals'
import Exercise from './Components/Exercise3'

function App() {
  const user = {
  firstName: "Bob",
  lastName: "Dylan",
  favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
};
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
    </>
  )
}

export default App
