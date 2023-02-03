import { CloseButton } from '../styled';
import { ButtonMoreLessQtd, ImageProduct, InformationQtd, PriceProduct, SpanQtd, TitleProduct, WrapperItem, WrapperQtd } from './styled';


interface ICartItemProps {
    name: string;
    photo: string;
    price: string;
    key: number;
}

export const CartItem: React.FC<ICartItemProps> = (props) => {
    const { name, photo, price } = props;

    return (
        <WrapperItem>
            <ImageProduct src={photo}/>
            <TitleProduct>{name}</TitleProduct>
            <SpanQtd>Qtd:</SpanQtd>
            <WrapperQtd>
                <ButtonMoreLessQtd>-</ButtonMoreLessQtd>
                <InformationQtd>1</InformationQtd>
                <ButtonMoreLessQtd>+</ButtonMoreLessQtd>
            </WrapperQtd>
            <PriceProduct>R${price}</PriceProduct>
        </WrapperItem>
    );
};