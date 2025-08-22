import React from "react";
import { Pagination } from "react-bootstrap";
const CustomPagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const getPaginationItems = () => {
    const maxVisible = 5;
    const items = [];

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) items.push(i);
    } else {
      let start = Math.max(currentPage - 2, 1);
      let end = start + maxVisible - 1;

      if (end > totalPages) {
        end = totalPages;
        start = end - maxVisible + 1;
      }

      for (let i = start; i <= end; i++) items.push(i);

      if (end < totalPages) {
        items.push("...");
        items.push(totalPages);
      }
    }
    return items;
  };

  return (
    <Pagination className="custom-pagination">
      <Pagination.Prev
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      />
      {getPaginationItems().map((item, idx) =>
        item === "..." ? (
          <Pagination.Ellipsis key={idx} disabled />
        ) : (
          <Pagination.Item
            key={idx}
            active={currentPage === item}
            onClick={() => setCurrentPage(item)}
            style={{
              color: currentPage === item ? "#fff" : "#007BFF",
              margin: "0 7px",
            }}
          >
            {item}
          </Pagination.Item>
        )
      )}
      <Pagination.Next
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
      />
      <style>
        {`
  .custom-pagination .page-link {
    color: black;       /* text color */
    background-color: white; /* optional: background */
    border: 1px solid #dee2e6; /* optional: keep border */
  }

  .custom-pagination .page-item.active .page-link {
    color: white;       /* active text color */
    background-color: hsla(211, 100%, 50%, 1); /* active background */
    border-color: ; /* active border */
  }
`}
      </style>
    </Pagination>
  );
};

export default CustomPagination;
