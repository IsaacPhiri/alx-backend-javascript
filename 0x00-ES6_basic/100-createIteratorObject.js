export default function createIteratorObject(report) {
  let currentDepartment = 0;
  let currentEmployee = 0;

  const iterator = {
    next() {
      if (currentDepartment >= Object.keys(report.allEmployees).length) {
        return {
          value: undefined,
          done: true,
        };
      }

      const departmentName = Object.keys(report.allEmployees)[currentDepartment];
      const departmentEmployees = report.allEmployees[departmentName];

      if (currentEmployee >= departmentEmployees.length) {
        currentDepartment++;
        currentEmployee = 0;
        return this.next();
      }

      const employeeName = departmentEmployees[currentEmployee];
      currentEmployee++;

      return {
        value: employeeName,
        done: false,
      };
    },
  };

  return iterator;
}
