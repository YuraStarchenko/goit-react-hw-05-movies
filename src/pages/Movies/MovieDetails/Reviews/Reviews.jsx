import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { getReviewsMuvies } from 'service/movieApi';

const Reviews = () => {
  const { movieId } = useParams();

  const [filmReviews, setFilmReviews] = useState([]);

  useEffect(() => {
    try {
      getReviewsMuvies(movieId).then(res => setFilmReviews(res.results));
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return (
    <>
      {isEmpty(filmReviews) ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        <ul>
          {filmReviews.map(review => {
            return (
              <li key={review.id}>
                <b>{review.author}</b>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Reviews;
