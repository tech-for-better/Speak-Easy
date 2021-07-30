export function getCorespondingArray( tiles, setTiles ) {

 const noah = tiles.filter((noahs) => {
    return noahs.id === 224  || noahs.id === 518  || noahs.id === 673  || noahs.id === 274  || noahs.id === 485 || noahs.id ===  504 || noahs.id === 445 || noahs.id === 66 || noahs.id === 101 || noahs.id === 289 || noahs.id === 492 || noahs.id === 48 || noahs.id === 521 || noahs.id === 302 || noahs.id === 491 || noahs.id === 752;
  });
  const i = tiles.filter((is) => {
    return is.id === 495 || is.id === 492 || is.id === 143 || is.id === 245 || is.id === 680 || is.id === 143 || is.id === 245 || is.id === 680 || is.id === 504 || is.id === 289 || is.id === 244 || is.id === 372 || is.id === 472 || is.id === 141 || is.id === 4 || is.id === 219;
  });

  for (let index = 0;index < tiles.length; index++) {
    if (tiles.id === 0) {
      setTiles([...noah]);
    }
    if (tiles.id === 224) {
      setTiles([...i]);
    }
  }

}