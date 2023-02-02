import { useDispatch } from 'react-redux';

import { ButtonBuy, Card, Description, Image, PriceProduct, TitleProduct, Wrapper } from './styled';
import { cartOpen } from '../../../shared/context/store';

interface ICardProducts {
    name: string;
    photo: string;
    description: string;
    price: string;
}

export const CardProducts: React.FC<ICardProducts> = (props) => {
    const {name, photo, description, price} = props;

    const dispatch = useDispatch();

    const buyProduct = (e: any) => {
        e.stopPropagation();

        dispatch(cartOpen());
    };

    return (
        <Card>
            <Image src={photo} />
            <Wrapper>
                <TitleProduct>{name}</TitleProduct>
                <PriceProduct>R${price}</PriceProduct>
            </Wrapper>
            <Description>{description}</Description>
            <ButtonBuy onClick={buyProduct}>COMPRAR</ButtonBuy>
        </Card>
    );
};