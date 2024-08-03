"use client";
import React, { useState, useEffect } from "react";

// Define the Product and Rating interfaces
export interface Rating {
    rate: number;
    count: number;
}

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

const ProductList2: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [sortOption, setSortOption] = useState("Price: Low to High");

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setFilteredProducts(data); // Initialize filtered products
            });
    }, []);

    useEffect(() => {
        let updatedProducts = products;

        // Filter products based on selected category
        if (selectedCategory !== "All") {
            updatedProducts = updatedProducts.filter(
                (product) => product.category === selectedCategory
            );
        }

        // Sort products based on selected sort option
        if (sortOption === "Price: Low to High") {
            updatedProducts = updatedProducts.sort((a, b) => a.price - b.price);
        } else if (sortOption === "Price: High to Low") {
            updatedProducts = updatedProducts.sort((a, b) => b.price - a.price);
        }

        setFilteredProducts(updatedProducts);
    }, [selectedCategory, sortOption, products]);

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value);
    };

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOption(e.target.value);
    };

    return (
        <> 
          <div className="flex justify-between items-center">
            <div>
              <img src="/public/assets/arrow-left.svg"></img>
              <button className="text-gray-400 underline underline-offset-4">HIDE FILTER</button>
            </div>
            <div className="flex flex-col my-4">
                <select
                    className="w-full p-2"
                    value={sortOption}
                    onChange={handleSortChange}
                >
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                </select>
            </div>
          </div> 
            <div className="flex gap-y-5">
                <aside className="w-1/4 p-4 bg-gray-100">
                    <div className="mb-4">
                        <label className="block mb-2">Category</label>
                        <select
                            className="w-full p-2 border rounded"
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                        >
                            <option>All</option>
                            {[
                                ...Array.from(
                                    new Set(
                                        products.map(
                                            (product) => product.category
                                        )
                                    )
                                ),
                            ].map((category) => (
                                <option key={category}> {category}</option>
                            ))}
                        </select>
                    </div>
                </aside>
                <main className="w-3/4 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product: Product) => (
                        <div
                            key={product.id}
                            className="bg-white shadow p-4 rounded-lg"
                        >
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-48 object-fill mb-4"
                            />
                            <h3 className="text-xl font-bold">
                                {product.title}
                            </h3>
                            <p className="text-gray-600">${product.price}</p>
                        </div>
                    ))}
                </main>
            </div>
        </>
    );
};

export default ProductList2;
