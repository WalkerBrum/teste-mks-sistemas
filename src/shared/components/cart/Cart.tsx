import { useSelector, useDispatch } from 'react-redux';

import { CartItem } from './cart-item/CartItem';
import { cartClose, StoreState } from '../../context/store';
import { CarOverlay, CartClosed, CartOpened, CloseButton, FinishedBuyButton, Title, Wrapper } from './styled';



export const Cart: React.FC = () => {
    const { items: products, open, total } = useSelector((state: StoreState) => state.cart);

    const dispatch = useDispatch();
    console.log(products); 

    return (
        <>
            {open && <CarOverlay />}
            {open ? 
                <CartOpened>
                    <Wrapper>
                        <Title>Carrinho de Compras</Title>
                        <CloseButton onClick={() => dispatch(cartClose())}>X</CloseButton>
                    </Wrapper>
                    {products.map((product, index) => 
                        <CartItem 
                            key={index}
                            name={product.name}
                            photo={product.photo}
                            price={product.price}
                            qnty={product.qnty}
                            id={product.id}
                        />)}
                    
                    <Wrapper>
                        <Title>Total:</Title>
                        <Title>R${total}</Title>
                    </Wrapper>
                    <FinishedBuyButton>Finalizar Compra</FinishedBuyButton>
                </CartOpened> : <CartClosed />
            }
        </>
    );
};