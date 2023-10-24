import Image from "next/image";
import { useEffect, useState } from "react";
// Components
import Seo from "@/components/Seo";

interface IMovie {
  id: number;
  original_title: string;
  poster_path: string;
}
interface IFetchProps {
  results: IMovie[];
}
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
  },
};

/*
export default function Home() {
  const [movies, setMovies] = useState<IMovie[]>();
  useEffect(() => {
    (async () => {
      const { results }: IFetchProps = await (
        await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1&region=KR",
          options
        )
      ).json();
      setMovies(results);
    })();
  }, []);

  return (
    <div className="container">
      <Seo title="Home" />
      {!movies && <h3 style={{ backgroundColor: "red" }}>Loading...</h3>}
      {movies?.map((movie) => (
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
*/

export default function Home({ results }: IFetchProps) {
  return (
    <div className="container">
      <Seo title="Home" />
      {!results && <h3>Loading...</h3>}
      {results?.map((movie) => (
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

export async function getServerSideProps() {
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
