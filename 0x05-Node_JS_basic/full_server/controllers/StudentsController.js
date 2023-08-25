import { readDatabase } from '../utils.js';

class StudentsController {
    static async getAllStudents(request, res) {
        try {
            const studentsByField = await readDatabase('./database.csv');

            let response = 'This is the list of our students\n';

            Object.keys(studentsByField).sort().forEach((FIELD) => {
                const LIST_OF_FIRSTNAMES = studentsByField[FIELD];
                response += `Number of students in ${FIELD}: ${LIST_OF_FIRSTNAMES.length}. List: ${LIST_OF_FIRSTNAMES.join(',')}\n`;
            })
            console.log(studentsByField);
            res.status(200).send(response);
        } catch (error) {
            console.log(error);
            response.status(500).send('Cannot load the database\n');
        }
    }

    static async getAllStudentsByMajor(request, response) {
        try {
          const major = request.params.major;
    
          if (major !== 'CS' && major !== 'SWE') {
            response.status(500).send('Major parameter must be CS or SWE');
            return;
          }
    
          const studentsByField = await readDatabase('./database.csv');
    
          if (!studentsByField[major]) {
            response.status(200).send(`No students found for major: ${major}`);
            return;
          }
    
          const students = studentsByField[major];
          response.status(200).send(`List: ${students.join(', ')}`);
        } catch (error) {
            console.log(error);
          response.status(500).send('Cannot load the database\n');
        }
    }
}

export default StudentsController;