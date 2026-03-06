import styled from 'styled-components';

export const Card = styled.li`
  background-color: var(--card-bg);
  border-radius: 12px;
  overflow: hidden;
  padding: 15px;
  list-style: none;
  width: 300px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CharacterImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

export const Name = styled.h3`
  margin: 15px 0 5px;
  font-size: 1.4rem;
  color: var(--accent-gold);
  text-align: center;
`;

export const StatsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #444;
  margin-bottom: 15px;
  font-size: 0.8rem;
  color: #bbb;
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;