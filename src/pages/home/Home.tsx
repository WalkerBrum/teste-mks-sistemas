import { useState, useEffect } from 'react';
import { apiProducts } from '../../shared/services/Axios';
import { CardProducts } from './Card/CardProducts';
import { Loading, Wrapper } from './styled';


export interface IHomeProps {
    photo: string;
    name: string;
    description: string;
    price: string;
    id: number;
}

export const Home = () => {
    const [products, setProducts] = useState<IHomeProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
       
        apiProducts.listProducts()
            .then((result) => {
                setIsLoading(false);
                setProducts(result.data.products);   
            })
            .catch(error => console.log(error.message));
    }, []);


    return (
        <Wrapper>
            {isLoading 
                ?
                <Loading>CARREGANDO</Loading>
                :
                products.map((product) =>
                    <CardProducts
                        name={product.name}
                        photo={product.photo}
                        description={product.description}
                        price={product.price.slice(0, 3)}
                        key={product.id}
                        id={product.id}
                    />)   
            }
           
        </Wrapper>
    );
};