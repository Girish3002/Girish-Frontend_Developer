import React, { useState } from "react";
import DataItem from "./DataItem";
import Capsuledata from "../CapsuleData/Capsuledata";

import "./DataGrid.scss";
function DataGrid({ data }) {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);

  const openDetailsModal = (item) => {
    setSelectedItem(item);
  };
  const closeDetailsModal = () => {
    setSelectedItem(null);
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, data.length);

  const itemsToDisplay = data.slice(startIndex, endIndex);

  return (
    <div className="data-grid">
      <div className="data-section">
        {itemsToDisplay.length === 0 ? (
          <p className="no-data">No items found Invalid query.</p>
        ) : (
          itemsToDisplay.map((item) => (
            <DataItem
              key={item.capsule_serial}
              item={item}
              onClick={openDetailsModal}
            />
          ))
        )}
      </div>

      {/* Pagination controls */}
      <div className="pagination">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1 || itemsToDisplay.length === 0}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages || itemsToDisplay.length === 0}
        >
          Next
        </button>
      </div>
      {selectedItem && (
        <Capsuledata item={selectedItem} onClose={closeDetailsModal} />
      )}
    </div>
  );
}

export default DataGrid;
