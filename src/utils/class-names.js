const classNames = (...classNames) => {
  return classNames
    .filter(
      item => item
    ) /* Eliminates empty or undefined strings, and `false`, which will evaluate to `false` */
    .join(" "); /* Separates actual class names by space */
};

export default classNames;
