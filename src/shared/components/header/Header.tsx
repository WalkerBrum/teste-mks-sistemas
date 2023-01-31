import { Wrapper, WrapperTitle, TitleFirst, TitleSecond, WrapperCart, SpamCart } from './styled';

export const Header = () => {
    return (
        <div>
            <Wrapper>
                <WrapperTitle>
                    <TitleFirst>MKS</TitleFirst>
                    <TitleSecond>Sistemas</TitleSecond>
                </WrapperTitle>
                <WrapperCart>
                    <SpamCart>Cart</SpamCart>
                    <SpamCart>0</SpamCart>
                </WrapperCart>
            </Wrapper>
        </div>
    );
};