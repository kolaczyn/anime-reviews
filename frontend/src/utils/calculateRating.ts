const calculateRating = (
  story: number,
  opening: number,
  characters: number,
  awesomeness: number
  // I might come up with a little more complicated formula in the future
  // or even move the code to the backend
) => Math.floor((story + opening + characters + awesomeness) / 4);

export default calculateRating;
