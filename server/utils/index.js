const createPassword = (firstName, department, userIdArr) => {
  if (firstName.length % 2 === 0) {
    const evenFirstName = firstName.slice(0, firstName.length / 2);
    return evenFirstName + userIdArr[1] + department;
  }
  const oddFirstName = firstName.slice(0, firstName.length / 2);
  return oddFirstName + userIdArr[1] + department;
};

module.exports = {
  utils: {
    createPassword,
  },
};
