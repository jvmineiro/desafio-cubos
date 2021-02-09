import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {format, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';
import {DolarFormat} from '../../utils/DolarFormat';
import {
  Container,
  HeaderContainer,
  Content,
  ImageContainer,
  InfoContainer,
  TagContainer,
  VideoContainer,
} from './styles';

import api from '../../services/api';
import { Header } from '../../components/Header';
import { converter } from '../../utils/AverageToPercent';

interface IMovie {
  id: number;
  adult: boolean;
  poster_path?: string;
  budget: number;
  status: string;
  revenue: number;
  overview: string;
  release_date: string;
  genres: IGenres[];
  original_title: string;
  original_language: string;
  popularity: number;
  vote_count: number;
  profit: string;
  spoken_languages: ILanguage[];
  vote_average: number;
  video: boolean;
  dateFormatted: string;
  item_count: number;
  title: string;
  runtime: number;
}

interface IVideos {
  id: number;
  results: VideosProps[];
}

interface VideosProps {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
}

interface IDetails {
  id: number;
}

interface ILanguage {
  iso_639_1: string;
  name: string;
}

interface IGenres {
  id: string;
  name: string;
}

const MovieInfo: React.FC<IDetails> = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState<IMovie>({} as IMovie);
  const [video, setVideo] = useState<IVideos>();

  function HourToMinutes(totalMinutes: number) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.floor(totalMinutes % 60);
    return `${hours}h${minutes}min`;
  }

  useEffect(() => {
    async function loadVideo() {
      const response = await api.get(`/movie/${id}/videos`, {
        params: {
          api_key: 'd9890f102dc9fcf0b442bb23413b8fea',
          language: 'pt-BR',
        },
      });
      setVideo(response.data);
    }
    loadVideo();
  }, [id]);

  useEffect(() => {
    async function loadMovie() {
      const response = await api.get(`movie/${id}`, {
        params: {
          api_key: 'd9890f102dc9fcf0b442bb23413b8fea',
          language: 'pt-BR',
        },
      });
      const data = {
        ...response.data,
        dateFormatted: movieInfo.release_date
          ? format(parseISO(movieInfo.release_date), 'dd/MM/yyyy', {
              locale: pt,
            })
          : null,
        runtime: HourToMinutes(response.data.runtime),
        budget: DolarFormat(response.data.budget),
        revenue: DolarFormat(response.data.revenue),
        profit: DolarFormat(response.data.revenue - response.data.budget),
        vote_average: converter(response.data.vote_average),
      };
      setMovieInfo(data);
    }
    loadMovie();
  }, [id, movieInfo.release_date]);
  return (
    <>
      <Header>Movies</Header>
      <Container>
        <HeaderContainer>
          <h1>{movieInfo.title}</h1>
          <span>{movieInfo.dateFormatted}</span>
        </HeaderContainer>
        <Content>
          <ImageContainer>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
              alt={movieInfo.title}
            />
          </ImageContainer>

          <InfoContainer>
            <h3>Sinopse</h3>
            <p>{movieInfo.overview}</p>
            <h3>Informações</h3>
            <ul>
              <li>
                <span>Situação</span>
                <strong>{movieInfo.status}</strong>
              </li>

              <li>
                <span>Idioma</span>
                {movieInfo.spoken_languages?.map(lang => (
                  <strong key={lang.iso_639_1}>{lang.name}</strong>
                ))}
              </li>

              <li>
                <span>Duração</span>
                <strong>{movieInfo.runtime}</strong>
              </li>

              <li>
                <span>Orçamento</span>
                <strong>{movieInfo.budget}</strong>
              </li>

              <li>
                <span>Receita</span>
                <strong>{movieInfo.revenue}</strong>
              </li>

              <li>
                <span>Lucro</span>
                <strong>{movieInfo.profit}</strong>
              </li>
            </ul>
            <TagContainer>
              <ul>
                {movieInfo.genres?.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>

              <div>
                <span>{movieInfo.vote_average}</span>
              </div>
            </TagContainer>
          </InfoContainer>
        </Content>
      </Container>
      <VideoContainer>
        {video?.results[0] ? (
          <iframe
            src={`https://www.youtube.com/embed/${video?.results[0].key}`}
            title={video?.results[0].name}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            width="100%"
            height="1000px"
          />
        ) : (
          <p />
        )}
      </VideoContainer>
    </>
  );
};

export default MovieInfo;
