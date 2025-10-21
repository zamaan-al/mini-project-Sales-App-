import React, { useEffect, useState } from "react";
import axiosInstance from "../config/axios.config";
import toast from "react-hot-toast";
import UpdateStudent from "./UpdateStudent";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [uStudent, setUStudent] = useState({});

  // Fetch all students
  useEffect(() => {
    const fetchStudents = () => {
      axiosInstance
        .get("/students")
        .then((res) => setStudents(res.data.students || []))
        .catch((err) => {
          console.log(err);
          toast.error("Error fetching students");
        });
    };
    fetchStudents();
  }, []);

  // Handle delete
  const handleDelete = (studentId) => {
    axiosInstance
      .delete(`/students/${studentId}`)
      .then(() => {
        setStudents(students.filter((s) => s.studentId !== studentId));
        toast.success("Student deleted successfully!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error deleting student");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Students List
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {!isUpdate &&
            students.map((student) => (
              <div
                key={student.studentId}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-200"
              >
                <div className="flex flex-col items-center space-y-3">
                  {student.image ? (
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-28 h-28 rounded-full object-cover border-2 border-blue-400 shadow-sm"
                    />
                  ) : (
                    <div className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-xl font-semibold">
                      N/A
                    </div>
                  )}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {student.name}
                  </h2>
                  <p className="text-gray-500">ID: {student.studentId}</p>
                  <p className="text-gray-600">{student.email}</p>
                  <p className="text-gray-600 font-medium">{student.course}</p>
                </div>

                <div className="flex justify-center gap-4 mt-6">
                  <button
                    onClick={() => {
                      setIsUpdate(true);
                      setUStudent(student);
                    }}
                    className="px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 shadow-md transition duration-300"
                  >
                    Update
                  </button>

                  <button
                    onClick={() => handleDelete(student.studentId)}
                    className="px-5 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 shadow-md transition duration-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}

          {isUpdate && <UpdateStudent setIsUpdate={setIsUpdate} student={uStudent} />}
        </div>
      </div>
    </div>
  );
};

export default Students;
