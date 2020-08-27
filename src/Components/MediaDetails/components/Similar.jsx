import React from 'react';
import {useSearchInfo} from '../../../Hooks/useSearchInfo';
import {PropagateLoader} from 'react-spinners';
import CardContainer from '../../CardContainer';

const Similar = ({media, id}) => {
  const [data, isLoading, isError] = useSearchInfo(media, id, 'similar');

  if (isError) return <div>Error...</div>;

  if (!data || isLoading ) return <PropagateLoader />;

  if (data) {
    return (
      <div className="container-cards">
        {data && <CardContainer media={media} cards={data.results} />}
      </div>
    );
  }
  return null;
};

export default Similar;