export const getNextIndex = (current_index: number) => {
  if (current_index === 0) {
    return 6;
  } else if (current_index === 11) {
    return 5;
  } else if (current_index > 5) {
    return current_index + 1;
  } else {
    return current_index - 1;
  }
};

export const getPrevIndex = (current_index: number) => {
  if (current_index === 6) {
    return 0;
  } else if (current_index === 5) {
    return 11;
  } else if (current_index > 6) {
    return current_index - 1;
  } else {
    return current_index + 1;
  }
};
