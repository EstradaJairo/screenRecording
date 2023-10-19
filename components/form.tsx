"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const FormComponent = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subscribe: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to another page and pass the data
    // window.location.href = ``;
    return router.push(
      `/submitted?name=${formData.name}&email=${formData.email}&subscribe=${formData.subscribe}`
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border rounded-lg max-w-md mx-auto"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block font-bold mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded text-black"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block font-bold mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded text-black"
          required
        />
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="subscribe"
            checked={formData.subscribe}
            onChange={handleInputChange}
            className="mr-2"
          />
          Subscribe to newsletter
        </label>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
