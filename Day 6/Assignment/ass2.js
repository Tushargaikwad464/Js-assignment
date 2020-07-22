console.log('hie');

function myfun() {

    let i = 0;
    let n = prompt('Enter a num');

    let str = "";

    for (i = 1; i <= 10; i++) {
        document.write('<table border="2" cellspacing="1">');
        document.write("<tr><td>" + n + "x" + i + "=" + n * i + "</td></tr>");
    }
    document.write("</table>");

}