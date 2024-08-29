import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
const Modal = ({ isOpen, toggleModal, onSubmit }) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject:null,
    message: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      Swal.fire({
        title: "Loading",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        showConfirmButton: false,
        html: '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>',
      });

      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("subject", formData.subject);
      formDataToSend.append("message", formData.message);

      const response = await axios.post(
        `${BASE_URL}/contact/create`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      Swal.close();

      if (response?.data?.success) {
        Swal.fire({
          title: `Contact form submited successfully! `,
          text: `Have a nice day!`,
          icon: "success",
        });
        toggleModal()
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      Swal.close();
      // toast.error("Oops, something went wrong!");
    }
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-md p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Enquiry Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"

              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Phone"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
                 value={formData.message}
                 onChange={handleChange}
              name="message"

              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={toggleModal}
              className="px-4 py-2 bg-gray-300 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#631f28] text-white rounded"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
