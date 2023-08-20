// src/components/JournalPage.js
import React, { useState, useEffect } from "react";

const Journal = () => {
    const [journalEntries, setJournalEntries] = useState([]);
    const [newEntry, setNewEntry] = useState("");
    const [expandedEntry, setExpandedEntry] = useState(null);

    useEffect(() => {
        const storedEntries = JSON.parse(
            localStorage.getItem("journalEntries") || "[]"
        );
        setJournalEntries(storedEntries);
    }, []);

    useEffect(() => {
        localStorage.setItem("journalEntries", JSON.stringify(journalEntries));
    }, [journalEntries]);

    const handleAddEntry = () => {
        if (newEntry.trim() !== "") {
            setJournalEntries([...journalEntries, newEntry]);
            setNewEntry("");
        }
    };

    const handleExpandEntry = (index) => {
        if (expandedEntry === index) {
            setExpandedEntry(null);
        } else {
            setExpandedEntry(index);
        }
    };

    const handleDeleteEntry = (index) => {
        const updatedEntries = journalEntries.filter((_, i) => i !== index);
        setJournalEntries(updatedEntries);
        setExpandedEntry(null);
    };

    return (
        <div className="max-w-4xl mx-auto mt-8 p-4">
            <h2 className="text-3xl font-bold mb-4">Capture your Thoughts</h2>
            <textarea
                className="w-full p-2 border border-gray-300 rounded-md mb-4"
                rows="4"
                value={newEntry}
                onChange={(e) => setNewEntry(e.target.value)}
                placeholder="Write your journal entry here..."
            />
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                onClick={handleAddEntry}
            >
                Add Entry
            </button>

            <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Journal Entries:</h3>
                {journalEntries.map((entry, index) => (
                    <div
                        key={index}
                        className={`border rounded-md p-2 mb-2 ${
                            expandedEntry === index
                                ? "h-auto"
                                : "h-10rem overflow-hidden"
                        }`}
                    >
                        <p>
                            {expandedEntry === index
                                ? entry
                                : entry.slice(0, 100)}
                        </p>
                        {entry.length > 100 && (
                            <button
                                className="text-blue-600 hover:underline mt-2"
                                onClick={() => handleExpandEntry(index)}
                            >
                                {expandedEntry === index
                                    ? "Close"
                                    : "Read More"}
                            </button>
                        )}
                        <button
                            className="text-red-600 hover:underline mt-2 ml-2"
                            onClick={() => handleDeleteEntry(index)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Journal;
