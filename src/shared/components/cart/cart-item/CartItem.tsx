import { useDispatch } from 'react-redux';
import { lessQnty, moreQnty, cartValueTotal } from '../../../context/store';
import { ButtonMoreLessQtd, ImageProduct, InformationQtd, PriceProduct, SpanQtd, TitleProduct, WrapperItem, WrapperQtd } from './styled';


interface ICartItemProps {
    name: string;
    photo: string;
    price: number;
    id: number;
    qnty: number;
}

export const CartItem: React.FC<ICartItemProps> = (props) => {
    const { name, photo, price, qnty, id } = props;

    const dispatch = useDispatch();

    const lessQntyProduct = () => {
        dispatch(lessQnty(id));
        dispatch(cartValueTotal());
    };

    const moreQntyProduct = () => {
        console.log(id);
        dispatch(moreQnty(id));
        dispatch(cartValueTotal());
    };
    
    return (
        <WrapperItem>
            <ImageProduct src={photo}/>
            <TitleProduct>{name}</TitleProduct>
            <SpanQtd>Qtd:</SpanQtd>
            <WrapperQtd>
                <ButtonMoreLessQtd onClick={lessQntyProduct}>-</ButtonMoreLessQtd>
                <InformationQtd>{qnty}</InformationQtd>
                <ButtonMoreLessQtd onClick={moreQntyProduct}>+</ButtonMoreLessQtd>
            </WrapperQtd>
            <PriceProduct>R${price}</PriceProduct>
        </WrapperItem>
    );
};