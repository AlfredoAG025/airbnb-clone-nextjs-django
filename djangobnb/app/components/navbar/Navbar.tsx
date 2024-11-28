import Link from "next/link";
import { SearchFilters } from "./SearchFilters";
import { UserNav } from "./UserNav";
import { AddPropertyButton } from "./AddPropertyButton";

export const Navbar = () => {
    return (
        <nav className="w-full fixed top-0 left-0 py-6 border-b bg-white z-10">
            <div className="max-w-[1500px] mx-auto px-6">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-airbnb text-3xl font-bold hidden lg:block">
                        DjNextbnb
                    </Link>

                    <div className="flex gap-x-6">
                        <SearchFilters />
                    </div>

                    <div className="flex items-center gap-x-6">
                        <AddPropertyButton />
                        <UserNav />
                    </div>
                </div>
            </div>
        </nav>
    );
}
