export const ReservationSidebar = () => {
    return (
        <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
            <h2 className="mb-5 text-2xl">$200 per night</h2>

            <div className="mb-6 p-3 border border-gray-400 rounded-xl">
                <label htmlFor="" className="mb-2 block font-bold text-xs">Guests</label>
                <select name="" id="" className="w-full -ml-1 text-xs border-none outline-none">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                </select>
            </div>

            <div className="w-full mb-6 py-6 text-center text-white bg-airbnb rounded-xl hover:bg-airbnbDark">
                Book
            </div>

            <div className="mb-4 flex justify-between items-center">
                <p>$200 * 4 nights</p>

                <p>$800</p>
            </div>

            <div className="mb-4 flex justify-between items-center">
                <p>Djangobnb fee</p>

                <p>$40</p>
            </div>

            <hr />

            <div className="mt-4 flex justify-between items-center font-bold">
                <p>Total</p>

                <p>$840</p>
            </div>
        </aside>
    );
};
