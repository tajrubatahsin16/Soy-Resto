import { CiStar, CiFries, CiPizza } from "react-icons/ci";
import { TbCup } from "react-icons/tb";
import { GiHamburger } from "react-icons/gi";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FilteredItems from "./FilteredItems";
import Cart from "../Cart/Cart";

const MainItems = () => {
    const [items, setItems] = useState([]);
    const [tabindex, setTabIndex] = useState(0);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('Foods.json')
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })
    }, [])
    const handleAddToCart = (food) => {
        const newCart = [...cart, food];
        setCart(newCart);
    }
    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(food => food.id !== id);
        setCart(remaining);
    }
    let total = 0;
    let totalTax = 0;
    for (const food of cart) {
        total = total + food.price;
        totalTax = totalTax + 1;
    }
    let final = total + totalTax;
    const popular = items.filter(food => food.popularity === 'most');
    const snack = items.filter(food => food.category === 'snack');
    const beverage = items.filter(food => food.category === 'beverage');
    const coffee = items.filter(food => food.category === 'coffee');
    const italian = items.filter(food => food.category === 'italian');
    const burger = items.filter(food => food.category === 'burger');
    return (
        <div className="flex">
            <Tabs className="p-3" defaultIndex={tabindex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="flex justify-center gap-5">
                    <Tab className="flex p-2"><CiStar style={{ fontSize: "1.5rem" }}></CiStar>Most Ordered</Tab>
                    <Tab className="flex p-2"><CiFries style={{ fontSize: "1.5rem" }}></CiFries>Snack</Tab>
                    <Tab className="flex p-2"><TbCup style={{ fontSize: "1.5rem" }}></TbCup>Beverage</Tab>
                    <Tab className="flex p-2"><TbCup style={{ fontSize: "1.5rem" }}></TbCup>Coffee</Tab>
                    <Tab className="flex p-2"><CiPizza style={{ fontSize: "1.5rem" }}></CiPizza>Italian</Tab>
                    <Tab className="flex p-2"><GiHamburger style={{ fontSize: "1.5rem" }}></GiHamburger>Burger</Tab>
                </TabList>
                <TabPanel>
                    <div className="grid grid-cols-4 gap-4 m-2">
                        {
                            popular.map(item => <FilteredItems key={item.id} item={item} handleAddToCart={handleAddToCart}></FilteredItems>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-4 gap-4 m-2">
                        {
                            snack.map(item => <FilteredItems key={item.id} item={item} handleAddToCart={handleAddToCart}></FilteredItems>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-4 gap-4 m-2">
                        {
                            beverage.map(item => <FilteredItems key={item.id} item={item} handleAddToCart={handleAddToCart}></FilteredItems>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-4 gap-4 m-2">
                        {
                            coffee.map(item => <FilteredItems key={item.id} item={item} handleAddToCart={handleAddToCart}></FilteredItems>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-4 gap-4 m-2">
                        {
                            italian.map(item => <FilteredItems key={item.id} item={item} handleAddToCart={handleAddToCart}></FilteredItems>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-4 gap-4 m-2">
                        {
                            burger.map(item => <FilteredItems key={item.id} item={item} handleAddToCart={handleAddToCart}></FilteredItems>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
            <div className="p-3 w-96 bg-white">
                <div>
                    <h1 className="text-2xl font-semibold">Current Order</h1>
                    {
                        cart?.map(cart => <Cart key={cart.id} cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>)
                    }

                </div>
                <div className="divider divider-vertical"></div>
                <div>
                    <div className="flex justify-between">
                        <h6 className="text-slate-400">Subtotal</h6>
                        <h4>${total.toFixed(2)}</h4>
                    </div>
                    <div className="flex justify-between">
                        <h6 className="text-slate-400">Tax</h6>
                        <h4>${totalTax.toFixed(2)}</h4>
                    </div>
                    <div className="flex justify-between">
                        <h6 className="text-slate-500">Total</h6>
                        <h4 className="text-lg font-medium">${final.toFixed(2)}</h4>
                    </div>
                    <button className="btn bg-red-400 text-white font-medium w-full">Print Bills</button>
                </div>
            </div>
        </div>
    );
};

export default MainItems;