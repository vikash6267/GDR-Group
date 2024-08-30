import React, { useEffect, useState } from "react";
import Navbar from "../components/common/NavbarMain";
import SubNavbar from "../components/common/SubNavbar";
import Footer from "../components/common/Footer";
import { Link } from "react-router-dom";
import MainCommon from "../components/common/MainCommon";
import axios from "axios";



function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const [blog, setBlog] = useState([]);

  const getAllBlogs = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/blog/getAll`);

      if (response?.data?.success) {
        setBlog(response.data.blogs);
      }
      console.log(response.data.blogs);
    } catch (error) {
      console.log("Something went wrong");
    }
  };
  useEffect(() => {
    getAllBlogs();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <div>
      <SubNavbar />
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">List of Articles</h1>
        <div className="grid gap-5 md:grid-cols-2  lg:grid-cols-3 ">
          {blog.map((article, index) => (
            <Link
              key={index}
              to={article._id}
              className="max-w-lg rounded overflow-hidden shadow-lg bg-white mb-4"
            >
              <img
                className="w-full"
                src={article.image}
                alt="Article thumbnail"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{article.title}</div>
                {/* <p className="text-gray-700 text-base">{article.desc}</p> */}
              </div>
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  {formatDate(article.createdAt)}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <MainCommon />
      <Footer />
    </div>
  );
}

export default Blog;
