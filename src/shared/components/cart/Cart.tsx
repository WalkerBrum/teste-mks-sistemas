import { useSelector, useDispatch } from 'react-redux';

import { CartItem } from './cart-item/CartItem';
import { cartClose, StoreState } from '../../context/store';
import { CarOverlay, CartClosed, CartOpened, CloseButton, FinishedBuyButton, Title, ValueInformationCart, Wrapper, WrapperTotalValue, WrapperHeaderCart } from './styled';



export const Cart: React.FC = () => {
    const { items: products, open, total } = useSelector((state: StoreState) => state.cart);

    const dispatch = useDispatch();
    console.log(products); 

    return (
        <>
            {open && <CarOverlay />}
            {open ? 
                <CartOpened>
                    <WrapperHeaderCart>
                        <Title>Carrinho de Compras</Title>
                        <CloseButton onClick={() => dispatch(cartClose())}>X</CloseButton>
                    </WrapperHeaderCart>
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
                        <WrapperTotalValue>
                            <ValueInformationCart>Total:</ValueInformationCart>
                            <ValueInformationCart>R${total}</ValueInformationCart>
                        </WrapperTotalValue>
                        <FinishedBuyButton>Finalizar Compra</FinishedBuyButton>
                    </Wrapper>
                </CartOpened> : <CartClosed />
            }
        </>
    );
};