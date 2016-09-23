// Opgave 1
document.getElementsByTagName('div')[1].style.backgroundColor = "purple";
document.getElementsByTagName('div')[2].style.backgroundColor = "yellow";
document.getElementsByTagName('div')[3].style.backgroundColor = "lime";

// Opgave 2
var Person = function(firstname, lastname, phone, email) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.phone = phone;
    this.email = email;
};

var persons = [
    new Person('Anders','And',88888888,'anders@and.dk'),
    new Person('Hans','Hansen',12345678,'hans@hansen.dk'),
    new Person('Grethe','Andersen',87654321,'gre@the.dk')
];

var show = function() {
    var table = document.getElementById('persondata');
    var th = table.insertRow(0);
    th.innerHTML = "<th>First Name</th><th>Last Name</th><th>Phone Number</th><th>Email</th>";
    for(var i = 0; i < persons.length; i++) {
        var row = table.insertRow(i+1);
        var td1 = row.insertCell(0);
        var td2 = row.insertCell(1);
        var td3 = row.insertCell(2);
        var td4 = row.insertCell(3);
        td1.innerHTML = persons[i].firstname;
        td2.innerHTML = persons[i].lastname;
        td3.innerHTML = persons[i].phone;
        td4.innerHTML = persons[i].email;
    }
};

show();

//Opgave 3
document.getElementById('box1').onclick = function() {
    console.log("Du klikkede på først boks");
};
document.getElementById('box2').onclick = function() {
    console.log("Du klikkede på anden boks");
};
document.getElementById('box3').onclick = function() {
    console.log("Du klikkede på tredje boks");
};

//Opgave 4
document.getElementById('box4').onmouseover = function() {
    this.innerHTML = "Bla";
};
document.getElementById('box4').onmouseout = function() {
    this.innerHTML = "";
};

document.getElementById('box5').onmouseover = function() {
    this.innerHTML = "Tada";
};
document.getElementById('box5').onmouseout = function() {
    this.innerHTML = "";
};

document.getElementById('box6').onmouseover = function() {
    this.innerHTML = "Kaka";
};
document.getElementById('box6').onmouseout = function() {
    this.innerHTML = "";
};

//Opgave 5
var form = document.getElementById('form');

form.onsubmit = function() {
    var formdata = document.getElementsByTagName('input');
    for(var i = 0; i < formdata.length; i++) {
        console.log(formdata[i].value);
    }
    showFormData();
    return false;
};

//Opgave 6
var lis = document.getElementsByTagName('li');

for(var i = 1; i < lis.length; i+=2) {
    lis[i].style.backgroundColor = '#eee';
}