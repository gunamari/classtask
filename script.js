function createlabels(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
    }
    //it is returning an HTML element
    //<label for="email">Mail</label>
    
    function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1){
        var ele=document.createElement(tagname);
        ele.setAttribute(attrname,attrvalue);
        ele.setAttribute(attrname1,attrvalue1);
        return ele;
    }
    function createlinebreak(tagname){
    var ele=document.createElement(tagname);
    return ele;
    }

var fname=createlabels("label","for","Fname","Firstname");
var br1=createlinebreak("br");
var input1=createinput("input","type","text","id","Fname");
var br2=createlinebreak("br");

var mname=createlabels("label","for","Mname","Middlename");
var br3=createlinebreak("br");
var input2=createinput("input","type","text","id","Mname");
var br4=createlinebreak("br");

var lname=createlabels("label","for","Lname","Lastname");
var br5=createlinebreak("br");
var input3=createinput("input","type","text","id","Lname");
var br6=createlinebreak("br");

var number=createlabels("label","for","number","Phonenumber");
var br7=createlinebreak("br");
var input4=createinput("input","type","number","id","number");
var br8=createlinebreak("br");


document.body.append(fname,br1,input1,br2,mname,br3,input2,br4,lname,br5,input3,br6,number,br7,input4,br8);




   
