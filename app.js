var raceInfo = [
    //   const GPM 2007 #1 = 
    {
        year: 2007,
        race: 1,
        competitors: ["Pietruch", "smyk", "Aro_Kal", "Lomero"],
        position: ["1", "2", "3", "4"]
    },

    //   const GPM 2007 #2 = 
    {
        year: 2007,
        race: 2,
        competitors: ["smyk", "Duke", "Pietruch", "Sariel", "Liwnik"],
        position: ["1", "2", "3", "4", "5"]
    },

    //   const GPM 2007 #3  = 
    {
        year: 2007,
        race: 3,
        competitors: ["Duke", "M. Drwięga", "Pietruch", "smyk", "Sariel"],
        position: ["1", "2", "3", "4", "5"]
    },

    //   const GPM 2007 #4 = 
    {
        year: 2007,
        race: 4,
        competitors: ["Aro_Kal", "Pietruch", "Sariel", "smyk", "Duke"],
        position: ["1", "2", "3", "4", "5"]
    },
    {
        year: 2008,
        race: 1,
        competitors: ["Duke", "smyk", "Aro_Kal", "Lomero", "Pietruch", "Emilus", "Richard"],
        position: ["1", "2", "3", "4", "5", "6", "7"]
    },
    {
        year: 2008,
        race: 2,
        competitors: ["Duke", "smyk", "Aro_Kal", "Emilus", "Sariel"],
        position: ["1", "2", "3", "4", "5"]
    },
    {
        year: 2008,
        race: 3,
        competitors: ["Duke", "smyk", "Emilus", "Lomero", "Richard"],
        position: ["1", "2", "3", "4", "5"]
    },
    {
        year: 2008,
        race: 4,
        competitors: ["smyk", "Duke", "Emilus"],
        position: ["1", "2", "3"]
    },
    {
        year: 2008,
        race: 5,
        competitors: ["Duke", "Emilus", "Lomero", "Skuter", "smyk"],
        position: ["1", "2", "3", "4", "5"]
    },
    {
        year: 2008,
        race: 6,
        competitors: ["Emilus", "Aro_Kal", "Duke", "Lomero"],
        position: ["1", "2", "3", "4"]
    },
    {
        year: 2009,
        race: 1,
        competitors: ["TT", "smyk", "Emilus", "Aro_Kal", "Maniek", "Duke", "Atros"],
        position: ["1", "2", "3", "4", "5", "6", "7"]
    },
    {
        year: 2009,
        race: 2,
        competitors: ["Aro_Kal", "Lomero", "Maniek", "Atros", "smyk", "Duke", "Emilus"],
        position: ["1", "2", "3", "4", "5", "6", "7"]
    }
];

var drawResults = function(rYear, rRace, rPosition, rCompetitor, j) {

    //   var rYear = raceInfo[i].year;
    //   var rRace = raceInfo[i].race;
    var j = j;
    var rPosition = raceInfo[i].position[j];
    var rCompetitor = raceInfo[i].competitors[j];


    // console.info(rYear + " race#" + rRace);
    if (rPosition != undefined) {
        console.info(rPosition + " miejsce: " + rCompetitor);
    }

}


//var mostCompetitors = raceInfo.position.max;

//     for (var i = 0; i < raceInfo.length; i++) {
//       for (var j = 0; j < raceInfo[mostCompetitors].position.length; j++) {
//      drawResults(raceInfo[i].year, raceInfo[i].race, raceInfo[i].position, raceInfo[i].competitors, j);
//       console.log("-------------");
//      } 
//   }

var testCounter = 1;

var test = function() {
    console.log("Test nr: " + testCounter);
    testCounter++;
}

//---------tablica zbierająca z każdego rajdu liczbę uczestników ---------
var howMany = [];

raceInfo.forEach((el) => {
    //test();
    howMany.push(el.position.length);
    console.log("Startowało: " + el.position.length);
});

//---------sprawdzamy maksymalną liczbę uczestników------------------------
var mostCompetitors = Math.max(...howMany);
console.info("Max: " + mostCompetitors);
console.log("----------------------");


//----------pętle wywołujące funkcję wyświetlającą wyniki w konsoli---------   
for (var i = 0; i < raceInfo.length; i++) {
    console.info(raceInfo[i].year + " race#" + raceInfo[i].race);
    for (var j = 0; j < mostCompetitors; j++) {
        drawResults(raceInfo[i].year, raceInfo[i].race, raceInfo[i].position, raceInfo[i].competitors, j);
    }
    console.log("-------------");
}


var showPosition = function(raceNr, who) {
    var idWho = raceInfo[raceNr].competitors.indexOf(who);
    var raceNumber = 1 + parseInt(raceNr);
    var whoPosition = raceInfo[raceNr].position[idWho];
    //console.log(raceInfo[raceNr].competitors.indexOf(who));
    console.log(who + " na rajdzie " + raceNumber + " był " + whoPosition);
}


// wartości testowe wyrażenia funkcyjnego showPosition
showPosition("0", "smyk");
showPosition("1", "smyk");
showPosition("2", "smyk");
showPosition("3", "smyk");
showPosition("4", "smyk");
//showPosition("5", "smyk"); <--wywołanie rajdu którego nie ma wysypuje kod (trzeba dodać obsługę błędów)
showPosition("4", "abc"); // wywołanie zawodnika, który nie istniał daje undefined i kod wykonuje się dalej



var who1Score = 0;
var who2Score = 0;
var draw = 0;

var vs = function(who1, who2) {
    for (var i = 0; i < raceInfo.length; i++) {
        var who1Id = raceInfo[i].competitors.indexOf(who1); //index danego kierowcy w tabeli uczestników danego rajdu[i]
        var who2Id = raceInfo[i].competitors.indexOf(who2); //jw
        var who1Pos = raceInfo[i].position[who1Id]; //pozycja z tabeli wzięta po odpowiadającym indexie z tabeli uczestników
        var who2Pos = raceInfo[i].position[who2Id]; //jw
        var raceCounter = 1 + i;
        console.group();
        console.warn(who1 + " vs " + who2);
        console.log("Race#" + raceCounter + " (" + raceInfo[i].year + " #" + raceInfo[i].race + ")");
        console.log(who1 + " był " + raceInfo[i].position[who1Id], "a " + who2 + " był " + raceInfo[i].position[who2Id]);
        //console.log(who2 + " był " + raceInfo[i].position[who2Id]);
        //console.warn(who2Id);
        //console.error("index danego kierowcy w tabeli uczestników danego rajdu[i] " + raceInfo[i].competitors.indexOf(who1));
        //console.warn(who2Pos);
        //console.warn(i);
        console.groupEnd();
        if (who1Pos && who2Pos !== undefined) {
            if (who1Pos < who2Pos) {
                who1Score++;
            } else if (who2Pos < who1Pos) {
                who2Score++;
            } else {
                draw++;
            }
        }
    }
    console.log("---< Wynik H2H >---");
    console.info(who1 + " wygrał " + who1Score);
    console.info(who2 + " wygrał " + who2Score);
    console.info("remis był: " + draw);
    var compareDisplay = document.getElementById("comparison");
    compareDisplay.innerHTML = "compare test:<br>" +
        who1 + " wygrał " + who1Score + "<br>" +
        who2 + " wygrał " + who2Score + "<br>" +
        "remis był: " + draw;
}


// vs("Aro_Kal","Maniek");//testowe wywołanie funkcji vs 

var competitorsToSelect = [];
for (var i = 0; i < raceInfo.length; i++) {
    competitorsToSelect = competitorsToSelect.concat(raceInfo[i].competitors);
    console.info("pętla nr " + i + ", dodani uczestnicy " + raceInfo[i].competitors);
}
console.info("competitorsToSelect " + competitorsToSelect);

// usuwanie duplkatów do poprawki, sprawdzić j (j czyli kolejny index (plus jeden do aktualnego))
/*  competitorsToSelect.forEach(function(unikat, idOfEl) {
    test();
    console.log("El. wejściowy Unikat " + unikat, idOfEl);
    for (nextEl = 1 + idOfEl; nextEl <= 1 + competitorsToSelect.length; nextEl++) {
      var xToCompare = competitorsToSelect[nextEl];
      console.log("Kolejny nr " + nextEl + " Wartość porównywana " + xToCompare);
      if (xToCompare === unikat) {
         console.warn(xToCompare + " RÓWNE " + unikat);
         console.error("Wycięty duplikat: " + competitorsToSelect.splice (nextEl, 1));
        
        // competitorsToSelect.splice (nextEl, 0);
       }
      else if (xToCompare !== unikat) {
         console.warn(xToCompare + " różne od " + unikat);
         //return;
        
       }
      console.info("Tablica zbiorcza po usunięciu duplikatów " + competitorsToSelect + "Liczba el: " + competitorsToSelect.length);
    }
    console.info("Podsumowanie po usunięciu duplikatów " + competitorsToSelect + "Liczba el: " + competitorsToSelect.length);
  }); */


//----------------------------------------------

Array.prototype.contains = function(v) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === v) return true;
    }
    return false;
};

Array.prototype.unique = function() {
    var arr = [];
    for (var i = 0; i < this.length; i++) {
        if (!arr.contains(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr;
}

// Użycie jest następujące:

// var competitorsToSelect = [1,3,4,2,1,2,3,8];
var uniques = competitorsToSelect.unique(); // result = [1,3,4,2,8]

console.log("Zawodnicy do wyboru: " + uniques + " Jest " + uniques.length + " zawodników do wyboru.");


// source MDN



for (var i = 0; i < uniques.length; i++) {
    function addElement(i) {

        var my_div = null;
        var newDiv = null;
        // tworzy nowy element div 
        // i daje jego zawartość 
        newDiv = document.createElement("option");
        newDiv.innerHTML = uniques[i];

        // add the newly created element and it's content into the DOM
        my_div = document.getElementById("przykladowySelect");
        my_div.appendChild(newDiv);


        //                console.log(my_div);
        //                console.log(newDiv);
    }
    addElement(i);
}

//----------------------------------------------------
var select = document.getElementById("przykladowySelect");

var statsDisplay = document.getElementById("stats");
//     function statsDisplay(selectedText) {
//         statsDisplay.innerHTML("stats test" + selectedText);
//     }
var showSelectedTruckerAndDisplayStats = function showSelectedTruckerAndDisplayStats() {
    console.log("startuejmy");
    var select = document.getElementById("przykladowySelect");
    var selectedOption = select.options[select.selectedIndex];
    var selectedText = selectedOption.text; // 'dane'
    var selectedValue = selectedOption.value; // 'wartość'

    var showSelect = function showSelect() {
        console.log("Wybrano zawodnika " + selectedText);
        //  return selectedText;
    }
    showSelect();

    //------statsDisplay---------
    var showMeStats = function showMeStats(raceInfo) {
        var raceInfo = raceInfo;
        console.warn("Czy przekazał zawodnika? " + selectedText);
        console.error("Czy przekazał rajdy? " + raceInfo);



        //--------------pętla zliaczająca pozycje do statystyk----------

        var absent = 0;

        var winner = 0;
        var second = 0;
        var third = 0;
        var podium = 0;
        var furtherPlaces = 0;
        var competed = 0;
        var frequency = 0;
        var miejsca = [];
        var numOfParticipants = [];


        for (var i = 0; i < raceInfo.length; i++) {
            console.log("W pętli " + raceInfo[i].position);
            console.log(selectedText);
            var raceInfo = raceInfo;
            var i = i;
            var chosenIndex = raceInfo[i].competitors.indexOf(selectedText);
            var positionToPush = raceInfo[i].position[chosenIndex];
            var numOfParticipantsToPush = raceInfo[i].position.length;

            if (positionToPush != undefined) {
                miejsca.push(positionToPush);
                numOfParticipants.push(numOfParticipantsToPush);
            }
            // var selectedText = selectedText;
            if (raceInfo[i].position[chosenIndex] == 1) {

                winner++;
                competed++;
                podium++;
            } else if (raceInfo[i].position[chosenIndex] == 2) {
                second++;
                competed++;
                podium++;
            } else if (raceInfo[i].position[chosenIndex] == 3) {
                third++;
                competed++;
                podium++;
            } else if (raceInfo[i].position[chosenIndex] == undefined) {
                absent++;
            } else {
                console.log("Zawodnik " + selectedText);
                console.warn("Dalsze miejsce " + raceInfo[i].position[chosenIndex] + " na " + raceInfo[i].position.length);


                furtherPlaces++;
                competed++;
            }
        }

        //-------statystyki procentowe wyliczane po warunkach zliczających----
        var frequency = competed / raceInfo.length;
        var winsPct = winner / competed;
        var podiumPct = podium / competed;
        //                var sumOfPos = 0;
        //                var sumOfComp = 0;

        var fSumOfComp = function su(numOfParticipants) {
            var sumOfComp = 0;
            for (var i = 0; i < numOfParticipants.length; i++) {
                sumOfComp = sumOfComp + parseInt(numOfParticipants[i]);
                console.warn("wewnetrzny Test funkcji su " + sumOfComp);
            }
            console.error("Czy poza petlą jest co przekazać? " + sumOfComp);
            return sumOfComp;
        }

        var fSumOfPos = function suma(miejsca) {
            var sumOfPos = 0;
            for (var i = 0; i < miejsca.length; i++) {
                sumOfPos = sumOfPos + parseInt(miejsca[i]);
                console.error("Test funkcji suma " + sumOfPos + " wsad: " + miejsca);
            }
            return sumOfPos;
        }




        var per = function per(fSumOfPos, fSumOfComp) {
            var positionPerNumOfCompetitors = fSumOfPos(miejsca) / fSumOfComp(numOfParticipants);
            return positionPerNumOfCompetitors;
        }


        var statsDisplay = document.getElementById("stats");
        statsDisplay.innerHTML =
            "wystartował " + competed + "<br>" +
            "nie startował " + absent + "<br>" +
            "frekwencja " + frequency.toFixed(3) * 100 + "%<br>" +
            "pierwszy " + winner + "<br>" +
            "drugi " + second + "<br>" +
            "trzeci " + third + "<br>" +
            "na podium " + podium + "<br>" +
            "procent wygranych " + winsPct.toFixed(3) * 100 + "%<br>" +
            "procent na podium " + podiumPct.toFixed(3) * 100 + "%<br>" +
            "dalsze miejsce " + furtherPlaces + "<br>" +
            "rajd po rajdzie " + miejsca + "<br>" +
            "a startowało " + numOfParticipants + "<br>" +
            "pozycja na liczbę startujących " + per(fSumOfPos, fSumOfComp).toFixed(3);

    }
    showMeStats(raceInfo);

    function truckersToCompare() {
        var select = document.getElementById("przykladowySelect");
        var selectedOption = select.options[select.selectedIndex];
        var selectedText = selectedOption.text;
        var idOfSelected = uniques.indexOf(selectedText);
        var avilableToCompare = [];
        avilableToCompare = uniques.filter(function(el) {
            return el != selectedOption.text;
        });
        console.log("możliwi do porównania " + avilableToCompare + " | " + avilableToCompare.length + " zaznaczone " + idOfSelected);
        return avilableToCompare;
    }
    console.log("Sprawdzam możliwości porównania: " + truckersToCompare());


    //polyfill dla przeglądarek nie obsługujących closest
    if (!Element.prototype.remove) {
        Element.prototype.remove = function() {
            this.parentElement.removeChild(this);
        }
    }

    var selectToClear = document.getElementById("selectoToCompare");

    while (selectToClear.firstChild) {
        selectToClear.removeChild(selectToClear.firstChild);
    }
    //--------------pętla dodające option do selecta 
    for (var i = 0; i < truckersToCompare().length; i++) {
        function addEl(i) {

            var my_div = null;
            var newDiv = null;
            // tworzy nowy element div 
            // i daje jego zawartość 


            newDiv = document.createElement("option");
            newDiv.innerHTML = truckersToCompare()[i];

            // add the newly created element and it's content into the DOM
            my_div = document.getElementById("selectoToCompare");
            my_div.removeChild
            my_div.appendChild(newDiv);


            //                console.log(my_div);
            //                console.log(newDiv);
        }
        addEl(i);
    }

    function twoToCompare() {
        var who1 = selectedText;
        var select2 = document.getElementById("selectoToCompare");
        var selectedOption2 = select.options[select.selectedIndex];
        var selectedText2 = selectedOption2.text;
        //      var idOfSelected2 = avilableToCompare.indexOf(selectedText2);
        var who2 = selectedText2;
        return who1;
    }
    console.log("AAAAA " + twoToCompare());
}


var selectedSelect = select.getElementsByTagName("option");

var showStatsBtn = document.getElementById("showStatsBtn");
//     showStatsBtn.addEventListener("click", showSelect, true);
//     showStatsBtn.addEventListener("click", showMeStats, true);
showStatsBtn.addEventListener("click", showSelectedTruckerAndDisplayStats, true);




//   var showComparison = function showComparison() {
var compareDisplay = document.getElementById("comparison");

function twoToCompare() {
    var who1 = twoToCompare();
    var select2 = document.getElementById("selectoToCompare");
    var selectedOption2 = select.options[select.selectedIndex];
    var selectedText2 = selectedOption2.text;
    var who2 = selectedText2;
}
console.log("AAAAA " + who1 + who2);
compareDisplay.innerHTML = "compare test: " + who1Score + " vs " + who2Score;
}

var compareBtn = document.getElementById("compareBtn");
compareBtn.addEventListener("click", vs, true); // druga opcja to funkcja showComparison

//-----------z kursu o formularzach: http://kursjs.pl/kurs/formularze/formularze.php----
const selectA = document.getElementById("przykladowySelect");

selectA.addEventListener('change', function() {
    var who1 = this.options[this.selectedIndex].value;
    console.error('Wybrałeś: ' + this.options[this.selectedIndex].value);
    vs(who1);
});


const selectB = document.getElementById("selectoToCompare);

        selectB.addEventListener("change", function() {
            var who2 = this.options[this.selectedIndex].value;
            console.error('Wybrałeś: ' + this.options[this.selectedIndex].value);
            vs(who2);
        });



        //    var selectFirstTrucker = document.getElementById("przykladowySelect");
        //     var xListener = selectFirstTrucker.options.selectedIndex;
        //    xListener.addEventListener("onchange", test, false); 

        //     for (i = 0; i < selectedSelect.length; i++) {
        //         var selectedOption = select.options[select.selectedIndex];
        //         var className = "opt";
        //         var opt = className[i];
        //         selectedOption.classList.add(opt);
        //        selectedSelect[i].addEventListener("click", showSelect(), true);
        //     }

        //    selectedSelect.forEach(function(el, i) {
        //        selectedSelect[i].addEventListener("click", showSelect(el));
        //    });
        //--------------------------
        /*   select.options[select.selectedIndex].value.onchange = function() {
              console.log(select.options[select.selectedIndex].value);
           }*/
        //--------------------------------------------------

        //raceInfo.forEach(test(value, index, ar)[raceInfo])

        //   tab.forEach(function(el) {
        //    //pod zmienną el kolejno trafi się Marcin, Ania i Agnieszka
        //    console.log(el.toUpperCase()); //MARCIN, ANIA, AGNIESZKA
        //});