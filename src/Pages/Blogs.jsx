import React, { useEffect, useState } from "react";
import TopBar from "../Components/TopBar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from "axios";
import { toast } from "react-toastify";
import { BACKEND_URL } from "../Constant";
import { NavLink } from "react-router-dom";

function Blogs() {
  const [blog, Setblog] = useState([]);

  useEffect(() => {
    fetchActiveblog();
  }, []);

  const fetchActiveblog = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/blog-category/get-active`
      );
      if (response.status === 200) {
        Setblog(response.data.data);
        // console.log("The fetched Active blog are", response.data);
      }
    } catch (error) {
      // console.error(
      //   "Error fetching Blog category:",
      //   error.response?.data || error.message
      // );
      toast.error(
        `Error fetching Blog category: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };
  return (
    <>
      <TopBar />
      <Header pageTitle="Blogs" breadcrumb1="Blogs" />
      <div className="container py-5">
        <div className="row">
          {blog.map((item) => (
            <div className="col-md-4 mb-4" key={item.blog_id}>
              <NavLink
                key={blog.id}
                // to={`/blog/${blog.slug}`}
                to={`/blog/${item.slug}`}
                className="text-decoration-none text-dark"
              >
                <div className="card h-100 shadow">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.category}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{item.category}</h5>
                  </div>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blogs;
