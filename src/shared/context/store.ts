import { configureStore, createSlice } from '@reduxjs/toolkit';


interface ICounterStateProps {
    open: boolean;
    items: [];
    total: number;
}

const initialState: ICounterStateProps = {
    open: true,
    items: [],
    total: 0,
};

export const CounterSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        cartOpen: state => {
            state.open = true;
        },
        cartClose: state => {
            state.open = false;
        },
    }
});

export const { cartOpen, cartClose } = CounterSlice.actions;

const store = configureStore({
    reducer: {
        cart: CounterSlice.reducer,
    }
});

export type StoreState = ReturnType<typeof store.getState>

export default store;