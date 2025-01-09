import { addDragon, deleteDragon } from '../reducer/dragonReducer';
import { logAction } from '../reducer/logReducer';

export const addDragonAction = (dragon) => {
  return (dispatch) => {
    dispatch(logAction(`Dragon added: ${dragon.name}`));
    dispatch(addDragon(dragon));
  };
};

export const deleteDragonAction = (id) => {
  return (dispatch) => {
    dispatch(logAction('Dragon deleted'));
    dispatch(deleteDragon(id));
  };
};
