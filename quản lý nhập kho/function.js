let motor = new Motor(
    "01",
    "https://ducativietnam.com/upload/images/Streetfighter/tin%20t%E1%BB%A9c/(3)______Supersport-950-S-MY21-Red-01-Model-Preview-1050x650.png",
    "Ducati",
    "2022",
    "Streetfighter V2",
    "Đỏ,đen",
    "31/03/2023"
  );
  let motor1 = new Motor(
    "02",
    "https://cdn.honda.com.vn/motorbike-versions/May2022/UDvt2b8oUaEjVwt3fY1q.png",
    "Honda",
    "2020",
    "Airblade",
    "Đỏ,trắng",
    "31/03/2023"
  );
  let motor2 = new Motor(
    "03",
    "https://yamahaanphu.com/timthumb.php?src=upload/images/yamaha-exciter-150-gp-2019-2020.png&w=470&h=0&zc=1&a=tc",
    "Yamaha",
    "2019",
    "Exiter 150 GP",
    "Xanh dương",
    "31/03/2023"
  );
  let arr = [motor, motor1, motor2];
  let arrMotor = new MotorInfo(arr);
  function add() {
    let ms = document.getElementById("ms").value;
    let img = document.getElementById("img").value;
    let carCompany = document.getElementById("carCompany").value;
    let carLife = document.getElementById("carLife").value;
    let name = document.getElementById("name").value;
    let color = document.getElementById("color").value;
    let date = document.getElementById("date").value;

    let motor = new Motor(ms, img, carCompany, carLife, name, color, date);
    arrMotor.add(motor);
    arrMotor.showList();
    clear();
  }
  function clear() {
    document.getElementById("ms").value = "";
    document.getElementById("img").value = "";
    document.getElementById("carCompany").value = "";
    document.getElementById("carLife").value = "";
    document.getElementById("name").value = "";
    document.getElementById("color").value = "";
    document.getElementById("date").value = "";
  }
  function deleteMotor(ms) {
    arrMotor.delete(ms);
    arrMotor.showList();
  }
  let motorMs=0
  function editMotor(ms) {
    let motor = arrMotor.findMotorByMs(ms);
    document.getElementById("ms").value = motor.ms;
    document.getElementById("img").value = motor.img;
    document.getElementById("carCompany").value = motor.carCompany;
    document.getElementById("carLife").value = motor.carLife;
    document.getElementById("name").value = motor.name;
    document.getElementById("color").value = motor.color;
    document.getElementById("date").value = motor.date;
    motorMs=ms

  }
  function save() {
    let ms = document.getElementById("ms").value;
    let img = document.getElementById("img").value;
    let carCompany = document.getElementById("carCompany").value;
    let carLife = document.getElementById("carLife").value;
    let name = document.getElementById("name").value;
    let color = document.getElementById("color").value;
    let date = document.getElementById("date").value;

    let motor =arrMotor.findMotorByMs(motorMs)
    arrMotor.edit(motor, ms, img, carCompany, carLife, name, color, date)
    arrMotor.showList();
    clear();
  }
  arrMotor.showList();