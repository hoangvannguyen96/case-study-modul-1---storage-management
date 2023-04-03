class MotorInfo {
    constructor(arr) {
      this.motors = arr;
    }
    showList() {
      let table = "";
      for (let i = 0; i < this.motors.length; i++) {
        table += "<tr>";
        table += "<td>";
        table += this.motors[i].ms;
        table += "</td>";

        table += "<td>";
        table +=
          '<img width="50px" height="50px" src="' +
          this.motors[i].img +
          '">';
        table += "</td>";

        table += "<td>";
        table += this.motors[i].carCompany;
        table += "</td>";

        table += "<td>";
        table += this.motors[i].carLife;
        table += "</td>";

        table += "<td>";
        table += this.motors[i].name;
        table += "</td>";

        table += "<td>";
        table += this.motors[i].color;
        table += "</td>";

        table += "<td>";
        table += this.motors[i].date;
        table += "</td>";

        table +=
          "<td>" +
          '<button style="background-color: red; width: 50px; border-radius: 3px; border: none; color: white; margin-right: 20px;" class ="delete" type="button" onclick="deleteMotor(' +
          i +
          ')">Delete</button>' +
          '<button style="background-color: yellow; width: 30px; border-radius: 3px; border: none; color: blue;" type="button" onclick="editMotor(' +
          i +
          ')">Edit</button>' +
          "</td>";
        table += "</tr>";
      }
      document.getElementById("list-motors").innerHTML = table;
    }
    add(motor) {
      this.motors.push(motor);
    }
    delete(ms) {
      this.motors.splice(ms, 1);
    }
    findMotorByMs(ms) {
      return this.motors[ms];
    }
    edit(motor, ms, img, carCompany, carLife, name, color, date) {
      motor.edit(ms, img, carCompany, carLife, name, color, date);
    }
  }