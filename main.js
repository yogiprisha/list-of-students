name_a=[];

function submit(){
    var name_1=document.getElementById("name_1").value;

    var name_2=document.getElementById("name_2").value;

    var name_3=document.getElementById("name_3").value;

    var name_4=document.getElementById("name_4").value;

    name_a.push(name_1);

    name_a.push(name_2);

    name_a.push(name_3);

    name_a.push(name_4);

    console.log(name_a);

    document.getElementById("display_name").innerHTML=name_a;
    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";

}
function sort(){
    name_a.sort();
    console.log(name_a);
    document.getElementById("display_name").innerHTML=name_a
}