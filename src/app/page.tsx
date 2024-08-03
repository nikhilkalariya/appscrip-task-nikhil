import Image from "next/image";

import ProductList from "@/components/ProductList";

export default function Home() {
    return (
        <>
            <div>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl text-center  font-bold mb-4">
                        Discover Our Products
                    </h1>
                    <p className="flex justify-center w-3/5 my-6 text-center">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Dolorem, debitis nulla magnam est quae minus qui,
                        commodi reiciendis voluptatibus omnis consequatur ut
                        molestias quibusdam dolores harum. Libero quaerat nobis
                        commodi?
                    </p>
                </div>
                <ProductList/>
                
            </div>
        </>
    );
}
