// validation script here

const inputs=document.querySelectorAll("input");

const patterns={
  telephone:/^\d{11}$/,
  password:/^[\w@-]{8,20}$/,
  username:/^[a-z0-9]{5,12}$/i,
  slug:/^[a-z0-9-]{8,20}$/,
  email:/^([\w\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

}

function validation(field, regex){
  // console.log(regex.test(field.value)); //regex.test()  =>   /^d/.test(5) gibi
  if(regex.test(field.value)){
    field.className="valid";
  }else{
    field.className="invalid"
  }
   
}



inputs.forEach((input)=>{

  input.addEventListener("keyup", (e)=>{
    // console.log(e.target.attributes.name.value);
    validation(e.target, patterns[e.target.attributes.name.value]);
    

    
    
  })  
  
})