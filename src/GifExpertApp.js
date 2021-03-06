import React, {useState} from "react";
import {AddCategory} from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = ({defaultCategories = []}) => {
    const [categories, setCategories] = useState(defaultCategories);
    return (
        <>
            <div className="animate__animated animate__fadeIn">Expert App</div>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}/>
                    ))
                }
            </ol>
        </>
    );
};

export default GifExpertApp;