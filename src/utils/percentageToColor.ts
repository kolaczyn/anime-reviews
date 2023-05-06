const percentageToColor = (percentage: number): 'red' | 'yellow' | 'green' =>
  percentage < 30 ? 'red' : percentage < 60 ? 'yellow' : 'green';
export default percentageToColor;
