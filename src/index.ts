export const listToSentence = (list: string[], {
  conjunction = ' e ',
  separator = ', ',
}: { conjunction: string, separator: string }) => {
  if (list.length === 0) {
    return '';
  }

  if (list.length === 1) {
    return list[0];
  }

  if (list.length === 2) {
    return list.join(conjunction);
  }

  const itemsExceptLast = list.slice(0, list.length - 1);
  const lastItem = list[list.length - 1];
  return [itemsExceptLast.join(separator), lastItem].join(conjunction);
};
