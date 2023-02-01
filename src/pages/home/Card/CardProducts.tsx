import { Card, Description, Image, PriceProduct, TitleProduct, Wrapper } from './styled';

interface ICardProducts {
    name: string;
    photo: string;
    description: string;
    price: string;
}

export const CardProducts: React.FC<ICardProducts> = (props) => {
    const {name, photo, description, price} = props;

    return (
        <Card>
            <Image src={photo} />
            <Wrapper>
                <TitleProduct>{name}</TitleProduct>
                <PriceProduct>R${price}</PriceProduct>
            </Wrapper>
            <Description>{description}</Description>
            <button>Comprar</button>
        </Card>
    );
};