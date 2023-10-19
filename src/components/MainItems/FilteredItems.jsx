


const FilteredItems = ({ item, handleAddToCart }) => {
    const { img, name, details, price } = item;
    return (
        <div className="card card-compact w-52 bg-base-100 shadow-xl">
            <figure className="h-36"><img src={img} alt="Foods" width={"210px"} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <h5 className="font-bold text-lg text-red-400">${price}<span className="text-slate-400 font-normal">/person</span></h5>
                <div className="card-actions">
                    <button onClick={() => handleAddToCart(item)} className="btn bg-red-400 font-bold">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FilteredItems;