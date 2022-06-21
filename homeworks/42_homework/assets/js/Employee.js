class Employee {
    constructor(empl) {
        this.name = empl.name,
        this.lastName = empl.lastName,
        this.position = empl.position,
        this.age = empl.age,
        this.exp = empl.exp
    }
}

class EmpleTable {
    constructor(empList) {
        this.empList = empList;
    }

    getHtml() {
        let html = '';
        this.empList.forEach(el => {
            html += `
            <tr>
                <td>${el.name}</td>
                <td>${el.lastName}</td>
                <td>${el.position}</td>
                <td>${el.age}</td>
                <td>${el.exp}</td>
            </tr>
            `
        });
        return html;
    }

    vievHtml(elID) {
        document.getElementById(elID).innerHTML = this.getHtml();
    }
}