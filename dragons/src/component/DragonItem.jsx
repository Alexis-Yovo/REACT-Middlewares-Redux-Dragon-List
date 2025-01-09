import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteDragonAction } from '../store/action/dragon-action';

const DragonItem = ({ dragon, deleteDragon }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    deleteDragon(dragon.id);
    dispatch(deleteDragonAction(dragon.id)); // Utilisation de deleteDragonAction
  };

  return (
    <div>
      <span>{dragon.name}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

DragonItem.propTypes = {
  dragon: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  deleteDragon: PropTypes.func.isRequired,
};

export default DragonItem;
