import { ReservationSidebar } from "@/app/components/properties/ReservationSidebar";
import Image from "next/image";

const PropertyDetailPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image
                    fill
                    src="/house-beach.jpg"
                    className="object-cover size-full"
                    alt="Beach house"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">Property name</h1>

                    <span className="mb-6 block text-lg text-gray-600">
                        4 guests - 2 bedrooms - 1 bathroom
                    </span>

                    <hr />

                    <div className="py-6 flex items-center gap-x-4">
                        <Image
                            src="/profile_pic_1.jpg"
                            width={50}
                            height={50}
                            className="rounded-full"
                            alt="The user name"
                        />

                        <p><strong>John Doe</strong> is your host</p>
                    </div>

                    <hr />

                    <p className="mt-6 text-lg">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. In dolore, soluta sint laborum molestias eveniet illo eum officia magnam deleniti nam culpa error laudantium ea eos! Ullam culpa corporis tempora!
                    </p>
                </div>

                <ReservationSidebar />
            </div>
        </main>
    );
};

export default PropertyDetailPage;