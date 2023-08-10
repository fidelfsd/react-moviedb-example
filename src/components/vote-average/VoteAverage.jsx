import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./VoteAverage.scss";

export default function VoteAverage({ value, style, size }) {
   // hooks
   const [progress, setProgress] = useState(0);

   useEffect(() => {
      const timer = setInterval(() => {
         setProgress((prevProgress) =>
            prevProgress >= value ? value : prevProgress + 10
         );
      }, 100);
      return () => {
         clearInterval(timer);
      };
   }, []);

   const colorFromValue = (value) => {
      if (value >= 70) return "success";
      if (value >= 50) return "warning";
      return "error";
   };

   let color = colorFromValue(value);

   return (
      <div className="VoteAverage" style={style}>
         <Box sx={{ position: "relative", display: "inline-flex" }}>
            <CircularProgress
               variant="determinate"
               color={color}
               value={progress}
               size={size}
            />
            <Box
               sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
               }}
            >
               <Typography
                  variant="caption"
                  component="div"
                  color="white"
                  fontSize={16}
                  sx={{
                     display: "flex",
                     alignItems: "flex-start",
                     justifyContent: "center",
                  }}
               >
                  {Math.round(progress)}
                  <Typography
                     variant="caption"
                     component="span"
                     color="white"
                     fontSize={13}
                  >
                     %
                  </Typography>
               </Typography>
            </Box>
         </Box>
      </div>
   );
}

VoteAverage.propTypes = {
   /**
    * The value of the progress indicator for the determinate variant.
    * Value between 0 and 100.
    * @default 0
    */
   value: PropTypes.number.isRequired,
   size: PropTypes.number,
   style: PropTypes.object,
};
