$(document).ready(function () {

    $('.navbar .dropdown-item').on('click', function (e) {
        var $el = $(this).children('.dropdown-toggle');
        var $parent = $el.offsetParent(".dropdown-menu");
        $(this).parent("li").toggleClass('open');

        if (!$parent.parent().hasClass('navbar-nav')) {
            if ($parent.hasClass('show')) {
                $parent.removeClass('show');
                $el.next().removeClass('show');
                $el.next().css({"top": -999, "left": -999});
            } else {
                $parent.parent().find('.show').removeClass('show');
                $parent.addClass('show');
                $el.next().addClass('show');
                $el.next().css({"top": $el[0].offsetTop, "left": $parent.outerWidth() - 4});
            }
            e.preventDefault();
            e.stopPropagation();
        }
    });

    $('.navbar .dropdown').on('hidden.bs.dropdown', function () {
        $(this).find('li.dropdown').removeClass('show open');
        $(this).find('ul.dropdown-menu').removeClass('show open');
    });

});
        var parsing_done=0;

          var xVals_1 = [];
              var yVals_1 = [];

              var xVals_2 = [];
              var yVals_2 = [];
              var xVals_3 = [];
              var yVals_3 = [];






              var settings = {
          "url": "https://sd-d7b9ce2e.stardog.cloud:5820/Test/query",
          "method": "POST",
          "timeout": 0,
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Basic VGVzdDoxMjM0NTY3ODkxMjM="
          },
          "data": {
            "query": "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>PREFIX ont: <http://www.semanticweb.org/hp/ontologies/2023/10/untitled-ontology-23#>SELECT ?race (COUNT(?victim) as ?totalDeaths)WHERE {?victim rdf:type ont:Victim.?victim ont:hasRace ?race.}GROUP BY ?race",
            "default-graph-uri": "tag:stardog:designer:Test:data:fatal-police-shootings-data"
          }
        };

        $.ajax(settings).done(function (response) {
          var totalResponse = response.getElementsByTagName("result");
        
          for(var i=0; i<totalResponse.length; i++)
          {
              var xval = totalResponse[i].textContent;
              if(xval[0]=="A")
              {
                var num = parseInt(xval.substring(1),10);
                yVals_1[i] = num;
                xVals_1[i] = "Asian";
              }
              else if(xval[0]=="H")
              {
                var num = parseInt(xval.substring(1),10);
                yVals_1[i] = num;
                xVals_1[i] = "Hispanic";
              }
               if(xval[0]=="W")
              {
                var num = parseInt(xval.substring(1),10);
                yVals_1[i] = num;
                xVals_1.push("White");
              }
               if(xval[0]=="N")
              {
                var num = parseInt(xval.substring(1),10);
                yVals_1[i] = num;
                xVals_1.push("Native-American");
              }
               if(xval[0]=="B")
              {
                var num = parseInt(xval.substring(1),10);
                yVals_1[i] = num;
                xVals_1.push("Black");
              }
               if(xval[0]=="O")
              {
                var num = parseInt(xval.substring(1),10);
                yVals_1[i] = num;
                xVals_1.push("Others");
              }
              
          }
         
                  new Chart(document.getElementById("pie-chart1"), {
              type : 'pie',
              data : {
                labels : xVals_1,
                datasets : [ {
                  backgroundColor : [ "#51EAEA", "#FCDDB0",
                      "#FF9D76", "#FB3569", "#82CD47" ],
                  data : yVals_1
                } ]
              },
              options : {
                title : {
                  display : true,
                  text : 'Race'
                }
              }
            });
          
        });


      



  var settings = {
  "url": "https://sd-d7b9ce2e.stardog.cloud:5820/Test/query",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": "Basic VGVzdDoxMjM0NTY3ODkxMjM="
  },
  "data": {
    "query": "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>PREFIX ont: <http://www.semanticweb.org/hp/ontologies/2023/10/untitled-ontology-23#>SELECT ?gender (COUNT(?victim) as ?totalDeaths)WHERE {?victim rdf:type ont:Victim.?victim ont:hasGender ?gender.}GROUP BY ?gender",
    "default-graph-uri": "tag:stardog:designer:Test:data:fatal-police-shootings-data"
  }
};

$.ajax(settings).done(function (response) { 
  var totalResponse = response.getElementsByTagName("result");
        
          for(var i=0; i<totalResponse.length; i++)
          {
              var xval = totalResponse[i].textContent;
              if(xval[0]=="M")
              {
                var num = parseInt(xval.substring(1),10);
                yVals_2[i] = num;
                xVals_2[i] = "Male";
              }
              else if(xval[0]=="F")
              {
                var num = parseInt(xval.substring(1),10);
                yVals_2[i] = num;
                xVals_2[i] = "Female";
              }
              
          }
          
                  new Chart(document.getElementById("pie-chart2"), {
              type : 'pie',
              data : {
                labels : xVals_2,
                datasets : [ {
                  backgroundColor : [ "#51EAEA", "#FCDDB0",
                      "#FF9D76", "#FB3569", "#82CD47" ],
                  data : yVals_2
                } ]
              },
              options : {
                title : {
                  display : true,
                  text : 'Gender'
                }
              }
            });
           
          
        });

var settings = {
  "url": "https://sd-d7b9ce2e.stardog.cloud:5820/Test/query",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": "Basic VGVzdDoxMjM0NTY3ODkxMjM="
  },
  "data": {
    "query": "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>PREFIX ont: <http://www.semanticweb.org/hp/ontologies/2023/10/untitled-ontology-23#>SELECT ?ageGroup (COUNT(?victim) as ?totalDeaths)WHERE {?victim rdf:type ont:Victim.?victim ont:hasAge ?age.BIND(floor(?age / 10) * 10 as ?ageGroup)}GROUP BY ?ageGroup ORDER BY ?ageGroup",
    "default-graph-uri": "tag:stardog:designer:Test:data:fatal-police-shootings-data"
  }
};

$.ajax(settings).done(function (response) { 
  var totalResponse = response.getElementsByTagName("result");
        
          for(var i=0; i<totalResponse.length; i++)
          {
              var xval = totalResponse[i].getElementsByTagName("literal");
              var deaths = xval[0].innerHTML;
              var age_grp = xval[1].innerHTML;
              if(age_grp=="0")
              {
                yVals_3[i] = parseInt(deaths);
                xVals_3[i] = "0-9";
              }
              else if(age_grp=="10")
              {
                yVals_3[i] = parseInt(deaths);
                xVals_3[i] = "10-19";
              }
              else if(age_grp=="20")
              {
                yVals_3[i] = parseInt(deaths);
                xVals_3[i] = "20-29";
              }
              else if(age_grp=="30")
              {
                yVals_3[i] = parseInt(deaths);
                xVals_3[i] = "30-39";
              }
              else if(age_grp=="40")
              {
                yVals_3[i] = parseInt(deaths);
                xVals_3[i] = "40-49";
              }
              else if(age_grp=="50")
              {
                yVals_3[i] = parseInt(deaths);
                xVals_3[i] = "50-59";
              }
              else if(age_grp=="60")
              {
                yVals_3[i] = parseInt(deaths);
                xVals_3[i] = "60-69";
              }
              else if(age_grp=="70")
              {
                yVals_3[i] = parseInt(deaths);
                xVals_3[i] = "70-79";
              }
              else if(age_grp=="80")
              {
                yVals_3[i] = parseInt(deaths);
                xVals_3[i] = "80-89";
              }
              else if(age_grp=="90")
              {
                yVals_3[i] = parseInt(deaths);
                xVals_3[i] = "90-99";
              }
              
          }
         
                  new Chart(document.getElementById("pie-chart3"), {
              type : 'pie',
              data : {
                labels : xVals_3,
                datasets : [ {
                  backgroundColor : [
                  "#3498db", // Blue
                  "#e74c3c", // Red
                  "#2ecc71", // Green
                  "#f39c12", // Orange
                  "#1abc9c", // Turquoise
                  "#9b59b6", // Purple
                  "#34495e", // Dark Gray
                  "#d35400", // Pumpkin
                  "#27ae60", // Nephritis
                  "#c0392b"  // Alizarin
                ],
                  data : yVals_3
                } ]
              },
              options : {
                title : {
                  display : true,
                  text : 'Age'
                }
              }
            });
        
          
        });





var  whiteToBlackGradients = Array.from({ length: 51 }, (_, index) => {
  var intensity = (index / 50) * 255; 
  var grayValue = Math.round(intensity);
  var hexColor = `#${grayValue.toString(16).padStart(2, '0').repeat(3)}`;
  return hexColor;
});
whiteToBlackGradients.reverse();
console.log(whiteToBlackGradients);


 var dict = {}


 var settings = {
  "url": "https://sd-d7b9ce2e.stardog.cloud:5820/State/query",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": "Basic VGVzdDoxMjM0NTY3ODkxMjM="
  },
  "data": {
    "query": "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>PREFIX ont: <http://www.semanticweb.org/hp/ontologies/2023/10/untitled-ontology-23#>SELECT ?state (COUNT(?victim) as ?totalDeaths)WHERE {?victim rdf:type ont:Victim.?victim ont:involvedAt ?location.?location ont:hasState ?state.}GROUP BY ?state ORDER BY ?state",
    "default-graph-uri": "tag:stardog:designer:Test:data:fatal-police-shootings-data"
  }
};
var pairs_arr=[]
var total=0;
$.ajax(settings).done(function (response) { 
  var totalResponse = response.getElementsByTagName("result");
          console.log(totalResponse.length);
          for(var i=0; i<totalResponse.length; i++)
          {
              var deaths = totalResponse[i].getElementsByTagName("literal")[0].innerHTML;
              var state_str = totalResponse[i].getElementsByTagName("uri")[0].innerHTML;
              
              
              var state = state_str.slice(-2);
              pairs_arr.push([state,deaths]);
             

          }
                  pairs_arr.sort(function(a, b) {
          return a[1] - b[1];
        });
          for(var i=0; i<totalResponse.length; i++)
          {
            var fetched_state = pairs_arr[i][0];
            console.log(fetched_state);
            myEle = document.getElementById(fetched_state);
            console.log(myEle);
            document.getElementById(fetched_state).style.fill = whiteToBlackGradients[i];
            document.getElementById(fetched_state).style.stroke = whiteToBlackGradients[i];
          }
                  
          
          
        });


$("path, circle").hover(function(e) {
  $('#info-box').css('display','block');
  $('#info-box').html($(this).data('info'));
});

$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});

$(document).mousemove(function(e) {
  $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
  $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
}).mouseover();

var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if(ios) {
  $('a').on('click touchend', function() {
    var link = $(this).attr('href');
    window.open(link,'_blank');
    return false;
  });
}


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

var input_race,input_gender,input_age;


 
function submitRace(race) {
  document.getElementsByClassName("dropbtn")[0].style.background = '#dcdcde';
  document.getElementsByClassName("dropbtn")[0].disabled = true;
  input_race = race;
  console.log(input_race);
}

function submitGender(gender) {
  document.getElementsByClassName("dropbtn")[1].style.background = '#dcdcde';
  document.getElementsByClassName("dropbtn")[1].disabled = true;
  input_gender = gender;
  console.log(input_gender);
}

function submitAge(age) {
  document.getElementsByClassName("dropbtn")[2].style.background = '#dcdcde';
  document.getElementsByClassName("dropbtn")[2].disabled = true;
  input_age = age;
  console.log(input_age);
}



var settings = {
  "url": "https://sd-d7b9ce2e.stardog.cloud:5820/State/query",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": "Basic VGVzdDoxMjM0NTY3ODkxMjM="
  },
  "data": {
    "query": "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>PREFIX ont: <http://www.semanticweb.org/hp/ontologies/2023/10/untitled-ontology-23#> SELECT ?name ?age ?gender ?race WHERE { ?victim rdf:type ont:Victim. ?victim ont:hasName ?name. ?victim ont:hasRace ?race. ?victim ont:hasAge ?age. ?victim ont:hasGender ?gender. FILTER (?age >= 0 && ?age <= 99)}",
    "default-graph-uri": "tag:stardog:designer:Test:data:fatal-police-shootings-data"
  }
};
var pairs_arr=[]
var total=0;

var len=0;
var table_race = [];
var table_gender=[];
var table_name = [];
var table_age = [];
$.ajax(settings).done(function (response) { 
  var totalResponse = response.getElementsByTagName("result");
          len = totalResponse.length;
         for(var i=0; i<totalResponse.length; i++)
          {
            
              var new_race = totalResponse[i].getElementsByTagName("literal")[0].innerHTML;
              var new_gender = totalResponse[i].getElementsByTagName("literal")[1].innerHTML;
              var new_name = totalResponse[i].getElementsByTagName("literal")[2].innerHTML;
              var new_age = totalResponse[i].getElementsByTagName("literal")[3].innerHTML;
            
              table_race[i] = new_race;
              table_gender[i] = new_gender;
              table_name[i] = new_name;
              table_age[i] = new_age;            

          }

                  
          
          
        });



function onSubmit(){
    var i=0;

      let table = '<table>';  
      table += '<tr><th>Race</th><th>Gender</th><th>Name</th><th>Age</th></tr>';  

      var low,high;
      var to_ch = input_age;
      if(input_age[1]=='-')
      {
          low = parseInt(input_age[0]);
          high = parseInt(input_age.substring(2));
      }
      else
      {
        low = parseInt(input_age.substring(0,2));
        high = parseInt(input_age.substring(3));
      }
      console.log(low); console.log(high);
    while(i<len) {  
    
      
      if(table_race[i] == input_race && table_gender[i]==input_gender && table_age[i]>=low && table_age[i]<=high)
      {
        table += '<tr>';  
        table += '<td>';
          table+=table_race[i]+'</td><td>'+table_gender[i]+'</td><td>'+table_name[i]+'</td><td>'+table_age[i]+'</td></tr>';
      }


        

      i++;
    }  
    table += '</table>';  
    const tableContainer = document.getElementById('table-container');  
    tableContainer.innerHTML = table;  
}










