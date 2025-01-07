import React from 'react';
import '../SupplierManagement/suppliermanagement.css';

function SupplierManagement() {
  return (
    <div className="supplier-management-container">
      <h1 className="supplier-management-title">Supplier Management</h1>
      <p className="supplier-management-description">Manage your suppliers efficiently.</p>
      <div className="supplier-actions">
        <button className="add-supplier-btn">Add New Supplier</button>
        <button className="view-suppliers-btn">View Suppliers</button>
      </div>
    </div>
  );
}

export default SupplierManagement;
