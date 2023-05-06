import { Link as GatsbyLink, useStaticQuery, graphql } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import ReactMarkdown from "react-markdown";
import ContainerMedium from "../components/layout/container/ContainerMedium";
import ReviewPreview from "../components/preview/ReviewPreview";
import Link from "../components/ui/Link";

export default function ReviewPage() {
  const reviews = [];

  return (
    <>
      <Helmet>
        <title>All Reviews | Anime Reviews</title>
      </Helmet>
      <ContainerMedium>
        <div className="py-8">
          <div className="mb-4">
            <h1>All Reviews</h1>
            <GatsbyLink to="/">
              <Link>Back to Home Page</Link>
            </GatsbyLink>
          </div>
          <div className="space-y-12 max-w-3xl">
            {reviews.map(review => (
              <ReviewPreview key={review.id} {...review} />
            ))}
          </div>
        </div>
      </ContainerMedium>
    </>
  );
}
