import "../scss/vinge.scss";

class Profile {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    #generateProfile() {
        console.log({ name: this.name, age: this.age });
    }
    viewLog() {
        this.#generateProfile();
    }
}

const profile = new Profile("AHRONY", 20);

profile.viewLog();
