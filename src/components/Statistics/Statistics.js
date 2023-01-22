import PropTypes from 'prop-types';
import {
    StatisticsSection,
    StatTitle,
    // Statisticsdiv,
    ListStat,
    StatItem,
    StatLabel,
    StatPercentage,

  } from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <StatTitle>{title}</StatTitle>}
      {/* <Statisticsdiv> */}
      <ListStat>
      {stats.map(({ id, label, percentage }) => (
        
          <StatItem key={id} style={{ backgroundColor: getRandomHexColor() }}>
            <StatLabel>{label}</StatLabel>
            <StatPercentage>{percentage}</StatPercentage>
          </StatItem>
        
      ))}
      </ListStat>
      {/* </Statisticsdiv> */}
    
    </StatisticsSection>
  );
};

function getRandomHexColor() { 
  return `#${Math.floor(Math.random() * 16777215) 
    .toString(16) 
    .padStart(6, 0)}`; 
}
Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
