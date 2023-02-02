import { useSelector, useDispatch } from 'react-redux';
import { cartClose, StoreState } from '../../context/store';

import { CarOverlay, CartClosed, CartOpened, CloseButton, FinishedBuyButton, Title, Wrapper } from './styled';
import { CartItem } from './cart-item/CartItem';


export const Cart: React.FC = () => {
    const { open } = useSelector((state: StoreState) => state.cart);
    const dispatch = useDispatch(); 

    return (
        <>
            {open && <CarOverlay />}
            {open ? 
                <CartOpened>
                    <Wrapper>
                        <Title>Carrinho de Compras</Title>
                        <CloseButton onClick={() => dispatch(cartClose())}>X</CloseButton>
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