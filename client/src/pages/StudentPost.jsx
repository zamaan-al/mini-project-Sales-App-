import React, { useState } from "react";
import axiosInstance from "../config/axios.config";
import toast from "react-hot-toast";

const StudentPost = () => {
  const [formData, setFormData] = useState({
    studentId: "",
    name: "",
    email: "",
    course: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    // prepare form data for file upload
    const data = new FormData();
    data.append("studentId", formData.studentId);
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("course", formData.course);
    data.append("image", formData.image);

    try {
      const res = await axiosInstance.post("/students", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(res);
      toast.success("Student posted successfully!");
      setFormData({
        studentId: "",
        name: "",
        email: "",
        course: "",
        image: null,
      });
    } catch (err) {
      toast.error(err.response?.data?.message || "Error posting student");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex  justify-center  items-center">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-6">
          Post New Student
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              value={formData.studentId}
              onChange={handleChange}
              className="w-full  border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="studentId"
              id="studentId" 
              placeholder="Enter Student ID"
              required
            />
          </div>

          <div>
            <input
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="name"
              id="name"
              placeholder="Enter Student Name"
              required
            />
          </div>

          <div>
            <input
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              name="email"
              id="email"
              placeholder="Enter Student Email"
              required
            />
          </div>

          <div>
            <input
              value={formData.course}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="course"
              id="course"
              placeholder="Enter Course Name"
              required
            />
          </div>

          <div>
            <input
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="file"
              name="image"
              id="image"
              accept="image/*"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Post Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentPost;
