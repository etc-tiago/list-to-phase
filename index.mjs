export default (list, options = {
  conjunction: ' e ',
  separator: ', ',
}) => {
  if (list.length === 0) {
    return '';
  }

  if (list.length === 1) {
    return list[0];
  }

  if (list.length === 2) {
    return list.join(options.conjunction);
  }

  const itemsExceptLast = list.slice(0, list.length - 1);
  const lastItem = list[list.length - 1];
  return [itemsExceptLast.join(options.separator), lastItem].join(options.conjunction);
};
