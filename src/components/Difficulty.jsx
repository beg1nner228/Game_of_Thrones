import styled from 'styled-components';

const DiffContainer = styled.div`
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
  padding: 10px;
  border-radius: 8px;

  border: ${props => props.$difficulty === 3 ? '2px solid rgba(139, 0, 0, 0.4)' : '1px solid #444'};
  box-shadow: ${props => props.$difficulty === 3 ? '0 0 20px rgba(139, 0, 0, 0.4)' : 'none'};
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

export const Difficulty = ({ level }) => {
  return (
    <DiffContainer $difficulty={level}>
      <p 
        style={{ 
          margin: 0, 
          fontSize: "0.9rem" 
        }}
      >
        Danger Level
      </p>
      
      <BadgeContainer>
        <Badge $active={level === 0} $color="#4caf50">Easy</Badge>
        <Badge $active={level === 1} $color="#ff9800">Medium</Badge>
        <Badge $active={level === 3} $color="#f44336">Deadly</Badge>
      </BadgeContainer>
    </DiffContainer>
  );
};