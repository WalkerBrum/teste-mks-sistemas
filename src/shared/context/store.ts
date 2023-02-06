import { configureStore, createSlice } from '@reduxjs/toolkit';


interface ICounterStateProps {
    open: boolean;
    items: ICardProducts[];
    total: number;
}

interface ICardProducts {
    name: string;
    photo: string;
    price: number;
    id: number;
    qnty: number;
}

const initialState: ICounterStateProps = {
    open: false,
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
        addToCart: (state, action) => {
            const hasProductAdd = state.items.findIndex((product) => product.id === action.payload.id);

            if (hasProductAdd > -1) {
                state.items[hasProductAdd].qnty += 1;

            } else {
                state.items.push({
                    qnty: 1,
                    ...action.payload,
                });
            }
        },
        cartValueTotal: state => {
            state.total = state.items.reduce((acumulador, product) => acumulador + product.price * product.qnty, 0);
        },
        moreQnty: (state, action) => {
            state.items.map((product) => {

                if (product.id === action.payload) {
                    product.qnty += 1;
                }

                return product;
            });
        },
        lessQnty: (state, action) => {
            state.items.map((product) => {

                if (product.id === action.payload && product.qnty > 1) {
                    product.qnty -= 1;      
                }

                return product;
            });
        },
        deleteToCart: (state, action) => {
            for (let i = 0; i < state.items.length; i++) {

                if (state.items[i].id === action.payload) {
                    state.items.splice(i, 1);
                }
            }
        },
    }
});

export const { cartOpen, cartClose, addToCart, cartValueTotal, moreQnty, lessQnty, deleteToCart } = CounterSlice.actions;

const store = configureStore({
    reducer: {
        cart: CounterSlice.reducer,
    }
});

export type StoreState = ReturnType<typeof store.getState>

export default store;