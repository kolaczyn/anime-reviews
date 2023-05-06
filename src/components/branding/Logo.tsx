import React from 'react';
import { Link } from 'gatsby';

type Props = {};

const Logo: React.FC<Props> = ({}) => {
  return <Link className="text-2xl font-bold font-header transition duration-300" to="/">Anime Reviews</Link>;
};
export default Logo;
