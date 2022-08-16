// 1.Get all the countries from the Asia continent /region using the Filter function

var getCountries = () =>
{
    var request = new XMLHttpRequest();
    request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    request.send();
  

    request.onload = function(){
    var result=JSON.parse(request.response);
    console.log(result);
       
    var res=result.filter((ele)=>ele.region =="Asia").map((ele)=>ele.name)
  
        console.log(res)

    }
}

getCountries()

// 2.Get all the countries with a population of less than 2 lakhs using Filter function

var getCountries = () =>
{
    var request = new XMLHttpRequest();
    request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    request.send();
  

    request.onload = function(){
    var result=JSON.parse(request.response);
    console.log(result);
       
    var res=result.filter((ele)=>ele.population<200000).map((ele)=>ele.name)
  
        console.log(res)

    }
}

getCountries()

// 3.Print the following details name, capital, flag using forEach function

var getCountries = () =>
{
    var request = new XMLHttpRequest();
    request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    request.send();
  

    request.onload = function(){
    var result=JSON.parse(request.response);
    console.log(result);
       
    var res=result.forEach((ele)=>{
        console.log`(${ele.name} ${ele.capital} ${ele.flag})`

    });
    
 
    }
}

getCountries()


// 4.Print the total population of countries using reduce function

var getCountries = () =>
{
    var request = new XMLHttpRequest();
    request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    request.send();
  

    request.onload = function(){
    var result=JSON.parse(request.response);
    console.log(result);
      
    var InitialValue=0;
    var res=result.reduce((acc,ele)=>acc+ele.population,InitialValue);
  
        console.log(res)

    }
}

// getCountries()

// 5.Print the country which uses US Dollars as currency.

var getCountries = () =>
{
    var request = new XMLHttpRequest();
    request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    request.send();
  

    request.onload = function(){
    var result=JSON.parse(request.response);
    console.log(result);
      
    var res=result.filter((ele)=>{
        for (var i=0;i<ele.currencies.length;i++){
        if(ele.currencies[i].code =='USD')
        {
            return true
        }
        }
     });
    console.log(res)
 }
}
getCountries()




