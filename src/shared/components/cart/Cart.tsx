import { useSelector, useDispatch } from 'react-redux';
import { cartClose, cartOpen } from '../../context/store';

import { CarOverlay, CartClosed, CartOpened, CloseButton, FinishedBuyButton, Title, Wrapper } from './styled';
import { CartItem } from './cart-item/CartItem';


export const Cart = () => {
    const open = useSelector(state => state.cart.value);


    return (
        <>
            {/* <CarOverlay></CarOverlay> */}
            {open ? 
                <CartOpened>
                    <Wrapper>
                        <Title>Carrinho de Compras</Title>
                        <CloseButton>X</CloseButton>
                    </Wrapper>
                    <CartItem />
                    <Wrapper>
                        <Title>Total:</Title>
                        <Title>R$798</Title>
                    </Wrapper>
                    <FinishedBuyButton>Finalizar Compra</FinishedBuyButton>
                </CartOpened> : <CartClosed />
            }
        </>
    );
};