"use client";
import { useEffect, useState } from "react";
import { fetchTypes } from "@/lib/api";

const SearchForm = ({ onFilter }: any) => {
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getTypes = async () => {
      const data = await fetchTypes();
      setTypes(data.results);
    };
    getTypes();
  }, []);

  const handleFilter = () => {
    onFilter(selectedType, search);
  };

  return (
    <div className="p-4 flex gap-2">
      <select
        className="border p-2 rounded"
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option value="">All Types</option>
        {types.map((type: any) => (
          <option key={type.name} value={type.name}>
            {type.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        className="border p-2 rounded"
        placeholder="Search Pokémon"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={handleFilter}
      >
        Search
      </button>
    </div>
  );
};

export default SearchForm;
