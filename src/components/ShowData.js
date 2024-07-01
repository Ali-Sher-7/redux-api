// import { useEffect } from "react";
// import { fetchData } from "../state/action-creators/Index";
// import { useSelector, useDispatch } from "react-redux";

// const ShowData = () => {
//   const dispatch = useDispatch();
//   const { data, loading, error } = useSelector((state) => state.ApiCall);

//   useEffect(() => {
//     dispatch(fetchData());
//   }, [dispatch]);
//   console.log(data);
//   if (loading) return <div className="fs-3 text-center mt-5">Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="px-5 bg-secondary text-white">
//       <h1 className="text-center py-5">Data Using Redux</h1>
//       <table className="table table-hover border table-primary table-striped rounded">
//         <thead>
//           <tr>
//             <th className=" fs-3">University Name</th>
//             <th className="fs-3">Country</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((user) => {
//             return (
//               <tr key={user.id}>
//                 <td>{user.name}</td>
//                 <td>{user.country}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ShowData;

import { useEffect, useState } from "react";
import { fetchData } from "../state/action-creators/Index";
import { useSelector, useDispatch } from "react-redux";
import { unitedKingdomUniversities } from "../state/api/uKUni";
import { unitedStatesUniversities } from "../state/api/uSUni";

const ShowData = () => {
  const dispatch = useDispatch();
  const { getData, getDataLoading, getDataError } = useSelector(
    (state) => state.ApiCall
  );
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = getData.find((uni) => uni.country === name);
    return data;
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  console.log(getData);
  if (getDataLoading)
    return <div className="fs-3 text-center mt-5">Loading...</div>;
  if (getDataError) return <div>Error: {getDataError}</div>;

  return (
    <div className="px-5 bg-secondary text-white">
      <h1 className="text-center py-5">Data Using Redux</h1>
      <form onSubmit={handleSubmit}>
        <input
          defaultValue={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">search</button>
      </form>

      {getData && getData.length > 0 ? (
        <table className="table table-hover border table-primary table-striped rounded">
          <thead>
            <tr>
              <th className=" fs-3">University Name</th>
              <th className="fs-3">Country</th>
            </tr>
          </thead>
          <tbody>
            {getData &&
              getData.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.country}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      ) : (
        <p></p>
      )}

      <ul>
        {getData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShowData;
