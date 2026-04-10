class User {
  constructor(name) {
    // INVOKE THE SETTER
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short");
      return;
    }
    this._name = value;
  }
}
let user = new User("john");
console.log(user.name);

user.name = "Sameer";
console.log(user.name);
