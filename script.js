// To add more work experience
function addNewWEField(){
    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter here')
    newNode.classList.add("mt-2")

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);

}


// to add more academic90 qualification
function addNewAQField(){
    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter here')
    newNode.classList.add("mt-2")

    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode,aqAddButtonOb);
}


function generateCV(){
    let flag=1;


    // Name change
    let nameField=document.getElementById("nameField").value;
    // if name is empty
    if(nameField==""){
        alert("Please enter name")
        flag=0;
    }
        // side name
    let nameTemp1=document.getElementById('nameTemp1')
    nameTemp1.innerHTML=nameField
        //center name
    document.getElementById('nameTemp2').innerHTML=nameField;


    // contact change
    let contactField=document.getElementById("contactField").value;
    // if contact is empty
    if(contactField.length!=13){
        alert('Enter mobile number in correct format')
        flag=0;
    }
    document.getElementById("contactTemp").innerHTML=contactField;


    // email change
    let mailField=document.getElementById("mailField").value;
    // if email is empty
    if(!mailField.includes('@')){
        flag=0;
        alert('Enter correct mail format')
    }
    document.getElementById("mailTemp").innerHTML=mailField;


    // address change
    let addressField=document.getElementById("addressField").value;
    // if address is empty
    if(addressField.length==0){
        flag=0;
        alert("Please enter your address");
    }
    document.getElementById("addressTemp").innerHTML=addressField;

    // facebook change
    document.getElementById("fbTemp").innerHTML= document.getElementById("fbField").value;

    // insta change
    document.getElementById('instaTemp').innerHTML= document.getElementById("instaField").value;

    // linked in field
    document.getElementById('linkedTemp').innerHTML= document.getElementById("linkedField").value;


    // objective change
    objectiveField=document.getElementById("objectiveField").value;
    // if objective is empty
    if(objectiveField.length==0){
        alert('Please enter your objective');
        flag=0;
    }
    document.getElementById('objectiveTemp').innerHTML= document.getElementById("objectiveField").value;


    // work experience
    let weArr=document.getElementsByClassName('weField'); // weField is a class  with  multiple items, so it will be treated as an array
    let str=''; //empty string 
    for (const i of weArr) {  // storing different list items together in empty string
        str=str+`<li> ${i.value} </li>`;
    }
    // if experience is empty
    if(str=="<li>  </li>"){
        document.getElementById("workExpTemp").style.display="none"
    }
    document.getElementById('weTemp').innerHTML=str;


    // academic qualification
    let aqArr=document.getElementsByClassName('aqField'); // aqField is a class  with  multiple items, so it will be treated as an array
    let str2=''; //empty string 
    for (const i of aqArr) {  // storing different list items together in empty string
        str2=str2+`<li> ${i.value} </li>`;
    }
    // if academic qualification is empty
    if(str2=="<li>  </li>"){
        alert("Please enter your academic qualification");
        flag=0;
    }
    document.getElementById('aqTemp').innerHTML=str2;


    // Image change
    let file=document.getElementById('imgField').files[0];
    let reader=new FileReader();
    reader.readAsDataURL(file);

    // set image to template
    reader.onloadend=function(){
        document.getElementById('imgTemp').src=reader.result;
    }


    // if Error occurs
    if(flag==0){
        return false;
    }

    // hiding form
    document.getElementById('cv-form').style.display='none';

    // making template visible
    document.getElementById('cv-template').style.display='block';



}



function printCV(){
    window.print();
}


