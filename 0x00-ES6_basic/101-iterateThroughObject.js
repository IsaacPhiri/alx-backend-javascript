export default function iterateThroughObject(reportWithIterator) {
  let employeesString = '';

  for (const employee of reportWithIterator) {
    employeesString += employee.name + ' | ';
  }

  return employeesString.slice(0, -3);
}
