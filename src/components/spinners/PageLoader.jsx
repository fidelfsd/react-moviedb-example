import React from "react";

import PulseLoader from "react-spinners/PulseLoader";

const override = {
   display: "block",
   position: "absolute",
   left: "50%",
   top: "50%",
   transform: "translate(-50%, -50%)",
   margin: "0 auto",
};

export default function PageLoader({ loading = true }) {
   return (
      <>
         <PulseLoader
            loading={loading}
            cssOverride={override}
            color={"#1976D2"}
            aria-label="Loading Spinner"
            data-testid="loader"
         />
      </>
   );
}
