import React from "react";
import "./Pagination.scss";

export default function Pagination({ page, count, onChange }) {
   // handlers
   const handleFirst = (event) => onChange(event, 1);
   const handleNext = (event) => onChange(event, page + 1);
   const handlePrev = (event) => onChange(event, page - 1);
   const handleLast = (event) => onChange(event, count);

   return (
      <div className="Pagination">
         <div className="pagination-buttons">
            <button onClick={handleFirst} disabled={page == 1} title="First">
               <svg
                  className="nav-icon"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
               >
                  <path d="M18.41 16.59 13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path>
               </svg>
            </button>

            <button onClick={handlePrev} disabled={page <= 1} title="Previous">
               <svg className="nav-icon" viewBox="0 0 24 24">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
               </svg>
            </button>

            <span>
               {page} of {count}
            </span>

            <button onClick={handleNext} disabled={page >= count} title="Next">
               <svg className="nav-icon" viewBox="0 0 24 24">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
               </svg>
            </button>
            <button onClick={handleLast} disabled={page == count} title="Last">
               <svg
                  className="nav-icon"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
               >
                  <path d="M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path>
               </svg>
            </button>
         </div>
      </div>
   );
}
