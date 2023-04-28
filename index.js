const getFullName = (fname, lname) => {
  return `${fname} ${lname}`;
};

const actualFullName = getFullName("Olivier", "Matis");
const exceptedFullName = "Olivier Matis";
if (actualFullName !== exceptedFullName) {
  throw new Error(`${actualFullName} is not equal to ${exceptedFullName}`);
}
