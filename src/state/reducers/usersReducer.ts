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
      {
        actual: 0,
        income: 0,
      },
      {
        actual: 13,
        income: 13,
      },
      {
        actual: 16,
        income: 3,
      },
      {
        actual: 10,
        income: -6,
      },
      {
        actual: 13,
        income: 3,
      },
    ],
  },

  {
    id: 1,
    userName: "Amancio",
    password: "123",
    wallet: 15500,
    transcactions: [
      {
        actual: 0,
        income: 0,
      },
      {
        actual: 2500,
        income: 2500,
      },
      {
        actual: 5500,
        income: 3000,
      },
      {
        actual: 15500,
        income: 10000,
      },
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
        actual: state[indexTo].wallet + action.payload.amount,
        income: +action.payload.amount,
      });

      state[indexFrom].transcactions = state[indexFrom].transcactions.concat({
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
