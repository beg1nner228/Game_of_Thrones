import styled from 'styled-components';

const Banner = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 12px;
  background: ${(props) => props.$bg || 'rgba(255, 255, 255, 0.06)'};
  border: 1px solid rgba(255, 255, 255, 0.15);
`;

const Logo = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.35);
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow: hidden;
`;

const HouseName = styled.div`
  font-weight: 700;
  font-size: 0.95rem;
  color: #f5f5f5;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const HouseTag = styled.div`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const HouseBanner = ({ name, tag, image, bg }) => (
  <Banner $bg={bg}>
    {image ? <Logo src={image} alt={`${name} logo`} /> : null}

    <Info>
      <HouseName>{name}</HouseName>
      {tag ? <HouseTag>{tag}</HouseTag> : null}
    </Info>
  </Banner>
);

