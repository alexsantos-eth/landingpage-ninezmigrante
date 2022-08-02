/**
 * Toma una matriz, elimina el elemento en startIndex y lo inserta en endIndex.
 * @param list - la matriz de elementos que se van a reordenar
 * @param startIndex - El índice del elemento que se va a mover.
 * @param endIndex - El índice del elemento después del que está moviendo.
 * @returns El resultado del método de empalme.
 */
export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};
