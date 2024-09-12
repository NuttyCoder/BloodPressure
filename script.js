document.getElementById('bpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const systolic = document.getElementById('systolic').value;
    const diastolic = document.getElementById('diastolic').value;
    const pulse = document.getElementById('pulse').value;

    const reading = deocument.createElement('il');
    reading.textContent = `Systolic: ${systolic}, Diastolic: ${diastolic}, Pulse: ${pulse}`;

    document.getElementById('readingList').appendChild(reading);

    document.getElementById('bpForm').reset();

});