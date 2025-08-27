import React, { useState } from "react";

function WeatherSearch({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city"
        className="border rounded p-2 flex-1"
      />
      <button type="submit" className="bg-blue-500 text-white rounded px-4">
        Search
      </button>
    </form>
  );
}

export default WeatherSearch;
