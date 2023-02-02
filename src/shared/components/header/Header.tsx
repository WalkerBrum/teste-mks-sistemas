import { useDispatch } from 'react-redux';
import { cartOpen } from '../../context/store';

import { Wrapper, WrapperTitle, TitleFirst, TitleSecond, WrapperCart, SpamCart } from './styled';

export const Header = () => {
    const dispatch = useDispatch();
    
    return (
        <div>
            <Wrapper>
                <WrapperTitle>
                    <TitleFirst>MKS</TitleFirst>
                    <TitleSecond>Sistemas</TitleSecond>
                </WrapperTitle>
                <WrapperCart onClick={() => dispatch(cartOpen())}>
                    <SpamCart>Cart</SpamCart>
                    <SpamCart>0</SpamCart>
                </WrapperCart>
            </Wrapper>
        </div>
    );
};