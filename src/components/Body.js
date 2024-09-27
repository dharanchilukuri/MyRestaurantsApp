import React from "react";
import RestaurantCard from "./RestaurantCard";
import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useStore from "../store/store";

const fetchRestaurants = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    return json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
};

const Body = () => {
    const { data: listOfRestaurants = [], isLoading, isError } = useQuery({
        queryKey: ['restaurants'],
        queryFn: fetchRestaurants,
    });
    const { searchText, setSearchText } = useStore();

    if (isLoading) return <Shimmer />;
    if (isError) return <p>Error fetching data</p>;

    const filteredRestaurant = listOfRestaurants.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    const clearSearch = () => {
        setSearchText(''); // Clear search text
    };

    return (
        <div className="body">
            <div className="flex justify-center m-4 p-4 relative"> {/* Relative for positioning */}
                <input
                    type="text"
                    data-testid="searchInput"
                    className="border border-solid border-black p-2 w-80" // Adjust width for better layout
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search restaurnt..."
                />
            </div>
            <div className="flex flex-wrap justify-center">
                {filteredRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant?.info.id} resData={restaurant?.info} />
                ))}
            </div>
        </div>
    );
};

export default Body;
