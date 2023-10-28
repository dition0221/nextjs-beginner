import { useEffect, useState } from "react";
// API & Interface
// Components
import Seo from "@/components/Seo";
import { IFetchProps } from "./api/getMovies";

export default function Home() {
  // Get movie API
  const [data, setData] = useState<IFetchProps>();
  useEffect(() => {
    (async () => {
      const res = (await (await fetch("/api/getMovies")).json()) as IFetchProps;
      if (res) setData(res);
    })();
  }, []);

  return (
    <div className="container">
      <Seo title="Home" />
      {!data && <h3>Loading...</h3>}
      {data?.results.map((movie) => (
        <div className="movie" key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
          />
          <h4>{movie.original_title}</h4>
        </div>
      ))}

      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

/* export async function getServerSideProps() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    },
  };
  const { results }: IFetchProps = await (
    await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1&region=KR",
      options
    )
  ).json();

  return { props: { results } };
}
 */
