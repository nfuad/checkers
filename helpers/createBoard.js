// create the checkers board with given dimension and position
export default function createBoard(positions, dimensions) {
  return positions.reduce((acc, _, i) => {
    if (!(i % dimensions)) {
      acc[i / dimensions] = positions.slice(i, i + dimensions)
    }

    return acc
  }, {})
}
