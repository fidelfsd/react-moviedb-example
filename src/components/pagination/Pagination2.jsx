import React, { useState } from "react";
import "./Pagination.scss";

export default function Pagination2({ page, count, onChange }) {
   let initialLimit = count >= 5 ? 5 : 3;
   let initialOffset = page <= 5 ? 0 : 0;
   const MIN_PAGINATION = 5;

   const [offset, setOffset] = useState(initialOffset);
   const [limit, setLimit] = useState(initialLimit);

   const pages = [...Array(count + 1).keys()].slice(1);
   console.log("🚀 ~ Pagination2 ~ pages:", pages)



   
   let visiblePages = pages.slice(offset, limit + offset);

   console.log({ offset, limit, page, visiblePages });

   // handlers
   const handleNext = (event) => {
      if (page >= 5) {
         setOffset((off) => off + 1);
      } else {
         setOffset(0);
      }
      onChange(event, page + 1);
   };
   const handlePrev = (event) => {
      if (page >= 5) {
         setOffset((off) => off - 1);
      } else {
         setOffset(0);
      }
      onChange(event, page - 1);
   };

   const handlePageClick = (event, value) => {
      if (value >= count - 5) {
         setOffset(count - 5);
         setLimit(5);
      } else if (value >= 5 && value <= count - 4) {
         setOffset(value - 2);
         setLimit(3);
      } else if (value < 5) {
         setOffset(0);
         setLimit(5);
      }
      onChange(event, value);
   };

   const PaginationItem = ({ value }) => {
      return (
         <button
            className={page == value ? "active" : ""}
            onClick={(e) => handlePageClick(e, value)}
         >
            {value}
         </button>
      );
   };

   const PaginationPrevious = () => {
      return (
         <button onClick={handlePrev} disabled={page <= 1} title="Previous">
            <svg className="nav-icon" viewBox="0 0 24 24">
               <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
            </svg>
         </button>
      );
   };

   const PaginationNext = () => {
      return (
         <button onClick={handleNext} disabled={page >= count} title="Next">
            <svg className="nav-icon" viewBox="0 0 24 24">
               <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
            </svg>
         </button>
      );
   };

   return (
      <div className="Pagination">
         <div className="pagination-buttons">
            <PaginationPrevious />
            {page >= 5 && (
               <>
                  <PaginationItem value={1} />
                  ...
               </>
            )}
            {visiblePages.map((p) => (
               <PaginationItem key={p} value={p} />
            ))}
            {page <= count - 4 && (
               <>
                  ...
                  <PaginationItem value={count} />
               </>
            )}
            <PaginationNext />
         </div>
      </div>
   );
}
