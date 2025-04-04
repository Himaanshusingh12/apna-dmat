import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BACKEND_URL } from "../Constant";
import TopBar from "../Components/TopBar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function BlogList() {
  const { blog_id } = useParams();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBloglist();
  }, [blog_id]);

  const fetchBloglist = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/blog-category/category/${blog_id}`
      );
      if (response.status === 200) {
        setList(response.data.data);
        console.log("The fetched Blog list:", response.data);
      }
    } catch (error) {
      console.error("Error fetching blog list:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <TopBar />
      <Header pageTitle="Blog List" breadcrumb1="Blog List" />
      <div className="container mt-4">
        <h2 className="mb-4 text-center">Latest Blogs</h2>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : list.length > 0 ? (
          <div className="row">
            {list.map((blog) => (
              <div key={blog.blogdetail_id} className="col-md-4 mb-4">
                <div className="card shadow-sm">
                  <img
                    src={blog.image}
                    className="card-img-top"
                    alt={blog.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text">
                      {blog.description.length > 100
                        ? blog.description.slice(0, 100) + "..."
                        : blog.description}
                    </p>
                    <Link
                      to={`/blog-detail/${blog.blogdetail_id}`}
                      className="btn btn-primary"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">No blogs available.</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default BlogList;
