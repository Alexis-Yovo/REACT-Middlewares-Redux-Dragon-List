import PropTypes from 'prop-types';
import DragonItem from './DragonItem';

const List = ({ dragons, deleteDragon }) => {
  return (
    <div>
      {dragons.map(dragon => (
        <DragonItem key={dragon.id} dragon={dragon} deleteDragon={deleteDragon} />
      ))}
    </div>
  );
};

List.propTypes = {
  dragons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteDragon: PropTypes.func.isRequired,
};

export default List;
