const API_URL = 'http://localhost:3000/api/timetable';

const form = document.getElementById('timetableForm');
const timetableBody = document.getElementById('timetableBody');
const cancelEditBtn = document.getElementById('cancelEdit');

async function fetchTimetable() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    timetableBody.innerHTML = '';

    data.forEach(course => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${course.id}</td>
        <td>${course.course_code}</td>
        <td>${course.course_name}</td>
        <td>${course.created_at ? new Date(course.created_at).toLocaleString() : ''}</td>
        <td>${course.updated_at ? new Date(course.updated_at).toLocaleString() : ''}</td>
        <td>
          <button onclick="editCourse(${course.id})">Edit</button>
          <button onclick="deleteCourse(${course.id})">Delete</button>
        </td>
      `;
      timetableBody.appendChild(row);
    });
  } catch (err) {
    console.error('Error fetching timetable:', err);
  }
}

form.addEventListener('submit', async e => {
  e.preventDefault();
  const id = document.getElementById('courseId').value;
  const courseCode = document.getElementById('courseCode').value;
  const courseName = document.getElementById('courseName').value;

  const payload = { course_code: courseCode, course_name: courseName };

  try {
    if (id) {
      await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } else {
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    }

    form.reset();
    document.getElementById('courseId').value = '';
    cancelEditBtn.style.display = 'none';
    fetchTimetable();
  } catch (err) {
    console.error('Error saving course:', err);
  }
});

async function editCourse(id) {
  try {
    const res = await fetch(`${API_URL}/${id}`);
    const course = await res.json();
    document.getElementById('courseId').value = course.id;
    document.getElementById('courseCode').value = course.course_code;
    document.getElementById('courseName').value = course.course_name;
    cancelEditBtn.style.display = 'inline';
  } catch (err) {
    console.error('Error fetching course:', err);
  }
}

cancelEditBtn.addEventListener('click', () => {
  form.reset();
  document.getElementById('courseId').value = '';
  cancelEditBtn.style.display = 'none';
});

async function deleteCourse(id) {
  if (!confirm('Are you sure you want to delete this course?')) return;
  try {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    fetchTimetable();
  } catch (err) {
    console.error('Error deleting course:', err);
  }
}

// Initial load
fetchTimetable();

