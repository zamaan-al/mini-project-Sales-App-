import React, { useState, useEffect } from "react";
import axiosInstance from "../config/axios.config";
import toast from "react-hot-toast";

const UpdateStudent = ({ student, setIsUpdate }) => {
  const [formData, setFormData] = useState({
    studentId: "" ,
    name: "",
    email: "",
    course: "",
    image: null,
  });

  useEffect(() => {
    if (student) {
      setFormData({
        studentId: student.studentId || "",
        name: student.name || "",
        email: student.email || "",
        course: student.course || "",
        image: null,
      });
    }
  }, [student]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("studentId", formData.studentId);
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("course", formData.course);
    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      const res = await axiosInstance.put(`/students/${student.studentId}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Student updated successfully!");
      setIsUpdate(false);
      window.location.reload();
      console.log("Student updated:", res.data);
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Error updating student");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="container mx-auto max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center mb-6">Update Student</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="studentId" className="block text-sm font-medium text-gray-700">
              Student ID
            </label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              value={formData.studentId}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="course" className="block text-sm font-medium text-gray-700">
              Course
            </label>
            <input
              type="text"
              id="course"
              name="course"
              value={formData.course}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Profile Image (optional)
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              accept="image/*"
            />
          </div>

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 transition duration-200"
            >
              Update Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateStudent;
