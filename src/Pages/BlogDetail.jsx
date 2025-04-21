import React, { useEffect, useState } from "react";
import TopBar from "../Components/TopBar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../Constant";
import { Helmet } from "react-helmet";

function BlogDetail() {
  // const { slug } = useParams();
  const { categorySlug, slug } = useParams();
  const [detail, setdetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogDetails();
    fetchActiveCategories();
    fetchLatestBlogs();
    // }, [slug]);
  }, [categorySlug, slug]);

  const fetchBlogDetails = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/blog-detail/details/${slug}`
      );
      if (response.status === 200) {
        setdetail(response.data.data);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  // section for fetch active blog categories
  const [categories, setCategories] = useState([]);

  const fetchActiveCategories = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/blog-category/get-active`
      );
      if (response.status === 200) {
        setCategories(response.data.data);
      }
    } catch (error) {
      toast.error(
        `Error fetching Blog categories: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };

  // Section for fetching 5 latest blogs
  const [latestBlogs, setLatestBlogs] = useState([]);

  const fetchLatestBlogs = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/blog-detail/resent-blogs`
      );
      if (response.status === 200) {
        setLatestBlogs(response.data.data);
      }
    } catch (error) {
      // handle error if necessary
    }
  };
  return (
    <>
      {detail && (
        <Helmet>
          <title>{detail?.meta_title || "Blog Detailss"}</title>
          <meta name="description" content={detail?.meta_description || ""} />
          <meta name="keywords" content={detail?.meta_keywords || ""} />
        </Helmet>
      )}
      <TopBar />
      <Header pageTitle="Blog Detail" breadcrumb1="Blog Detail" />

      <div className="container mt-5">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : detail ? (
          <div className="row">
            {/* Blog Detail - 8 Columns */}
            <div className="col-md-9">
              <div className="card shadow p-4 mb-4">
                <h2 className="text-center">{detail.title}</h2>
                <img
                  src={detail.image}
                  alt={detail.title}
                  className="img-fluid rounded mb-4"
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                />
                <div dangerouslySetInnerHTML={{ __html: detail.description }} />
                <div className="bg-light p-3 rounded mt-4">
                  <h5>Meta Information:</h5>
                  <p>
                    <strong>Meta Title:</strong> {detail.meta_title}
                  </p>
                  <p>
                    <strong>Meta Description:</strong>{" "}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: detail.meta_description,
                      }}
                    ></span>
                  </p>
                  <p>
                    <strong>Meta Keywords:</strong> {detail.meta_keywords}
                  </p>
                </div>
              </div>
            </div>

            {/* Categories Sidebar - 4 Columns */}
            <div className="col-md-3">
              <div className="card shadow-sm p-3">
                <h5 className="mb-3">Categories</h5>
                <ul className="list-unstyled">
                  {categories.map((item) => (
                    <li key={item.blog_id}>
                      <a
                        href={`/blog/${item.slug}`}
                        className="text-decoration-none text-dark"
                      >
                        {item.category}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* latest blog section */}
              <div className="card shadow-sm p-3 mt-4">
                <h5 className="mb-3">Latest Blogs</h5>
                <ul className="list-unstyled">
                  {latestBlogs.map((blog) => (
                    <li key={blog.blogdetail_id}>
                      <Link
                        // to={`/blog/${slug}/${blog.slug}`}
                        to={`/blog/${categorySlug}/${blog.slug}`}
                        className="text-decoration-none text-dark"
                      >
                        <div className="card mb-2">
                          <img
                            src={blog.image}
                            className="card-img-top"
                            alt={blog.title}
                            style={{ height: "100px", objectFit: "cover" }}
                          />
                          <div className="card-body p-2">
                            <h6 className="card-title">{blog.title}</h6>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center">Blog not found.</p>
        )}
      </div>

      <Footer />
    </>
  );
}

export default BlogDetail;
