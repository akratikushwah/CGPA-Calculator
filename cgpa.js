// onclick Event function call to get all input value.
document.querySelector('#btn_sub').addEventListener('click',() =>{
    // first input value get
    let first_cgpa=document.querySelector('#first_cgpa').value;
 // first input value [5% per] calculation
 let first_cgpa_per=(first_cgpa /100)*5;
 // first input final  value 
 let first_cgpa_per_result=first_cgpa_per.toPrecision(3);
 
 
 
 // two input value get
 let second_cgpa=document.querySelector("#second_cgpa").value;
 // two input value [5% per] calculation
 let second_cgpa_per=(second_cgpa / 100) * 5;
 // two input final  value 
 let second_cgpa_per_result=second_cgpa_per.toPrecision(3);
 
 
 // three input value get
 let third_cgpa=document.querySelector("#third_cgpa").value;
 // three input value [5% per] calculation
 let third_cgpa_per=(third_cgpa / 100) * 5;
 // three input final  value 
 let third_cgpa_per_result=third_cgpa_per.toPrecision(3);
 
 
 // four input value get
 let fourth_cgpa=document.querySelector("#fourth_cgpa").value;
 // four input value [10% per] calculation
 let fourth_cgpa_per=(fourth_cgpa / 100) * 10;
 // four input final  value 
 let fourth_cgpa_per_result=fourth_cgpa_per.toPrecision(3);
 
 
 // five input value get
 let fifth_cgpa=document.querySelector("#fifth_cgpa").value;
 // five input value [15% per] calculation
 let fifth_cgpa_per=(fifth_cgpa / 100) * 15;
 // five input final  value 
 let fifth_cgpa_per_result=fifth_cgpa_per.toPrecision(3);
 
 
 // six input value get
 let sixth_cgpa=document.querySelector("#sixth_cgpa").value;
 // six input value [20% per] calculation
 let sixth_cgpa_per=(sixth_cgpa / 100) * 20;
 // six input final  value 
 let sixth_cgpa_per_result=sixth_cgpa_per.toPrecision(3);
 
 // seven input value get
 let seventh_cgpa=document.querySelector("#seventh_cgpa").value;
 // seven input value [25% per] calculation
 let seventh_cgpa_per=(seventh_cgpa / 100) * 25;
 // seven input final  value 
 let seventh_cgpa_per_result=seventh_cgpa_per.toPrecision(3);
 
 // eight input value get
 let eight_cgpa=document.querySelector("#eighth_cgpa").value;
 // eight input value [15% per] calculation
 let eighth_cgpa_per=(eight_cgpa / 100) * 15;
 // eight input final  value 
 let eighth_cgpa_per_result=eighth_cgpa_per.toPrecision(3);
 
 
 // total final value sum 
 let total =
 parseFloat(first_cgpa_per_result)+
 parseFloat(second_cgpa_per_result)+
 parseFloat(third_cgpa_per_result)+
 parseFloat(fourth_cgpa_per_result)+
 parseFloat(fifth_cgpa_per_result)+
 parseFloat(sixth_cgpa_per_result)+
 parseFloat(seventh_cgpa_per_result)+
 parseFloat(eighth_cgpa_per_result);
 let total_cgpa=total.toPrecision(3);
 // total value show output
 document.querySelector('.cgpa_output h1').innerHTML=`TOTAL CGPA = ${total_cgpa}`
 })
 
 document.querySelector('#btn_re').addEventListener('click',() =>{
   document.querySelector('.cgpa_output h1').innerHTML=`TOTAL CGPA =`
   document.querySelector('#first_cgpa').value='';
   document.querySelector('#second_cgpa').value='';
   document.querySelector('#third_cgpa').value='';
   document.querySelector('#fourth_cgpa').value='';
   document.querySelector('#fifth_cgpa').value='';
   document.querySelector('#sixth_cgpa').value='';
   document.querySelector('#seventh_cgpa').value='';
   document.querySelector('#eighth_cgpa').value='';
 })
 // onclick Event function call reset all input and output value