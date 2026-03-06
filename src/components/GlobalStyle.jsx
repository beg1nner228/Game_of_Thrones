import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg-color: #1a1a1a;        
    --card-bg: #2a2a2a;        
    --text-main: #e0e0e0;      
    --accent-gold: #c5a059;    
    --accent-blue: #00bcd4;   
    --accent-red: #8b0000;     
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'MedievalSharp', 'Cinzel', 'Georgia', serif; /* Средневековый каллиграфический шрифт */
    background-color: var(--bg-color);
    color: var(--text-main);
    -webkit-font-smoothing: antialiased;
  }

  ul {
    list-of-style: none;
    padding: 0;
    margin: 0;
  }

  /* Твое задание пункт 4: Визуальное выделение для сложности 3 */
  .high-difficulty {
    border: 2px solid var(--accent-red);
    box-shadow: 0 0 15px rgba(139, 0, 0, 0.6);
    transform: scale(1.02);
    transition: all 0.3s ease;
  }
`;