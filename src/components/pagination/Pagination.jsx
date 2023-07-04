import React from "react";

export default function Pagination({ page, count, onChange }) {
   const handlePrev = (event) => {
      onChange(event, page - 1);
   };

   const handleNext = (event) => {
      onChange(event, page + 1);
   };
   return (
      <div>
         <button disabled={page == 1} onClick={handlePrev}>
            Prev
         </button>
         {page}
         <button disabled={page == count} onClick={handleNext}>
            Next
         </button>
      </div>
   );
}
