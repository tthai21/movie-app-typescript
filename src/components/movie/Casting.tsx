import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api_key, tmdb_api, tmdb_url } from "../../config";
import axios, { AxiosResponse } from "axios";

const Casting: React.FC<{ movie: string }> = ({ movie }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState<any>();

  const CastUrl = `${tmdb_url}${movie}/${id}/credits?api_key=${api_key}`;
  useEffect(() => {
    const fetchNowPlaying = async (): Promise<void> => {
      let res: AxiosResponse;
      try {
        res = await axios.get(CastUrl);
        setData(res.data);
      } catch (error: any) {
        console.log(error);
      }
    };
    fetchNowPlaying();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!data) return null;
  const { cast } = data;
  const newCast: any[] = cast.slice(0, 4);
  return (
    <div className="flex items-center gap-5 mb-20">
      {newCast &&
        newCast.map((item) => (
          <div className="mx-1 lg:mx-2" key={item.id}>
            <div>
              <img
                src={tmdb_api.photoUrl(item.profile_path)}
                className="w-[60px] h-[60px] lg:w-[200px] lg:h-[200px] rounded-full lg:object-cover mb-5"
                alt=""
              ></img>
            </div>
            <div
              className="text-center text-white cursor-pointer"
              onClick={() => navigate(`/${item.id}`)}
            >
              {item.name}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Casting;
