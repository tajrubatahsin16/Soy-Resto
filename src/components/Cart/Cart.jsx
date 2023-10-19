import { AiFillDelete } from 'react-icons/ai';

const Cart = ({ cart, handleRemoveFromCart }) => {
    const { id, img, name, price } = cart;
    return (
        <>
            <div>
                <div className="flex items-center p-2 h-28 m-2 rounded-lg w-80 bg-base-200 shadow-xl">
                    <figure><img className="h-20 rounded-lg" src={img} alt="Foods" width={"70px"} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <h5 className="font-bold text-lg text-red-400">${price}</h5>
                    </div>
                    <button onClick={() => handleRemoveFromCart(id)} className="bg-red-400 font-bold w-10 flex justify-center" style={{ borderRadius: "50px" }}><AiFillDelete style={{ fontSize: "1.5rem" }}></AiFillDelete></button>
                </div>

            </div>
        </>
    );
};

export default Cart;