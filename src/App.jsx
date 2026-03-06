import './App.css'
import styled from 'styled-components'
import CharacterCard from './components/Character.jsx'
import { GlobalStyle } from './components/GlobalStyle'
import characters from './data/characters.json'

const CharactersList = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  flex-wrap: wrap;
`

function App() {
  return (
    <>
      <GlobalStyle />
      <CharactersList>
        {characters.map((char, index) => (
          <CharacterCard key={index} character={char} />
        ))}
      </CharactersList>
    </>
  )
}

export default App
