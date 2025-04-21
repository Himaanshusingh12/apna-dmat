import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BACKEND_URL } from "../Constant";
import TopBar from "../Components/TopBar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Helmet } from "react-helmet";

function BlogList() {
  const { slug } = useParams();
  const [list, setList] = useState([]);
  const [seoData, setSeoData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBloglist();
    fetchCategorySeo();
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

  const fetchCategorySeo = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/blog-category/seo/${slug}`
      );
      if (response.status === 200) {
        setSeoData(response.data.data);
        console.log("The fetched seo details are:", response.data);
      }
    } catch (error) {
      console.error("Error fetching SEO data", error);
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
      {seoData && (
        <Helmet>
          <title>{seoData.meta_title}</title>
          <meta name="description" content={seoData.meta_description} />
          <meta name="keywords" content={seoData.meta_keywords} />
        </Helmet>
      )}
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
