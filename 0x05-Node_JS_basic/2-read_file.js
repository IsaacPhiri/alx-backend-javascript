const fs = require('fs');

function countStudents(file) {
    try {
        const data = fs.readFileSync(file, 'utf8').split('\n');
        let headers = data.shift().split(',');
        let students = data.map((row) => row.split(',')).filter((student) => student.length === headers.length);
        let idxFN = headers.indexOf('firstname');
        let idxFD = headers.indexOf('field');
        let fields = {};
        students.forEach((student) => {
        if (!fields[student[idxFD]]) fields[student[idxFD]] = [];
        fields[student[idxFD]].push(student[idxFN]);
        });
        console.log(`Number of students: ${students.length}`);
        for (let field in fields) {
        if (field) {
            let list = fields[field];
            console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
        }
        }
    } catch (err) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;