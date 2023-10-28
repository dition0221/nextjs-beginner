import type { NextApiRequest, NextApiResponse } from "next";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
  },
};

interface IMovie {
  id: number;
  original_title: string;
  poster_path: string;
}

export interface IFetchProps {
  results: IMovie[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IFetchProps>
) {
  const data: IFetchProps = await (
    await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1&region=KR",
      options
    )
  ).json();

  res.status(200).json(data);
}
