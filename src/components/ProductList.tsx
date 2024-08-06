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

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<Set<string>>(
        new Set(["All"])
    );
    const [sortOption, setSortOption] = useState("Price: Low to High");
    const [showAllCategories, setShowAllCategories] = useState(false);
    const [showFilter, setShowFilter] = useState(true);

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

        // Filter products based on selected categories
        if (!selectedCategories.has("All")) {
            updatedProducts = updatedProducts.filter((product) =>
                selectedCategories.has(product.category)
            );
        }

        // Sort products based on selected sort option
        if (sortOption === "Price: Low to High") {
            updatedProducts = updatedProducts.sort((a, b) => a.price - b.price);
        } else if (sortOption === "Price: High to Low") {
            updatedProducts = updatedProducts.sort((a, b) => b.price - a.price);
        }

        setFilteredProducts(updatedProducts);
    }, [selectedCategories, sortOption, products]);

    const handleCategoryChange = (category: string) => {
        setSelectedCategories((prevSelectedCategories) => {
            const newSelectedCategories = new Set(prevSelectedCategories);
            if (category === "All") {
                newSelectedCategories.clear();
                newSelectedCategories.add("All");
            } else {
                if (newSelectedCategories.has(category)) {
                    newSelectedCategories.delete(category);
                } else {
                    newSelectedCategories.add(category);
                }
                newSelectedCategories.delete("All");
            }
            if (newSelectedCategories.size === 0) {
                newSelectedCategories.add("All");
            }
            return newSelectedCategories;
        });
    };

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOption(e.target.value);
    };

    const categories = [
        ...Array.from(new Set(products.map((product) => product.category))),
    ];

    const handleToggleCategories = () => {
        setShowAllCategories((prev) => !prev);
    };
    
    const handleFilter = () => {
        setShowFilter((prev) => !prev);
    };
    const selectAllCategories = () => {
        setSelectedCategories(new Set(categories));
    };

    const unselectAllCategories = () => {
        setSelectedCategories(new Set(["All"]));
    };

    return (
        <>
            <div className="flex justify-between items-center border-y-2 my-4">
                <div className="flex ">
                    <img
                        className="-rotate-90"
                        src="/assets/arrow-left.svg"
                        alt="Arrow Left"
                    />
                    <button className="text-gray-400 underline underline-offset-4" onClick={handleFilter}>
                        HIDE FILTER
                    </button>
                </div>
                <div className="flex flex-col my-4">
                    <select
                        className="w-full p-2 rounded-none"
                        value={sortOption}
                        onChange={handleSortChange}
                    >
                        <option selected>Recommendation</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                    </select>
                </div>
            </div>
            <div className="flex gap-y-5">
            {showFilter && (
                <aside className="w-2/6 p-4 h-min hidden lg:block bg-gray-100">
                    <div className="mb-4">
                        <label
                            className=" flex justify-between mb-2"
                            onClick={handleToggleCategories}
                        >
                            Category 
                            <img className="" src="/assets/arrow-left.svg"></img>
                        </label>

                        {showAllCategories && (
                            <div className="flex flex-col">
                                
                                <button
                                    className= "flex justify-start text-black "
                                    onClick={selectAllCategories}
                                >
                                    All
                                </button>
                                <button
                                    className="flex justify-start text-gray-500 underline"
                                    onClick={unselectAllCategories}
                                >
                                    Unselect All
                                </button>
                                
                                {categories.map((category) => (
                                    <label
                                        key={category}
                                        className="inline-flex items-center mt-2"
                                    >
                                        <input
                                            type="checkbox"
                                            className="form-checkbox"
                                            checked={selectedCategories.has(
                                                category
                                            )}
                                            onChange={() =>
                                                handleCategoryChange(category)
                                            }
                                        />
                                        <span className="ml-2">{category}</span>
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                </aside>
            )}
                <main className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product: Product) => (
                        <div
                            key={product.id}
                            className="bg-white border ring-1 shadow p-4 rounded-lg"
                        >
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-48 object-fill mb-4"
                            />
                            <div className="flex justify-between">
                                <div className="flex flex-col gap-2 h-14 overflow-y-hidden">
                                    <h3 className="text-lg font-bold text-wrap">
                                        {product.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        ${product.price}
                                    </p>
                                </div>
                                <img className="flex items-center" src="/assets/heart.svg" />
                            </div>
                        </div>
                    ))}
                </main>
            </div>
        </>
    );
};

export default ProductList;
