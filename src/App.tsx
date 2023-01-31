import { Home } from './pages';
import { Header, Footer } from './shared/components';
import { Wrapper } from './styled';


function App() {
    return (
        <Wrapper>
            <Header />
            <Home />
            <Footer />
        </Wrapper>
    );
}

export default App;
