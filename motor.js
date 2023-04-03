class Motor {
    constructor(ms, img, carCompany, carLife, name, color, date) {
      this.ms = ms;
      this.img = img;
      this.carCompany = carCompany;
      this.carLife = carLife;
      this.name = name;
      this.color = color;
      this.date = date;
    }
    getMs() {
      return this.ms;
    }
    getImg() {
      return this.img;
    }
    getCarCompany() {
      return this.carCompany;
    }
    getCarLife() {
      return this.carLife;
    }
    getName() {
      return this.name;
    }
    getColor() {
      return this.color;
    }
    getDate() {
      return this.date;
    }
    setMs(ms) {
      this.ms = ms;
    }
    setImg(img) {
      this.img = img;
    }
    setCarCompany(carCompany) {
      this.carCompany = carCompany;
    }
    setCarLife(carLife) {
      this.carLife = carLife;
    }
    setName(name) {
      this.name = name;
    }
    setColor(color) {
      this.color = color;
    }
    setDate(date) {
      this.date = date;
    }
    edit(ms, img, carCompany, carLife, name, color, date) {
      this.ms = ms;
      this.img = img;
      this.carCompany = carCompany;
      this.carLife = carLife;
      this.name = name;
      this.color = color;
      this.date = date;
    }
  }