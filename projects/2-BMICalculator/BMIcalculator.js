const form=document.querySelector('form')
// const height=document.querySelector("#height")
// this usecase will give you empty valur

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const height= parseInt(document.querySelector("#height").value);
    const weight= parseInt(document.querySelector("#weight").value);
    const result= document.querySelector("#results");
    if(height==''|| height<0 || isNaN(height))
    {
        result.innerHTML=`plz enter valid height ${height}`
        
    }
    else if(weight==''|| weight<0 || isNaN(weight))
    {
        result.innerHTML=`plz enter valid weight ${weight}`
    }
    else{
       const bmi = (weight / ((height * height) / 10000)).toFixed(2);
       result.innerHTML=`result =${bmi}`
       if (bmi < 18.6)
    {
        result.innerHTML=(`${bmi}<br> you are underweight⚠️`);
        
    }
    else if(bmi<24.9)
    {
       result.innerHTML=(`${bmi} <br> you weight is normal✅`);
    }
    else{
         result.innerHTML=(`${bmi} <br> you are overweight❌`);
    }
    }
    
    
})