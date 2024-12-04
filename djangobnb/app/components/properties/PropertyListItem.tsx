import Image from "next/image";

export const PropertyListItem = () => {
    return (
        <div className="cursor-pointer">
            <div className="relative overflow-hidden aspect-square rounded-xl">
                <Image
                    fill
                    src='/house-beach.jpg'
                    sizes="(max-width: 768px) 768px, (max-width: 1200px): 768px, 768px"
                    className="hover:scale-110 object-cover transition size-full"
                    alt="Beach house"
                    priority={true}
                />
            </div>

            <div className="mt-2">
                <p className="text-lg font-bold">Property Name</p>
            </div>

            <div className="mt-2">
                <p className="text-sm text-gray-500">
                    <strong>$200</strong> per night
                </p>
            </div>
        </div>
    );
}
