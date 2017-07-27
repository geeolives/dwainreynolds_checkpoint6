// Use of Javascript - Rubric Requirement
var string = 'Welcome!';
var array = string.split('');
var timer;

function frameLooper() {
    if (array.length > 0) {
        document.getElementById('text').innerHTML += array.shift();
    } else {
        clearTimeout(timer);
    }
    loopTimer = setTimeout('frameLooper()', 70);
}
frameLooper();
