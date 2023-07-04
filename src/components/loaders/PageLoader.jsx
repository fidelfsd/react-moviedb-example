import React from "react";

import SyncLoader from "react-spinners/SyncLoader";

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
         <SyncLoader
            loading={loading}
            cssOverride={override}
            color={"#1976D2"}
            aria-label="Loading Spinner"
            data-testid="loader"
         />
      </>
   );
}
