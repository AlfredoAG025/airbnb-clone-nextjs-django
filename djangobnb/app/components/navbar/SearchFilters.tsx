export const SearchFilters = () => {
    return (
        <div className="h-12 lg:h-16 flex flex-row items-center justify-between border rounded-full">
            <div className="hidden lg:block">
                <div className="flex flex-row items-center justify-between">
                    <div className="cursor-pointer w-[250px] h-16 px-8 flex flex-col rounded-full justify-center hover:bg-gray-100">
                        <p className="text-xs font-semibold">Where</p>
                        <p className="text-sm font-semibold">Wanted location</p>
                    </div>

                    <div className="cursor-pointer h-12 lg:h-16 px-8 flex flex-col rounded-full justify-center hover:bg-gray-100">
                        <p className="text-xs font-semibold">Check in</p>
                        <p className="text-sm font-semibold">Add dates</p>
                    </div>

                    <div className="cursor-pointer h-12 lg:h-16 px-8 flex flex-col rounded-full justify-center hover:bg-gray-100">
                        <p className="text-xs font-semibold">Check out</p>
                        <p className="text-sm font-semibold">Add dates</p>
                    </div>

                    <div className="cursor-pointer h-12 lg:h-16 px-8 flex flex-col rounded-full justify-center hover:bg-gray-100">
                        <p className="text-xs font-semibold">Who</p>
                        <p className="text-sm font-semibold">Add guests</p>
                    </div>
                </div>
            </div>

            <div className="p-2">
                <div className="cursor-pointer p-2 lg:p-4 bg-airbnb rounded-full text-white hover:bg-airbnbDark transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                </div>
            </div>
        </div>
    );
}
