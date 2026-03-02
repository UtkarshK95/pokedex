"use client";
import { useEffect, useState } from "react";
import { fetchTypes } from "@/lib/api";
import type { NamedResource } from "@/types/pokemon";

interface Props {
  onSearchChange: (term: string) => void;
  onTypeChange: (type: string) => void;
}

const SearchForm = ({ onSearchChange, onTypeChange }: Props) => {
  const [types, setTypes] = useState<NamedResource[]>([]);

  useEffect(() => {
    fetchTypes().then(setTypes).catch(console.error);
  }, []);

  return (
    <div className="mb-6 flex flex-wrap gap-3">
      <div className="flex flex-col gap-1">
        <label
          htmlFor="search-name"
          className="text-xs font-medium text-slate-500"
        >
          Name
        </label>
        <input
          id="search-name"
          type="search"
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100"
          placeholder="Search Pokémon…"
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="filter-type"
          className="text-xs font-medium text-slate-500"
        >
          Type
        </label>
        <select
          id="filter-type"
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100"
          onChange={(e) => onTypeChange(e.target.value)}
        >
          <option value="">All types</option>
          {types.map((type) => (
            <option key={type.name} value={type.name}>
              {type.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchForm;
