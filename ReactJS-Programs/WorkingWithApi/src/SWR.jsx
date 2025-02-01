import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const SWR = () => {
  const {
    data: mydata,
    error,
    isValidating,
  } = useSWR("https://restcountries.com/v2/all", fetcher);

  if (error) return <h1>failed to load</h1>;
  if (isValidating) return <h1>Loading</h1>;

  return (
    <>
      {mydata.map((country, index) => (
        <img key={index} src={country.flags.png} alt="flag" width={50}></img>
      ))}
    </>
  );
};
export default SWR;
