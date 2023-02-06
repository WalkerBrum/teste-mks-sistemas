import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { Wrapper, WrapperTitle, TitleFirst, TitleSecond, WrapperCart, SpamCart } from './styled';
import { cartOpen, StoreState } from '../../context/store';

export const Header = () => {
    const { items: products } = useSelector((state: StoreState) => state.cart);
    const dispatch = useDispatch();
    
    return (
        <div>
            <Wrapper>
                <WrapperTitle>
                    <TitleFirst>MKS</TitleFirst>
                    <TitleSecond>Sistemas</TitleSecond>
                </WrapperTitle>
                <WrapperCart onClick={() => dispatch(cartOpen())}>
                    <FontAwesomeIcon 
                        icon={faShoppingCart}
                    />
                    <SpamCart>{products.length}</SpamCart>
                </WrapperCart>
            </Wrapper>
        </div>
    );
};