import fs from 'fs/promises';

const readDatabase = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8')
        .then((data) => {
            const lines = data.split('\n');
            const studentsByField = {};

            lines.forEach((line) => {
                const [name, field] = line.split(',');
                if (!studentsByField[field]) {
                    studentsByField[field] = [];
                }
                studentsByField[field].push(name);
            });

            resolve(studentsByField);
        })
        .catch((error) => {
            reject(error);
        });
    });
}

export { readDatabase };