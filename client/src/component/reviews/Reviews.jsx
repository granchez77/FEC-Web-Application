import React, { useContext, useState, useEffect } from 'react';
import Select from 'react-select';
import AppContext from '../AppContext';
import { Button } from '../../GlobalStyle';
import reviewFetcher from './reviewFetcher';
import Breakdown from './breakdown/Breakdown';
import ReviewList from './ReviewList';
import {
  SelectContainer, ReviewTitle, ReviewListContainer, RatingBreakdownContainer, Container,
} from './Review.styles';

function Reviews() {
  const { productId } = useContext(AppContext);
  // state for all fetched reviews data
  const [reviewAll, setReviewAll] = useState([]);
  // state for all updating page number when more button is clicked
  const [page, setPage] = useState(1);
  const [sortby, setSortby] = useState('newest');
  // fetching data function
  const { reviews, loading } = reviewFetcher(page, sortby, 2);

  // invoke when reviews variable chages
  // adding incoming data to reviewAll state
  useEffect(() => {
    setReviewAll([...reviewAll, ...reviews]);
  }, [reviews]);

  useEffect(() => () => {
    setPage(1);
    setReviewAll([]);
  }, [productId]);

  const options = [
    { value: 'newest', label: 'Newest' },
    { value: 'helpful', label: 'Helpful' },
    { value: 'relevant', label: 'Relevant' },
  ];

  // increment page number when button is clicked
  function incrementByTwo() {
    setPage((initial) => initial + 1);
  }

  function switchSort(e) {
    setSortby(e.value);
    setReviewAll([]);
  }

  console.log(reviewAll);
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div>
<<<<<<< HEAD
      {/* {myContext.productId} */}
=======
      <StarRatings currentRate={4} isRating />
      {reveiwData.product_id}
>>>>>>> 3eb8882 (bundle minor changes)
    </div>
=======
    <>
=======
    <Container>
>>>>>>> d67c599 (rating star is now available to use in every widget)
      <RatingBreakdownContainer>
        <Breakdown />
      </RatingBreakdownContainer>
      <SelectContainer>
        <ReviewTitle>
          Reviews sorted by
        </ReviewTitle>
        <Select options={options} onChange={(e) => switchSort(e)} />
      </SelectContainer>
      <ReviewListContainer>
        {loading && <h1>loading...</h1>}
        {!loading && reviewAll.map((review) => <ReviewList review={review} />)}
        <Button onClick={() => incrementByTwo()}> More Reviews </Button>
        <Button> Add a Review </Button>
      </ReviewListContainer>
<<<<<<< HEAD
    </>
>>>>>>> 0ac910e (bundle fetching review data and loading)
=======
    </Container>
>>>>>>> d67c599 (rating star is now available to use in every widget)
  );
}

export default Reviews;
