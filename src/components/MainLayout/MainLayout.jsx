import Home from "../Home/Home";
import NavigationBar from "../Navigation/NavigationBar";


const MainLayout = () => {
    return (
        <div>
           <NavigationBar></NavigationBar>
           <Home></Home>
        </div>
    );
};

export default MainLayout;