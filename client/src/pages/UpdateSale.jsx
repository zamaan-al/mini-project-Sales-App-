import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../config/axios.config";

const UpdateSale = ({ sale, setIsUpdate }) => {


    const [formData, setFormData] = useState({
        saleId: "",
        salesPersonName: "",
        description: "",
        salesBranch: "",
        salesDate: "",
        salesAmount: ""
    });

    useEffect(() => {
        if (sale) {
            setFormData({
                salesPersonName: sale.salesPersonName || "",
                description: sale.description || "",
                salesBranch: sale.salesBranch || "",
                salesDate: sale.salesDate || "",
                salesAmount: sale.salesAmount || ""
            });
        }
    }, [sale]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        axiosInstance
            .put(`/sales/${sale.saleId}`, formData)
            .then((response) => {
                console.log("Sale updated:", response.data);
                setIsUpdate(false)
                window.location.reload()


            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="min-h-screen bg-gray-100 p-5">
            <div className="container mx-auto max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-semibold text-center mb-6">Update Sale</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="salesPersonName" className="block text-sm font-medium text-gray-700">Sales Person Name</label>
                        <input
                            type="text"
                            id="salesPersonName"
                            name="salesPersonName"
                            value={formData.salesPersonName}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="salesBranch" className="block text-sm font-medium text-gray-700">Branch</label>
                        <input
                            type="text"
                            id="salesBranch"
                            name="salesBranch"
                            value={formData.salesBranch}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="salesDate" className="block text-sm font-medium text-gray-700">Date</label>
                        <input
                            type="date"
                            id="salesDate"
                            name="salesDate"
                            value={formData.salesDate}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="salesAmount" className="block text-sm font-medium text-gray-700">Amount</label>
                        <input
                            type="text"
                            id="salesAmount"
                            name="salesAmount"
                            value={formData.salesAmount}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div className="flex justify-center mt-4">
                        <button
                            type="submit"
                            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-500 transition duration-200"
                        >
                            Update Sale
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateSale;