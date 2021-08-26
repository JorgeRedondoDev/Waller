import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Users = {
  id: number;
  userName: string;
  password: string;
  wallet: number;
  transcactions: object[];
};

const initialState: Users[] = [
  {
    id: 0,
    userName: "jorge",
    password: "123",
    wallet: 13,
    transcactions: [
      { id: 0, actual: 0, income: 0 },
      { id: 1, actual: 13, income: +13 },
      { id: 2, actual: 16, income: +3 },
      { id: 3, actual: 10, income: -6 },
    ],
  },

  {
    id: 1,
    userName: "Amancio",
    password: "123",
    wallet: 15500,
    transcactions: [
      { id: 0, actual: 0, income: 0 },
      { id: 1, actual: 2500, income: +2500 },
      { id: 2, actual: 5500, income: +3000 },
      { id: 3, actual: 15500, income: +10000 },
    ],
  },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<Users>) => {
      return [...state, action.payload];
    },

    addMoney: (state, action: any) => {
      const index = state.findIndex((search) => search.id == action.payload.id);

      state[index].transcactions = state[index].transcactions.concat({
        id: state[index].transcactions.length,
        actual: state[index].wallet + action.payload.amount,
        income: +action.payload.amount,
      });

      state[index].wallet += action.payload.amount;

      return state;
    },

    sendMoney: (state, action: any) => {
      const indexTo = state.findIndex(
        (search) => search.id == action.payload.to
      );

      const indexFrom = state.findIndex(
        (search) => search.id == action.payload.from
      );

      state[indexTo].transcactions = state[indexTo].transcactions.concat({
        id: state[indexTo].transcactions.length,
        actual: state[indexTo].wallet + action.payload.amount,
        income: +action.payload.amount,
      });

      state[indexFrom].transcactions = state[indexFrom].transcactions.concat({
        id: state[indexFrom].transcactions.length,
        actual: state[indexFrom].wallet - action.payload.amount,
        income: -action.payload.amount,
      });

      state[indexTo].wallet += action.payload.amount;
      state[indexFrom].wallet -= action.payload.amount;

      return state;
    },
  },
});

export const { addUser, addMoney, sendMoney } = userSlice.actions;

export default userSlice.reducer;
