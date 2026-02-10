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

  const handleSubmit = (e) => {
    if (
      !formData.title ||
      !formData.date ||
      !formData.image ||
      !formData.content
    ) {
      e.preventDefault();
      alert("Alle Felder werden benötigt!");
      return;
    }
    setEntries([...entries, formData]);
    setFormData(defaultFormData);
  };

  return (
    <form method="dialog" className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <label className="form-control w-full text-left">
        <span className="label-text">Title</span>

        <input
          name="title"
          type="text"
          className="input input-bordered w-full"
          placeholder="Entry title"
          onChange={handleChange}
          value={formData.title}
        />
      </label>
      <label className="form-control w-full text-left">
        <span className="label-text">Date</span>

        <input
          name="date"
          type="date"
          className="input input-bordered w-full"
          onChange={handleChange}
          value={formData.date}
        />
      </label>
      <label className="form-control w-full text-left">
        <span className="label-text">Image URL</span>

        <input
          name="image"
          type="url"
          className="input input-bordered w-full"
          placeholder="https://example.com/image.jpg"
          onChange={handleChange}
          value={formData.image}
        />
      </label>
      <label className="form-control w-full text-left">
        <span className="label-text">Content</span>

        <textarea
          name="content"
          className="textarea textarea-bordered w-full"
          rows={4}
          placeholder="Write your entry..."
          onChange={handleChange}
          value={formData.content}
        />
      </label>
      <button type="submit" className="btn btn-primary w-full">Send</button>
    </form>
  );
};

export default EntryForm;