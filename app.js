class RegisterTeacher {
	constructor(teacher, subject) {
		this.teacher = teacher;
		this.subject = subject;
	}
}

class StudentPresent {
	constructor(name) {
		this.name = name;
	}
}

class StudentAbsent {
	constructor(name) {
		this.name = name;
	}
}

class UI {
	addTeacherSubject(register) {
		const list = document.getElementById("teacher-attendance");
		const row = document.createElement("tr");
		row.innerHTML = `
            <td>${register.teacher}</td>
            <td>${register.subject}</td>
            <td><a href="#"<i class="fas fa-trash-alt"></i><a></td>
        `;
		list.appendChild(row);
	}

	StuPresent(present) {
		const list = document.getElementById("student-present");
		const row = document.createElement("tr");
		row.innerHTML = `
            <td>${present.name}</td>
            <td><a href="#"<i class="fas fa-trash-alt"></i><a></td>
        `;
		list.appendChild(row);
	}

	StuAbsent(absent) {
		const listabsent = document.getElementById("student-absent");
		const rowabsent = document.createElement("tr");
		rowabsent.innerHTML = `
            <td>${absent.name}</td>
            <td><a href="#"<i class="fas fa-trash-alt"></i><a></td>
        `;
		listabsent.appendChild(rowabsent);
	}

	showAlert(message, className) {
		const div = document.createElement("div");
		div.className = `alert ${className}`;
		div.appendChild(document.createTextNode(message));
		const table = document.querySelector(".attendance-tables");
		const form = document.querySelector(".table-lesson-teacher");
		table.insertBefore(div, form);

		// Alert Timeout after 2 sec
		setTimeout(function () {
			document.querySelector(".alert").remove();
		}, 2000);
	}

	deleteStudent(target) {
		if (target.className === "fas fa-trash-alt") {
			target.parentElement.parentElement.remove();
		}
	}

	//Clear only Student field
	clearFields() {
		document.getElementById("student").value = "";
	}
}
