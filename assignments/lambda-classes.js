// CODE here for your Lambda Classes
class Person {
    constructor(props){
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
    }
    speak() {
        return(`Hello, my name is ${this.name} and I'm from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(instructorArrts){
        super(instructorArrts);
            this.specialty = instructorArrts.specialty;
            this.FavLanguage = instructorArrts.favLanguage;
            this.catchPhrase = instructorArrts.catchPhrase;
            this.channel = instructorArrts.channel;
    }
    demo(subject){
        return(`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        return(`${student.name} receives a perfect score on ${subject}`);
    }
}
class Student extends Person {
    constructor(studentArrts){
        super(studentArrts);
        this.previousBackground = studentArrts.previousBackground;
        this.className = studentArrts.className;
        this.favSubjects = studentArrts.favLanguage;
    }
    listsSubjects(){
        return `${this.favSubjects}`;
    }
}
class ProjectManagers extends Teacher {
    constructor(attrs){
        super(attrs)
        this.gradClassName = attrs.gradClassName
        this.favInstructor = attrs.favInstructor
    }
    standup(channel){
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    }
    debugsCode(student, subject){
        return `${student} debugs ${Ryan.name}'s code on ${subject}`

    }
}


const dan = new Teacher({
    name: 'Dan',
    age: Infinity,
    location: 'Denver',
    specialty: 'Relentless Debugger',
    favLanguage: 'JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia', 
    catchPhrase: 'If you can do the thing, you can get paid to do the thing!'
});

const Mykol = new ProjectManagers({
    name: 'Mykol',
    age: 28,
    location: 'Washington, DC',
    gradClassName: 'WEB18',
    favInstructor: 'Luis Hernandez',
    specialty: 'nodejs and express',
    favLanguage: 'meh',
    catchPhrase: "Wait, what's happening?",
}); 

const Ryan = new Student({
    name: 'Ryan',
    age: 24,
    location: 'Woodstock GA',
    className: 'WEB21',
    previousBackground: 'Cook',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    favLanguage: 'java?',
    catchPhrase: "Dude, wheres my car?",
}); 

// console.log(Ryan)
console.log(Ryan.speak())
console.log(Ryan.listsSubjects())
console.log(Mykol.debugsCode('Mykol', 'Java'))
console.log(Mykol.standup('Slack'))
// console.log(dan)
console.log(dan.demo(dan.favLanguage))
console.log(dan.grade('Ryan', 'Java'))
console.log(Ryan.sprintChallenge('Java Basic'))
console.log(Ryan.PRAssignment('Java Basic'))