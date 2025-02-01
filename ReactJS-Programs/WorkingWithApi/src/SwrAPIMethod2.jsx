import useSWR from "swr";
function SwrAPIMethod2() {
  const fetcher = (...args) => fetch(...args).then((res2) => res2.json());

  const {
    data: mydata,
    error,
    isValidating,
  } = useSWR("https://restcountries.com/v2/all", fetcher);

  if (error) return <div>Unable to load</div>;
  if (isValidating) return <div> Loading....</div>;

  return (
    <>
      <h2>Working with WSR Method </h2>
      <table>
        <tr>
          <th>Name</th>
          <th>Capital</th>
          <th>Region</th>
          <th>Population</th>
        </tr>
        {mydata.map((newdata, index) => (
          <tr key={index}>
            <td>{newdata.name}</td>
            <td>{newdata.capital}</td>
            <td>{newdata.region}</td>
            <td>{newdata.population}</td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default SwrAPIMethod2;
