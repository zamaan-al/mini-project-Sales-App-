import React, { useState } from "react";
import axiosInstance from "../config/axios.config";
import toast from "react-hot-toast";

const SalesPost = () => {
    const [formData, setFormData] = useState({
        salesPersonName: "",
        description: "",
        salesAmount: "",
        salesDate: "",
        salesBranch: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        axiosInstance
            .post("/sales", formData)
            .then((res) => {
                console.log(res);
                toast.success("Sales posted successfully!");
            })
            .catch((err) => {
                toast.error(err.response.data.message);
            });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-semibold text-center text-gray-800 mb-6">Post New Sale</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            value={formData.salesPersonName}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                            type="text"
                            name="salesPersonName"
                            id="salesPersonName"
                            placeholder="Enter Salesperson's Name"
                        />
                    </div>
                    <div>
                        <input
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                            type="text"
                            name="description"
                            id="description"
                            placeholder="Enter Sales Description"
                        />
                    </div>
                    <div>
                        <input
                            value={formData.salesBranch}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                            type="text"
                            name="salesBranch"
                            id="salesBranch"
                            placeholder="Enter Sales Branch"
                        />
                    </div>
                    <div>
                        <input
                            value={formData.salesDate}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                            type="date"
                            name="salesDate"
                            id="salesDate"
                            placeholder="Enter Sales Date"
                        />
                    </div>
                    <div>
                        <input
                            value={formData.salesAmount}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                            type="number"
                            name="salesAmount"
                            id="salesAmount"
                            placeholder="Enter Sales Amount"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition duration-200">
                            Post Sale
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SalesPost;
