import { useState, useEffect } from 'react';
import { apiProducts } from '../../shared/services/Axios';
import { CardProducts } from './Card/CardProducts';


import { Wrapper} from './styled';

export interface IHomeProps {
    count?: number;
    photo: string;
    name: string;
    description: string;
    price: string;
    id: string;
}

export const Home = () => {
    const [products, setProducts] = useState<IHomeProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
       
        apiProducts.listProducts()
            .then((result) => {
                setProducts(result.data.products);
                console.log(products);     
            })
            .catch(error => console.log(error.message));
    }, []);


    return (
        <Wrapper>
            {products.map((product) =>
                <CardProducts
                    name={product.name}
                    photo={product.photo}
                    description={product.description}
                    price={product.price}
                    key={product.id}
                />
            )}           
        </Wrapper>
    );
};