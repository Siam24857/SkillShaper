"use client";

import { Input, TextField } from "@heroui/react";
import Allcrouse from './Allcrouse';
import { useState, useEffect } from "react";

const Coursepage = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:3000/Data.json');
            const jsonData = await res.json();
            setData(jsonData);
            setFilteredData(jsonData);
        };
        fetchData();
    }, []);

    const handleText = (e) => {
        e.preventDefault();
        const filtered = data.filter(course => course.title.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredData(filtered);
    };

    return (
        <div className='space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-7 m-2 sm:m-3 md:m-3 lg:m-3 container mx-auto px-3 sm:px-4 md:px-5 lg:px-5'>
            <h4 className='text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold'>
                All courses
            </h4>
            
            <form onSubmit={handleText} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-2">
                <TextField className="w-full sm:max-w-64">
                    <Input 
                        className="border-2 p-3 rounded-2xl w-full" 
                        placeholder="Search courses" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </TextField>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition w-full sm:w-auto">
                    Search
                </button>
            </form>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7'>
                {
                    filteredData.map(G => <Allcrouse key={G.id} G={G}></Allcrouse>)
                }
            </div>
        </div>
    );
};

export default Coursepage;