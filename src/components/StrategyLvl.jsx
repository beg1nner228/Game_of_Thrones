import styled from 'styled-components';

const DiffContainer = styled.div`
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
  padding: 10px;
  border-radius: 8px;

  border: ${props => props.$iq === 4 ? '2px solid rgba(255, 217, 0, 0.4)' : 'none'};
  box-shadow: ${props => props.$iq === 4 ? '0 0 20px rgba(255, 217, 0, 0.4)' : 'none'};
`;

const BadgeContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 5px;
`;

const Badge = styled.span`
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: bold;
  text-transform: uppercase;
  

  background-color: ${props => props.$active ? props.$color : '#333'};
  color: ${props => props.$active ? '#fff' : '#666'};
  opacity: ${props => props.$active ? 1 : 0.4};
`

export const StrategyLvl = ({ iq }) => {
  return (
    <DiffContainer $iq={iq}>
      <p 
        style={{ 
          margin: 0, 
          fontSize: "0.9rem" 
        }}
      >
        Strategy Level
      </p>
      
      <BadgeContainer>
        <Badge $active={iq === 1} $color="#4e6b4f">Easy</Badge>
        <Badge $active={iq === 3} $color="#ff4800">Medium</Badge>
        <Badge $active={iq === 4} $color="#f44336">Deadly </Badge>
      </BadgeContainer>
    </DiffContainer>
  );
};