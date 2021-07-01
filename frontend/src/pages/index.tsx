import React from 'react';
import ContainerSmall from '../components/layout/container/ContainerSmall';
import ArticlePreviewData from '../models/ArticlePreview';
import imgSrcArticle from '../images/nagatoro-big.jpg';
import imgSrcReview from '../images/nagatoro-small.jpg';
import ArticlePreview from '../components/preview/ArticlePreview';
import classNames from 'classnames';
import ContainerMedium from '../components/layout/container/ContainerMedium';
import ReviewPreview from '../components/preview/ReviewPreview';

const articlesData: ArticlePreviewData[] = [
  {
    content:
      'Tenetur voluptatum doloribus corrupti odit. Iste sed sit eos sunt numquam tenetur rem autem. Quisquam consequatur qui id voluptates recusandae. Ea a nostrum qui. Saepe sint itaque ut ut dolorem omnis vero optio. Cum enim quo consequatur nam nihil omnis.',
    title: "Don't Toy With Me, Miss Nagatoro",
    date: '20th June 2021',
    imgSrc: imgSrcArticle,
    subtitle: '',
  },
];

const reviewsData: ArticlePreviewData[] = [
  {
    content:
      'Tenetur voluptatum doloribus corrupti odit. Iste sed sit eos sunt numquam tenetur rem autem. Quisquam consequatur qui id voluptates recusandae. Ea a nostrum qui. Saepe sint itaque ut ut dolorem omnis vero optio. Cum enim quo consequatur nam nihil omnis.',
    title: "Don't Toy With Me, Miss Nagatoro",
    date: '20th June 2021',
    imgSrc: imgSrcReview,
    subtitle: '',
  },
];
const IndexPage = () => {
  return (
    <ContainerMedium
      className={classNames(
        'grid grid-cols-1 lg:grid-cols-3',
        'space-y-4 lg:space-y-0 lg:space-x-4'
      )}
    >
      <div className="w-full md:w-2/3 lg:w-full lg:col-span-1">
        <h1 className="mb-6">Latest Blog Posts</h1>
        {articlesData.map(data => (
          <ArticlePreview {...data} />
        ))}
      </div>
      <div className="lg:col-span-2">
        <h2 className="mb-6">Latest Reviews</h2>
        {reviewsData.map(data => (
          <ReviewPreview {...data} />
        ))}
      </div>
    </ContainerMedium>
  );
};

export default IndexPage;
