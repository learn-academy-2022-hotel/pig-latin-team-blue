
import React, { useState } from 'react'
import './App.css'
import butcherPigImage from './assets/butcherPig.jpeg'

const App = () => {

  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState("")
  const [inputTranslated, setInputTranslated] = useState("")

  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => {

    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const arrayOfUserInput = userInput.split(" ")
    console.log("arrayOfUserInput:", arrayOfUserInput)

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map(eachWord => {
      console.log("eachWord:", eachWord)

      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      const vowelsArray = eachWord.split("").filter(vowel => {
        return (
          vowel === "a" || 
          vowel === "e" || 
          vowel === "i" || 
          vowel === "o" || 
          vowel === "u"
        )
      })
      console.log("vowelsArray:", vowelsArray)

      // ACTION ITEM: your Pig Latin logic goes here!

    // Pseudocode for Vowels:
    // create a function that checks if the first index of a string within an array is a vowel
    // use .charAt() to pinpoint the 0th index
    // use .match() to check if the 0th index is a vowel
    // input: array of string(s)
    // output: new array of strings with "way" added to the end

    //Pseudocode for QU:
    // create a function that checks for "qu" within a string
    // use .charAt() to specify whether the "qu" is at index 0 and 1, or 1 and 2
    // use .slice() to only log the string after "qu"
    // use value.length to account for any length of string
    // input: array of string(s)
    // output: new array of strings that end with either "quay" or "squay" depending on how they begin 

    // Pseudocode for Y
    // create a function that looks for "y" in a string
    // use .chatAt() to specifiy whether "y" is at index value 1 or index value 2
    // use .slice() to only log the string after the "y"
    // use value.length to account for any length string
    // input: array of strings
    // output: new array of strings with "y" as the first letter, followed the sliced letters, followed by "ay"

    // Pseudocode for consonant functionality
    // Create a function that looks for the first vowel in a string after consanants
    // use .search to locate first vowel after consonant(s)
    // use .slice to remove the beginning consanant(s)
    // use value.length to account for any length string
    // input: array of strings
    // output: new array of strings with the vowel as the first letter, the leading consonants added after the array.length, and "ay" added to the end
    
    if (eachWord.charAt(0).match(/[a,e,i,o,u]/)) {
      return eachWord + "way"
    } else if (eachWord.charAt(0).match(/[q]/) && eachWord.charAt(1).match(/[u]/)) {
      return eachWord.slice(2, (eachWord.length)) + "quay"
    } else if (eachWord.charAt(1).match(/[q]/) && eachWord.charAt(2).match(/[u]/)) {
      return eachWord.slice(3, (eachWord.length)) + "squay"
    } else if (eachWord.charAt(1).match(/[y]/)) {
      return eachWord.slice(1, eachWord.length) + eachWord.slice(0, 1) + "ay"
    } else if (eachWord.charAt(2).match(/[y]/)) {
      return eachWord.slice(2, eachWord.length) + eachWord.slice(0, 2) + "ay"
    } else if (eachWord.search(/[a, e, i, o, u]/)) {
      return eachWord.slice((eachWord.search(/[a, e, i, o, u]/g)), (eachWord.length)) + eachWord.slice(0, eachWord.search(/[a, e, i, o, u]/g)) + "ay"
  }
    

      // ACTION ITEM: this return will be the output of your Pig Latin'd code
      
        return eachWord
      
    })

    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords)
  }

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("")
    setInputTranslated("")
  }

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="page-container">
      <div className="body-container">
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPigImage}
          alt="pig with butcher cut names in pig latin"
          className="butcher-pig-image"
        />

        <div className="input-section">
          <h4>Enter phrase to be translated:</h4>
          <input
            type="text"
            className="user-input"
            onChange={handleInput}
            value={userInput}
          />
          <br />
          <button onClick={setUpPreventDefault}>Submit</button>
          <button onClick={restartGame}>Clear</button>
        </div>
        <p>{inputTranslated}</p>
      </div>
      <footer>&copy; 2022 | Coded by: Moss Cantrell, Sammy Torres, and Fred McBurnett</footer>
    </div>
  )
}

export default App