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
        const filtered = data.filter(course => course.title.toLowerCase().includes(searchTerm.toLowerCase())  );
        setFilteredData(filtered);
        
    };

    return (
        <div className='space-y-7 m-3 container mx-auto'>
            <h4 className='text-3xl font-bold'>All courses</h4>
            <form onSubmit={handleText} className="flex items-center gap-2">
                <TextField className="w-full max-w-64" name="text" type="text">
                    <Input 
                        className="border-2 p-3 rounded-2xl" 
                        placeholder="Search courses" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </TextField>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
                    Search
                </button>
            </form>
            <div className='grid grid-cols-3 gap-7'>
                {
                    filteredData.map(G => <Allcrouse key={G.id} G={G}></Allcrouse>)
                }
            </div>
        </div>
    );
};

export default Coursepage;