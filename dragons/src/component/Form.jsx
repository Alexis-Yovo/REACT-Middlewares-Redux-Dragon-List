import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDragonAction } from '../store/action/dragon-action';

const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDragon = { id: `${Date.now()}-${name}`, name }; // Utiliser une combinaison de timestamp et de nom pour garantir l'unicité
    dispatch(addDragonAction(newDragon)); // Utilisation de addDragonAction
    setName(''); // Réinitialiser le champ de texte après l'ajout
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Dragon name"
      />
      <button type="submit">Add Dragon</button>
    </form>
  );
};

export default Form;
