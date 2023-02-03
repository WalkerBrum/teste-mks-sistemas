import { configureStore, createSlice } from '@reduxjs/toolkit';


interface ICounterStateProps {
    open: boolean;
    items: ICardProducts[];
    total: number;
}

interface ICardProducts {
    name: string;
    photo: string;
    price: string;
    id: number;
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
        addToCart: (state: any, action) => {
            const hasProductAdd = state.items.findIndex((product: any) => product.id === action.payload.id);

            if (hasProductAdd > -1) {
                state.items[hasProductAdd].qnty += 1;

            } else {
                state.items.push({
                    qnty: 1,
                    ...action.payload,
                });
            }
        },
    }
});

export const { cartOpen, cartClose, addToCart } = CounterSlice.actions;

const store = configureStore({
    reducer: {
        cart: CounterSlice.reducer,
    }
});

export type StoreState = ReturnType<typeof store.getState>

export default store;