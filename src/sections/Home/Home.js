import Hero from '../../components/Hero/Hero';
import List from '../../components/List/List';
import SearchForm from '../../components/SearchForm/SearchForm';


const Home = (props) => {
    return (
        <>
            <Hero />
            <SearchForm />
            <List />
        </>
    );
};

export default Home;