var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: false
});

typewriter.typeString('Hi, I am Aayush!')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Full Stack Web Developer')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Skills: Java')
    .pauseFor(1000)
    .deleteChars(4)
    .typeString('MERN Stack')
    .pauseFor(1000)
    .deleteChars(10)
    .typeString('Data Structure and Algorithm')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Have a Good Day!')
    .start();