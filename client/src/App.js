import React from 'react'

function App() {

  const getInterpretedTexts = (countries, text) => {
    const initialText = 'Translate this into';

    let list = "";

    for (let i = 0; i < countries.length; i++) {
      const country = countries[i];

      list += `${i + 1}. ${country}, `;
    }

    // remove the trailing commas and spaces
    list = list.slice(0, -2);

    const promptText = `${initialText} ${list} and ${countries.length}. ${countries[countries.length - 1]}:\\n\\n${text}\\n\\n1.",`;

    console.log(promptText);
  }

  return (
    <div>App</div>
  )
}

export default App