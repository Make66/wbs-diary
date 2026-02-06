import React from 'react';
import { useState } from "react";

const defaultFormData = {
  title: "",
  date: "",
  image: "",
  content: "",
};

const EntryForm = ({ entries, setEntries }) => {
  const [formData, setFormData] = useState(defaultFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.title ||
      !formData.date ||
      !formData.image ||
      !formData.content
    ) {
      alert("Alle Felder werden benötigt!");
      return;
    }
    setFormData(defaultFormData);
    setEntries(entries.push(formData));
  };

  return (
    <>
      <form
        method="dialog"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: " .5rem",
        }}
        onSubmit={handleSubmit}
      >
        <label>
          Title
          <input
            name="title"
            type="text"
            onChange={handleChange}
            value={formData.title}
          />
        </label>
        <label>
          Date
          <input
            name="date"
            type="text"
            onChange={handleChange}
            value={formData.date}
          />
        </label>
        <label>
          Image URL
          <input
            name="image"
            type="text"
            onChange={handleChange}
            value={formData.image}
          />
        </label>
        <label>
          Content
          <textarea
            name="content"
            onChange={handleChange}
            value={formData.content}
          />
        </label>
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default EntryForm;