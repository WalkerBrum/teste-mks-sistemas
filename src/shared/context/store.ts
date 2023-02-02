import { configureStore, createSlice } from '@reduxjs/toolkit';
import React from 'react';

interface ICounterStateProps {
    open: boolean;
    items: [];
    total: number;
}

const initialState: ICounterStateProps = {
    open: false,
    items: [],
    total: 0,
};

export const counterSlice = createSlice({
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

export const { cartOpen, cartClose } = counterSlice.actions;

export default configureStore({
    reducer: {
        cart: counterSlice.reducer,
    }
});