import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BACKEND_URL } from "../Constant";
import TopBar from "../Components/TopBar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function BlogList() {
  const { slug } = useParams();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBloglist();
  }, [slug]);

  const fetchBloglist = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/blog-category/category/${slug}`
      );
      if (response.status === 200) {
        // console.log("Response Data: ", response.data);
        setList(response.data.data);
        // console.log("The fetched Blog list:", response.data);
      }
    } catch (error) {
      // console.error("Error fetching blog list:", error);
    } finally {
      setLoading(false);
    }
  };
  // console.log("slug", slug);
  const stripHtml = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };
  return (
    <>
      <TopBar />
      <Header pageTitle="Blogs" breadcrumb1="Blog List" />
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
                      {stripHtml(blog.description).length > 100
                        ? stripHtml(blog.description).slice(0, 100) + "..."
                        : stripHtml(blog.description)}
                    </p>
                    <Link
                      // to={`/blog-detail/${blog.slug}`}
                      to={`/blog/${slug}/${blog.slug}`}
                      // to={`/${slug}/${blog.slug}`}
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
