export const isYes = (sanitizedAnswer) => {
    if (sanitizedAnswer === 'yes' || sanitizedAnswer === 'y') {
      return true;
  } else {
    return false;
  }
};