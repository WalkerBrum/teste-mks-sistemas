import { useDispatch } from 'react-redux';

import { ButtonBuy, Card, Description, ImageProduct, PriceProduct, TitleProduct, Wrapper } from './styled';
import { cartOpen, addToCart, cartValueTotal } from '../../../shared/context/store';

interface ICardProducts {
    name: string;
    photo: string;
    description: string;
    price: string;
    id: number;
}

export const CardProducts: React.FC<ICardProducts> = (props) => {
    const {name, photo, description, price, id} = props;

    const dispatch = useDispatch();

    const buyProduct = (e: any) => {
        e.stopPropagation();

        dispatch(addToCart({
            id,
            name, 
            photo, 
            price, 
        }));

        dispatch(cartOpen());
        dispatch(cartValueTotal());
    };

    return (
        <Card>
            <ImageProduct src={photo} />
            <Wrapper>
                <TitleProduct>{name}</TitleProduct>
                <PriceProduct>R${price}</PriceProduct>
            </Wrapper>
            <Description>{description}</Description>
            <ButtonBuy onClick={buyProduct}>COMPRAR</ButtonBuy>
        </Card>
    );
};