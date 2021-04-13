// import React from "react";

// interface Props {
//   page: number;
//   setPage: any;
//   hasNextPage: any;
// }

// export default function JobsPagination({ page, setPage, hasNextPage }: Props) {
//   function adjustPage(amount: number) {
//     setPage((prevPage: any) => prevPage + amount);
//   }

//   return (
//     <div className="jobspagination">
//       {page !== 1 && <div onClick={() => adjustPage(-1)} />}
//       {page !== 1 && <div onClick={() => setPage(1)}>1</div>}
//       {page > 2 && <div />}
//       {page > 2 && <div onClick={() => adjustPage(-1)}>{page - 1}</div>}
//       <div>{page}</div>
//       {hasNextPage && <div onClick={() => adjustPage(1)}>{page + 1}</div>}
//       {hasNextPage && <div onClick={() => adjustPage(1)} />}
//     </div>
//   );
// }
