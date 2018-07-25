module.exports = log = (...args) => {
  console.log('----------------------------------------');
  args.forEach((item) => {
    if (typeof item != undefined) {
      console.log(item);
    } else if (typeof item == 'object') {
      console.log(item);
    }
  });
  console.log('----------------------------------------');
};
