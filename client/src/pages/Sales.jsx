import React, { useEffect, useState } from "react";
import axiosInstance from "../config/axios.config";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import UpdateSale from "./UpdateSale";

const Sales = () => {
    const [sales, setSales] = useState([]);

    const [isUpdate, setIsUpdate] = useState(false)
    const [uSale, setUsale] = useState({})

    useEffect(() => {

        const fetchSales = () => {
            axiosInstance
                .get("/sales")
                .then((res) => {
                    setSales(res.data.sales);
                })
                .catch((err) => {
                    console.log(err);
                    toast.error("Error fetching sales");
                });
        };

        fetchSales();
    }, []);


    const handleDelete = (saleId) => {
        axiosInstance
            .delete(`/sales/${saleId}`)
            .then((res) => {

                setSales(sales.filter((sale) => sale.saleId !== saleId));
                toast.success("Sale deleted successfully!");
            })
            .catch((err) => {
                console.log(err);
                toast.error("Error deleting sale");
            });

    };

    return (
        <div className="min-h-screen bg-gray-100 p-5">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">Sales List</h1>
                <div className="flex flex-col gap-4">
                    {!isUpdate && sales.map((sale) => (
                        <div
                            className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
                            key={sale.saleId}
                        >
                            <div className="space-y-2">
                                <h2 className="text-xl font-semibold text-gray-800">Name: {sale.salesPersonName}</h2>
                                <p className="text-gray-600">Description: {sale.description}</p>
                                <p className="text-gray-600">Branch: {sale.salesBranch}</p>
                                <p className="text-gray-600">Date: {sale.salesDate}</p>
                                <p className="text-gray-600">Amount: ${sale.salesAmount}</p>
                            </div>
                            <div className="flex justify-end gap-3 mt-4">


                                <button onClick={() => {
                                    setIsUpdate(true)
                                    setUsale(sale)
                                }} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200">
                                    Update
                                </button>
                                <button
                                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
                                    onClick={() => handleDelete(sale.saleId)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}

                    {
                        isUpdate && <UpdateSale setIsUpdate={setIsUpdate} sale={uSale} />
                    }
                </div>
            </div>
        </div>
    );
};

export default Sales;