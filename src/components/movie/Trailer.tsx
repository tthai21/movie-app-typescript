import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api_key, tmdb_url } from "../../config";
import axios, { AxiosResponse } from "axios";

const Trailer: React.FC<{ movie: string }> = (props) => {
  const movie: string = props.movie;
  const { id } = useParams();
  const [data, setData] = useState<any>();
  const TrailerUrl = `${tmdb_url}${movie}/${id}/videos?api_key=${api_key}&language=en-US`;
  useEffect(() => {
    const fetchNowPlaying = async (): Promise<void> => {
      let res: AxiosResponse;
      try {
        res = await axios.get(TrailerUrl);
        setData(res.data);
      } catch (error: any) {
        console.log(error);
      }
    };
    fetchNowPlaying();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const results: any[] = data?.results;
  if (results) {
    let trailer = results.find((item) => item.name === "Official Trailer");
    if (!trailer) {
      trailer = results[0];
    }
    const link = `https://www.youtube-nocookie.com/embed/${trailer?.key}`;
    return (
      <div className="lg:w-[864px] mx-auto aspect-video mb-20">
        {results && (
          <iframe
            width="864"
            height="486"
            title="Youtube video player"
            src={link || ""}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="object-fill w-full h-full"
          ></iframe>
        )}
      </div>
    );
  }
  return null;
};

export default Trailer;
