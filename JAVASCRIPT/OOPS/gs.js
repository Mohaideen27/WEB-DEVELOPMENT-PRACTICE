class user {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this.__name;
  }

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short");
      return;
    }
    this._name = value;
  }
}
let user = new user("john");
alert(user.name);

user = new user("");
