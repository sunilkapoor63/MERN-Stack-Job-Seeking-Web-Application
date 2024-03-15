// // the function is taking all the functions of controllers as parameter
export const catchAsyncErrors = (theFunction) => {
  return (req, res, next) => {
    Promise.resolve(theFunction(req, res, next))
    .catch(next);
  };
};
