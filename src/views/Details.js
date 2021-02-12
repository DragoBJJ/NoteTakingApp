import React, { useEffect, useState } from 'react';
import DetailsTemplate from 'Templates/DetailsTemplate';

const Details = ({ match }) => {
  const [pageType, setPageType] = useState('notes');

  const dummyArticle = {
    id: 1,
    title: 'Wake me up when Vue ends',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias nesciunt saepe deleniti quos reprehenderit dolorum, mollitia odio modi praesentium ullam voluptatibus quaerat possimus, veritatis fuga nihil vero minima necessitatibus ut.',
    twitterName: 'zuck',
    articleUrl: 'https://youtube.com/hello_roman',
    created: '1 day',
  };

  useEffect(() => {
    const finishRoute = match.path.split('/')[1];
    setPageType(finishRoute);
  }, []);

  return (
    <>
      <DetailsTemplate pageType={pageType} {...dummyArticle} />
    </>
  );
};

export default Details;
