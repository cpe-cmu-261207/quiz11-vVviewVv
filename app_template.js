//your code here!
function Cal(){
    
    var num = document.getElementById("input-number").value;
    //var ans = document.getElementById("ans").value;
    document.getElementById("input-number").value = "";
    
    if (num === '') {
        alert("You must write something!");
    } else {
        var cal = 620610805-num;
        ans = parseInt(cal);
        alert(cal);
    }
}

function Create(){
    var body = document.getElementsByTagName( "body" )[0];
    var tbl = document.createElement( "table" );
    var tblBody = document.createElement( "tbody" );
}