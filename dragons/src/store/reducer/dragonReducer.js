import { createSlice } from '@reduxjs/toolkit';

const dragonSlice = createSlice({
  name: 'dragons',
  initialState: [],
  reducers: {
    addDragon: (state, action) => {
      state.push(action.payload);
    },
    deleteDragon: (state, action) => {
      return state.filter(dragon => dragon.id !== action.payload);
    },
    setDragonName: (state, action) => {
      // Logique pour mettre à jour le nom du dragon
      // Par exemple, si vous avez un état pour le nom du dragon
      return state.map(dragon => {
        if (dragon.id === action.payload.id) {
          return { ...dragon, name: action.payload.name };
        }
        return dragon;
      });
    },
  },
});

export const { addDragon, deleteDragon, setDragonName } = dragonSlice.actions;
export default dragonSlice.reducer;
