import { useState, useEffect } from 'react';
import { apiProducts } from '../../shared/services/Axios';


import { Wrapper, Card} from './styled';

export interface IHomeProps {
    count: number;
    products: [];
}

export const Home = () => {
    const [products, setProducts] = useState<IHomeProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        const getData = async() => {
            try {
                const data = await apiProducts.listProducts();
                const json = await data.json();

            } catch(error) {  
                console.log(error.message);
            };
        }
        
        // apiProducts.listProducts()
        //     .then(({ data }) => {
        //         const json = data.json();
        //         setProducts(json);
        //         console.log(products);     
        //     })
        //     .catch(error => console.log(error.message));
    }, []);

    return (
        <Wrapper>
            <Card>

            </Card>
        </Wrapper>
    );
};