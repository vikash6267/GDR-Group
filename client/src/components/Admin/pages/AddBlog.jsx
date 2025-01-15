import axios from "axios";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const AddBlog = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [formData, setFormData] = useState({
    title: "",
    image: null,
  });
  const [editorHtml, setEditorHtml] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleEditorChange = (value) => {
    setEditorHtml(value);
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
      formDataToSend.append("title", formData.title);
      formDataToSend.append("desc", editorHtml); // Send description from ReactQuill
      formDataToSend.append("image", formData.image);

      const response = await axios.post(
        `${BASE_URL}/blog/create`,
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
          title: "Blog created successfully!",
          text: "Have a nice day!",
          icon: "success",
        });
        setFormData({
          title: "",
          image: null,
        });
        setEditorHtml(""); // Reset editor content
      }
    } catch (error) {
      Swal.close();
      toast.error("Oops, something went wrong!");
    }
  };

  return (
    <>
      <h6 className="text-blue-600 text-center text-3xl border-b-2 border-blue-600 pb-2">
        Add Blogs
      </h6>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-6 mt-10 max-w-3xl mx-auto"
      >
        {/* Title */}
        <div>
          <label
            className="block text-gray-600 text-xl font-bold mb-2"
            htmlFor="title"
          >
            Title: <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-600 leading-tight focus:outline-none focus:shadow-outline text-xl"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block font-medium text-gray-700 text-xl mb-2"
          >
            Description: <span className="text-red-500">*</span>
          </label>
          <ReactQuill
            theme="snow"
            value={editorHtml}
            onChange={handleEditorChange}
            modules={{
              toolbar: [
                [{ header: "1" }, { header: "2" }, { font: [] }],
                [{ size: ["small", false, "large", "huge"] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [
                  { list: "ordered" },
                  { list: "bullet" },
                  { indent: "-1" },
                  { indent: "+1" },
                ],
                ["clean"],
              ],
            }}
            className="quill-editor h-[200px]"
          />
        </div>

        <br />
        <br />
        {/* Image */}
        <div>
          <label
            className="block text-gray-600 text-xl font-bold mb-2"
            htmlFor="image"
          >
            Image:
          </label>
          <input
            className="appearance-none border rounded w-full py-3 px-4 text-gray-600 leading-tight focus:outline-none focus:shadow-outline text-xl"
            id="image"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            className="px-6 py-3 bg-blue-600 text-white rounded-md text-xl hover:bg-blue-700 transition"
            type="submit"
          >
            Create Blog
          </button>
        </div>
      </form>
    </>
  );
};

export default AddBlog;
