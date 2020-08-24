import React from 'react';
import {PropagateLoader} from 'react-spinners';
import {useParams} from 'react-router-dom';
import {useSearch} from '../Hooks/useSearch';
import Paginado from './Paginado';
import CardContainer from './CardContainer';

function Playlist() {
  const {media, category, page} = useParams();
  const [data, isLoading, isError] = useSearch(media, category, page);

  if (isError) return <div>Error...</div>;

  if (isLoading || !data) return <PropagateLoader size={15} />;

  if (data) {
    return (
      <div className="Home">
        
        <CardContainer cards={data.results} media={media} />
        <Paginado
          className="paginadoContainer"
          media={media}
          category={category}
          page={page}
          totalPage={data.total_pages}
        />
      </div>
    );
  }
  return null;
}

export default Playlist;
