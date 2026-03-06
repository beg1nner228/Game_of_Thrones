import { Card, CharacterImage, Name, StatsWrapper, StatItem } from './Character';
import { Difficulty } from './Difficulty';
import { StrategyLvl } from './StrategyLvl';
import { HouseBanner } from './HouseBanner';

const SkillsList = {
  display: "flex",
  gap: "10px",
  justifyContent: "center",
  padding: "0",
  margin: "0",
  flexDirection: "column",
  marginBottom: "15px"
}

export const CharacterCard = ({ character }) => {
  const { name, image, stats, difficulty, iq, house, tag, houseBg, banner } = character;

  return (
    <Card $difficulty={difficulty}>
      <CharacterImage src={image} alt={name} />
      <Name>{name}</Name>
      
      <StatsWrapper>
        <StatItem>
          <span>Age</span>
          <strong>{stats.age}</strong>
        </StatItem>
        <StatItem>
          <span>IQ</span>
          <strong>{stats.influence}</strong>
        </StatItem>
        <StatItem>
          <span>Str</span>
          <strong>{stats.strength}</strong>
        </StatItem>
      </StatsWrapper>

      <ul style={SkillsList}>
        <Difficulty level={difficulty} />
      <StrategyLvl iq={iq} />
      </ul>
    <HouseBanner name={house} tag={tag} image={banner} bg={houseBg}/>
    </Card>
  );
};

export default CharacterCard;