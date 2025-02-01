import useSWR from "swr";
function SwrAPIMethod() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const {
    data: mydata,
    error,
    isValidating,
  } = useSWR("https://restcountries.com/v2/all", fetcher);

  if (error) return <div>Unable to load</div>;
  if (isValidating) return <div> Loading....</div>;

  return (
    <>
      {mydata.map((country, index) => (
        <img key={index} src={country.flags.png} alt="flag" width={50}></img>
      ))}
    </>
  );
}

export default SwrAPIMethod;
