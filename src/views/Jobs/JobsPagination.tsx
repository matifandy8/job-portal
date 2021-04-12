// import React from "react";

// export default function JobsPagination({ page, setPage, hasNextPage }) {
//   function adjustPage(amount) {
//     setPage((prevPage) => prevPage + amount);
//   }

//   return (
//     <div className="jobspagination">
//       {page !== 1 && <div onClick={() => adjustPage(-1)} />}
//       {page !== 1 && <div onClick={() => setPage(1)}>1</div>}
//       {page > 2 && <div />}
//       {page > 2 && <div onClick={() => adjustPage(-1)}>{page - 1}</div>}
//       <div active>{page}</div>
//       {hasNextPage && <div onClick={() => adjustPage(1)}>{page + 1}</div>}
//       {hasNextPage && <div onClick={() => adjustPage(1)} />}
//     </div>
//   );
// }
