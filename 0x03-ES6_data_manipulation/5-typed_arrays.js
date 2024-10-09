const createInt8TypedArray = (length, position, value) => {
  const buffer = new ArrayBuffer(length);

  const int8View = new Int8Array(buffer);

  const dataView = new DataView(buffer);

  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  int8View[position] = value;

  return dataView;
};

export default createInt8TypedArray;
