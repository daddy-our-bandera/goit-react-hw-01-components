import PropTypes from 'prop-types';
import { StatBox, List, Item, Label, Title } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatBox>
      <Title>{title}</Title>
      <List>
        {stats.map(stat => {
          return (
            <Item key={stat.id}>
              <Label>{stat.label}</Label>
              <Label>{stat.percentage}%</Label>
            </Item>
          );
        })}
      </List>
    </StatBox>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
