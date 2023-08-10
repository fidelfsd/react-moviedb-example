import { Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Pagination2 from "../../components/pagination/Pagination2";

export default function About() {
   const [page, setPage] = useState(1);

   useEffect(() => {}, [page]);

   const handleChange = (event, value) => {
      setPage(value);
   };
   return (
      <>
         <Container sx={{ mt: 5 }}>
            <Typography variant="h1" fontSize={40} align="center" gutterBottom>
               About
            </Typography>

            <Pagination2 page={page} count={20} onChange={handleChange} />
         </Container>
      </>
   );
}
