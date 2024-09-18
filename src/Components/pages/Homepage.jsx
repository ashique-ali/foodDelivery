import Navbar from "../Navbar/navbar";
import Menu from "./Collection/collection";
import CollectionList from "./CollectionList/collectionList";
import Footer from "./Footer/footer";
import Home from "./home/home";
import Mobileapp from "./mobileApp/mobileApp";

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <Menu />
            <CollectionList />
            <Mobileapp />
            <Footer />
        </div>
    )
}
export default HomePage;