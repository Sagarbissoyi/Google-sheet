const students = [
    { id: 1, name: 'Chadwick Ayre', gender: 'Male', class: 11, marks: 18, passing: false, email: 'cayre0@cam.ac.uk' },
    { id: 2, name: 'Abrahan Seabrocke', gender: 'Male', class: 3, marks: 27, passing: true, email: 'aseabrocke1@ocn.ne.jp' },
    { id: 3, name: 'Nathanael Laye', gender: 'Male', class: 10, marks: 89, passing: false, email: 'nlaye2@typepad.com' },
    { id: 4, name: 'Luigi Balcers', gender: 'Agender', class: 8, marks: 30, passing: false, email: 'lbalcers3@reverbnation.com' },
    { id: 5, name: 'Adam Gurg', gender: 'Male', class: 3, marks: 10, passing: true, email: 'agurg4@xrea.com' },
    { id: 6, name: 'Kev Haitlie', gender: 'Male', class: 1, marks: 59, passing: true, email: 'khaitlie5@booking.com' },
    { id: 7, name: 'Reinhard Royl', gender: 'Male', class: 6, marks: 60, passing: true, email: 'rroyl6@sun.com' },
    { id: 8, name: 'Nonah Kilmartin', gender: 'Female', class: 9, marks: 4, passing: false, email: 'nkilmartin7@washington.edu' },
    { id: 9, name: 'Clo Falkinder', gender: 'Female', class: 6, marks: 6, passing: false, email: 'cfalkinder8@mysql.com' },
    { id: 10, name: 'Clyve Dedney', gender: 'Male', class: 12, marks: 57, passing: false, email: 'cdedney9@europa.eu' },
    { id: 11, name: 'Vincenz Surphliss', gender: 'Male', class: 4, marks: 2, passing: true, email: 'vsurphlissa@soup.io' },
    { id: 12, name: 'Helene Griffitts', gender: 'Female', class: 12, marks: 80, passing: true, email: 'hgriffittsb@umn.edu' },
    
    { id: 13, name: 'Lydia Pamphilon', gender: 'Female', class: 5, marks: 81, passing: false, email: 'lpamphilonc@mit.edu' },
   



];

function renderTable(data) {
    const tableBody = document.getElementById('student-table');
    tableBody.innerHTML = '';
    data.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.gender}</td>
            <td>${student.class}</td>
            <td>${student.marks}</td>
            <td>${student.passing ? 'passing' : 'failed'}</td>
            <td>${student.email}</td>
        `;
        tableBody.appendChild(row);
    });
}

function sortBy(key, order = 'asc') {
    let sortedData = [...students];
    sortedData.sort((a, b) => {
        if (a[key] < b[key]) return order === 'asc' ? -1 : 1;
        if (a[key] > b[key]) return order === 'asc' ? 1 : -1;
        return 0;
    });
    renderTable(sortedData);
}

document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filteredData = students.filter(student => 
        student.name.toLowerCase().includes(query) ||
        student.gender.toLowerCase().includes(query) ||
        student.class.toString().includes(query) ||
        student.marks.toString().includes(query) ||
        (student.passing ? 'passing' : 'failed').includes(query) ||
        student.email.toLowerCase().includes(query)
    );
    renderTable(filteredData);
});

window.onload = function() {
    renderTable(students);
}
