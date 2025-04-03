import React, { useEffect, useState } from "react";
import TopBar from "../Components/TopBar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../Constant";

function BlogDetail() {
  const { blogdetail_id } = useParams();
  const [detail, setdetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogDetails();
  }, [blogdetail_id]);

  const fetchBlogDetails = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/blog-detail/details/${blogdetail_id}`
      );
      if (response.status === 200) {
        setdetail(response.data.data);
        console.log("Fetched blog details:", response.data);
      }
    } catch (error) {
      console.error("Error fetching blog details:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <TopBar />
      <Header pageTitle="Blog Detail" breadcrumb1="Blog Detail" />
      {/* <div className="container mt-4">
        {loading ? (
          <p>Loading...</p>
        ) : detail ? (
          <div>
            <h2>{detail.title}</h2>
            <img src={detail.image} alt={detail.title} className="img-fluid" />
            <p>{detail.description}</p>
            <h4>Meta Information:</h4>
            <p>
              <strong>Meta Title:</strong> {detail.meta_title}
            </p>
            <p>
              <strong>Meta Description:</strong> {detail.meta_description}
            </p>
            <p>
              <strong>Meta Keywords:</strong> {detail.meta_keywords}
            </p>
          </div>
        ) : (
          <p>Detail not found.</p>
        )}
      </div> */}
      <div className="container mt-5">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : detail ? (
          <div className="card shadow p-4">
            <h2 className="text-center">{detail.title}</h2>
            <img
              src={detail.image}
              alt={detail.title}
              className="img-fluid rounded mb-4"
              style={{ maxHeight: "200px", objectFit: "cover" }}
            />
            <p>{detail.description}</p>
            <div className="bg-light p-3 rounded">
              <h5>Meta Information:</h5>
              <p>
                <strong>Meta Title:</strong> {detail.meta_title}
              </p>
              <p>
                <strong>Meta Description:</strong> {detail.meta_description}
              </p>
              <p>
                <strong>Meta Keywords:</strong> {detail.meta_keywords}
              </p>
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
