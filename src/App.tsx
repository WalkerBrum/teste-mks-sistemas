import { Home } from './pages';
import { Header, Footer } from './shared/components';
import { Cart } from './shared/components/cart/Cart';
import { Wrapper } from './styled';


function App() {
    return (
        <Wrapper>
            <Header />
            <Home />
            <Footer />
            <Cart />
        </Wrapper>
    );
}

export default App;
