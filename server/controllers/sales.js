let Sales=require("../models/Salees");

module.exports.postSales = async (req, res) => {
    const salesDetails = req.body;
    try {
        const sales = await Sales.create(salesDetails);
        res.status(201).json({ message: "sales post successfully!", sales });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};
module.exports.allSales = async (req, res) => {
    try {
        const sales = await Sales.find();
        res.status(201).json({ message: "sales fetched successfully!", sales});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};
module.exports.updateSale = async (req, res) => {
    try {
        const { saleId } = req.params; 
        const updatedData = req.body; 

        
        const saleToUpdate = await Sales.findOne({ saleId: saleId });

        
        if (!saleToUpdate) {
            return res.status(404).json({ message: 'Sale not found' });
        }

        saleToUpdate.salesPersonName = updatedData.salesPersonName || saleToUpdate.salesPersonName;
        saleToUpdate.description = updatedData.description || saleToUpdate.description;
        saleToUpdate.salesBranch = updatedData.salesBranch || saleToUpdate.salesBranch;
        saleToUpdate.salesDate = updatedData.salesDate || saleToUpdate.salesDate;
        saleToUpdate.salesAmount = updatedData.salesAmount || saleToUpdate.salesAmount;

        
        const updatedSale = await saleToUpdate.save();

        
        res.status(200).json({ message: 'Sale updated successfully', updatedSale });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error updating sale', error: error.message });
    }
};
module.exports.deleteSale = async (req, res) => {
    try {
        const saleId = req.params.saleId;
        const deletedSale = await Sales.findOneAndDelete({ saleId: saleId });
        
        if (!deletedSale) {
            return res.status(404).json({ message: "Sale not found!" });
        }
        
        res.status(200).json({ message: "Successfully deleted!" });
    } catch (error) {
        console.error('Delete sale error:', error);
        res.status(500).json({ message: error.message });
    }
};

