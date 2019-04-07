import './style.scss';

// <!------------------to Do------------------------------->
// <!--
// 1) sorting of options in select abcd DONE
// 2) languages
// 3) avatars for truckers
// 4) wywołanie f. showPosition z argumentem (nr rajdu), którego nie ma wysypuje kod (trzeba dodać obsługę błędów) DONE
// 5) przerobienie wypisu statystk z użyciem template strings i poprawienie adresacji odkrywanego guzikiem pola #racebyrace
// - uzależnić od indexu
// -->

const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const response = JSON.parse(xhttp.responseText);
        const raceInfo = response.raceInfo;

        //console.info("race INFO", raceInfo);
        //=============diagnostyka danych z rajdami===================
        function dataCheck() {
            let nrOfCorrectRaces = 0;
            for (let i = 0; i < raceInfo.length; i++) {

                if (raceInfo[i].competitors.length === raceInfo[i].position.length) {
                    nrOfCorrectRaces++;
                }
                else {
                    console.error("Błędny index " + i + " Rok " + raceInfo[i].year + " rajd " + raceInfo[i].race)
                }
            }
            //console.log("--------------------\n" + nrOfCorrectRaces + " poprawnych rajdów\n" + "--------------------");
        }

        dataCheck();


        //---------deklaracja funkcji odpowiedzialnej za wyświetlanie wyników w konsoli
        const drawResults = function(rYear, rRace, rPosition, rCompetitor) {
        if (rPosition !== undefined) {
                console.info(rPosition + " miejsce: " + rCompetitor);
            }
        };


        //---------tablica zbierająca z każdego rajdu liczbę uczestników ---------
        let howMany = [];
            
        raceInfo.forEach((el) => {
            howMany.push(el.position.length);
            console.log(el.year + "#" + el.race + " startowało: " + el.position.length);
        });


        //---------sprawdzamy maksymalną liczbę uczestników------------------------
        const mostCompetitors = Math.max(...howMany);
        console.info("%cRekordowa liczba uczestników: " + mostCompetitors, "font-weight: 700;");


        //----------pętle wywołujące funkcję wyświetlającą wyniki w konsoli---------   
        const drawingResultsLoops = function () {
            for (let i = 0; i < raceInfo.length; i++) {
                console.log("%c" + raceInfo[i].year + " race#" + raceInfo[i].race, "font-size: 14px;");

                for (let j = 0; j < mostCompetitors; j++) {
                    drawResults(raceInfo[i].year, raceInfo[i].race, raceInfo[i].position[j], raceInfo[i].competitors[j]);
                }
                console.log("----------------");
            }
        };

        drawingResultsLoops();
        
        //------------------wyświetlanie pozycji zawodnika w konsoli------------
        const showPosition = function(raceNr, who) {
            if (raceNr < raceInfo.length) {
                let idWho = raceInfo[raceNr].competitors.indexOf(who);
                let raceNumber = 1 + parseInt(raceNr);
                let whoPosition = raceInfo[raceNr].position[idWho];
                if (whoPosition === undefined) {
                    console.log(who + " w tym rajdzie nie startował.");
                }
                else {
                    console.log(who + " na rajdzie " + raceNumber + " był " + whoPosition);
                }
            }
            else {
                console.log("Tego rajdu jeszcze nie było.");
            }
        };

        //------------pobranie selectów i innych elementów strony --------------
        const selects = document.getElementsByTagName("select");
        // const selectedOption1 = selects[0].options[selects[0].selectedIndex];
        // const selectedOption2 = selects[1].options[selects[1].selectedIndex];


        //-----------dodanie nasłuchu do selectów-----------------------
        for (let i = 0; i < selects.length; i++) {
            selects[i].addEventListener("blur", function() {
                //let who = this.options[this.selectedIndex].value;

                let context = this;
                //console.error('Wybrałeś: ' + this.options[this.selectedIndex].value);
                showSelectedTruckerAndDisplayStats(context, i);

                clearingComparison();

                //console.log(this);
                if (this.id === "firstSelect") {
                    //console.log("trzeba wywołać dodatkową funkcję do stworzenia listy oponentów");
                    prepareSecondSelect();
                }
            });
        }

        for (let i = 0; i < selects.length; i++) {
            selects[i].addEventListener("change", function() { //do zrobienia: DRY
                //let who = this.options[this.selectedIndex].value;

                let context = this;
                //console.error('Wybrałeś: ' + this.options[this.selectedIndex].value);
                showSelectedTruckerAndDisplayStats(context, i);

                clearingComparison();

                //console.log(this);
                if (this.id === "firstSelect") {
                    //console.log("trzeba wywołać dodatkową funkcję do stworzenia listy oponentów");
                    prepareSecondSelect();
                }
            });
        }


        //------------tworzymy tablicę ze wszystkich pojedyńczych występów na rajdzie-------------------
        
        let competitorsToSelect = [];
        for (let i = 0; i < raceInfo.length; i++) {
            competitorsToSelect = competitorsToSelect.concat(raceInfo[i].competitors);
            //console.info("pętla nr " + i + ", dodani uczestnicy " + raceInfo[i].competitors);
        }
        //console.info("competitorsToSelect " + competitorsToSelect);
        
        //-------pozostawienie unikatów z tablicy competitorsToSelect za pomocą roszerzeń prototypu tablic, posortowanie----------------------

        const uniques = competitorsToSelect.unique().sort();
            
        //console.log("Zawodnicy do wyboru: " + uniques + " Jest " + uniques.length + " zawodników do wyboru.");

        addingSelects(uniques, 0); //wypełnienie firstSelect kierowcami z tablicy uniques


        /*------------funkcja do wyświetlania statystyk pierwszego zawodnika i... generująca opcje wyboru do drugiego selecta (warto wydzielić)---------*/
        const showSelectedTruckerAndDisplayStats = function showSelectedTruckerAndDisplayStats(context, indexOfSelect) {
                //console.log("startujemy");
                //let who = context.options[context.selectedIndex].value;
                //var select = document.getElementById("firstSelect");
                let select = context;
                let selectedOption = select.options[select.selectedIndex];
                const selectedText   = selectedOption.text;  // 'dane'
                //const selectedValue  = selectedOption.value; // 'wartość'"
                //console.log(">>>>>>" + who, selectedText, selectedValue);
            
                // const showSelect = function showSelect() {
                //      console.log("Wybrano zawodnika " + selectedText);
                // };
                // showSelect();
            
                //------statsDisplay---------
                const showMeStats = function showMeStats(raceInfo) {

                    //var raceInfo = raceInfo;
                    //console.warn("Czy przekazał zawodnika? " + selectedText);
                    //console.error("Czy przekazał rajdy? " + raceInfo);


                    //--------------pętla zliaczająca pozycje do statystyk----------
                    let absent = 0;
                    let winner = 0;
                    let second = 0;
                    let third = 0;
                    let podium = 0;
                    let furtherPlaces = 0;
                    let competed = 0;
                    //let frequency = 0;
                    let miejsca = [];
                    let numOfParticipants = [];
                    let posPerContestants = [];
                    let winsAgainstOthersTab = [];
                    let winsTabLength = winsAgainstOthersTab.length;
                    

                    for (let i = 0; i < raceInfo.length; i++) {
                        //console.log("W pętli " + raceInfo[i].position);
                        // console.log(selectedText);
                        // var raceInfo = raceInfo;
                        // var i = i;
                        let raceNr = i + 1;
                        let chosenIndex = raceInfo[i].competitors.indexOf(selectedText);
                        let positionToPush = raceInfo[i].position[chosenIndex];
                        let numOfParticipantsToPush = raceInfo[i].position.length;
                        let winsAgainstOthersRate = (numOfParticipantsToPush - positionToPush)/(numOfParticipantsToPush - 1);
                        winsTabLength = winsAgainstOthersTab.length;
                        
                        if (positionToPush != undefined) {
                            miejsca.push(positionToPush);
                            numOfParticipants.push(numOfParticipantsToPush);
                            /*--new--*/
                            let posPerCont = "";
                            posPerCont += " (Race " + raceNr + ": " + positionToPush + "/" + numOfParticipantsToPush + ")";
                            posPerContestants.push(posPerCont);
                            //   ======
                            winsAgainstOthersTab.push(winsAgainstOthersRate);
                        }

                        if (raceInfo[i].position[chosenIndex] == 1) {
                            winner++;
                            competed++;
                            podium++;
                        } 
                        else if (raceInfo[i].position[chosenIndex] == 2) {
                            second++;
                            competed++;
                            podium++;
                        }
                        else if (raceInfo[i].position[chosenIndex] == 3) {
                            third++;
                            competed++;
                            podium++;
                        }
                        else if (raceInfo[i].position[chosenIndex] == undefined) {
                            absent++;
                        }
                        else {
                            //console.log("Wybrany zawodnik: " + selectedText);
                            //console.warn(`Rajd ${raceNr}: dalsze miejsce :( ${raceInfo[i].position[chosenIndex]} na ${raceInfo[i].position.length}`);
                            furtherPlaces++;
                            competed++;
                        }
                    }
                    
                    //-------statystyki procentowe wyliczane po warunkach zliczających----

                    let frequency = competed/raceInfo.length*100;
                    let winsPct = winner/competed*100;
                    let podiumPct = podium/competed*100;
                    
                    let fSumOfComp = function su(numOfParticipants) {
                        let sumOfComp = 0;

                        for(let i = 0; i < numOfParticipants.length; i++) { 
                            sumOfComp = sumOfComp + parseInt(numOfParticipants[i]); 
                            // console.warn("wewnetrzny Test funkcji su " + sumOfComp);
                        }
                        //console.error("Czy poza petlą jest co przekazać? " + sumOfComp);
                        return sumOfComp; 
                    };
                    
                    let fSumOfPos = function suma(miejsca) {
                        let sumOfPos = 0;

                        for(let i = 0; i < miejsca.length; i++) { 
                            sumOfPos = sumOfPos + parseInt(miejsca[i]); 
                            //console.error("Test funkcji suma " + sumOfPos + " wsad: " + miejsca);
                        }
                        return sumOfPos; 
                    };


                    let per = function per(fSumOfPos, fSumOfComp) {
                        let positionPerNumOfCompetitors = fSumOfPos(miejsca)/fSumOfComp(numOfParticipants);
                        
                        return positionPerNumOfCompetitors;
                    };

                    let onceOrMore = function(toEstimate, toDisplay) {
                        if (toEstimate >= 1) {
                            return ` x${toDisplay}`;
                        } else {
                            return "";
                        }
                    };

                    let winsRate = function(winsAgainstOthersTab, winsTabLength) {
                        let winsRateSum  = winsAgainstOthersTab.reduce( (prev, cur) => {
                            //console.log("WINS RATE------------------", winsAgainstOthersTab, winsTabLength)
                            return prev + cur;
                        });

                        return winsRateSum / winsTabLength;
                    }


                    let indexOfStatsContainer = 1 + indexOfSelect;
                    let nameOfStatsContainer = "stats" + indexOfStatsContainer;
                    let raceContainerNr = "race-by-race" + indexOfStatsContainer;  
                    
                    const statsDisplay = document.getElementById(nameOfStatsContainer);
                    const st = "<div class=\"row no-gutters\"><div class=\"col-sm-7\">";
                    const mid = "</div><div class=\"col-sm-5\">";
                    const end = "</div></div>";

                    const chart = 
                        `<svg viewBox="0 0 64 64" class="pie">
                            <circle r="25%" cx="50%" cy="50%" style="stroke-dasharray: ${winsRate(winsAgainstOthersTab, winsTabLength).toFixed(3)*100}, 100; stroke-dashoffset: 0; animation-delay: .2s">
                            </circle>
                        </svg>`;

                    //   ${st} nie startował ${mid} ${absent} ${end}  
                    //   ${st} pozycja na liczbę startujących ${mid} <span>${per(fSumOfPos, fSumOfComp).toFixed(3)}</span> ${chart}${end}
                    
                    statsDisplay.innerHTML = 
                        `${st} wystartował ${mid} ${competed} x&#127937;${end}
                        ${st} frekwencja ${mid} ${frequency.toFixed(3)} % ${end}
                        ${st} pierwszy ${mid} ${winner} ${onceOrMore(winner, "&#129351;")}${end}
                        ${st} drugi ${mid} ${second} ${onceOrMore(winner, "&#129352;")}${end}
                        ${st} trzeci ${mid} ${third} ${onceOrMore(winner, "&#129353;")}${end} 
                        ${st} na podium ${mid} ${podium} ${end}
                        ${st} procent wygranych ${mid} ${winsPct.toFixed(3)} % ${end}
                        ${st} procent na podium ${mid} ${podiumPct.toFixed(3)} % ${end}
                        ${st} dalsze miejsce ${mid} ${furtherPlaces} ${end} 
                        ${st} % wygranych przeciwko innym startującym ${mid} ${winsRate(winsAgainstOthersTab, winsTabLength).toFixed(3)} ${chart}${end} 
                        <div class=\"row no-gutters\"><div class=\"col-sm-9\">rajd po rajdzie (miejsce/liczba startujących)</div>
                        <div class=\"col-sm-3\"><button class=\"btn btn-secondary btn-sm\" type=\"button\" data-toggle=\"collapse\" data-target=\"#${raceContainerNr}\" aria-expanded=\"false\" aria-controls=\"${raceContainerNr}\">Show/hide</button></div>
                        <div class=\"collapse\" id=\"${raceContainerNr}\"> ${posPerContestants}</div>`;
                };

                showMeStats(raceInfo);
            };

        //--- sparametryzowane dodawanie selectów ---------------------
        function addingSelects(truckersTab, selectToFill) {
            for(let i = 0; i < truckersTab.length; i++) {
                function addOption(i) {
                    let mySelect = null;
                    let newElOption = null;
                    newElOption = document.createElement("option");
                    newElOption.innerHTML = truckersTab[i];
                    //console.warn(selects[selectToFill]);

                    mySelect = selects[selectToFill];
                    mySelect.appendChild(newElOption);
                }
                addOption(i);
            }
        }

        //-----------------przygotowanie listy oponentów możliwych do porównania-----------
        function truckersToCompare() {
            let selectedOption = selects[0].options[selects[0].selectedIndex];
            let selectedText = selectedOption.text;
            //let idOfSelected = uniques.indexOf(selectedText);
            let avilableToCompare =[];
            avilableToCompare = uniques.filter(function(el) {
                return el != selectedOption.text;
            });
            return avilableToCompare;
        }
        //console.log("Sprawdzam możliwości porównania: " + truckersToCompare());


        //-----------------dodanie optionow do drugiego selecta-----------
        const prepareSecondSelect = function () {
            const selectToClear = selects[1];

            while (selectToClear.firstChild) {
                selectToClear.removeChild(selectToClear.firstChild);
            }

            addingSelects(truckersToCompare(), 1); //--wypełnienie SelectoToCompare kierowcami z tablicy avilableToCompare
        };

        //------------deklaracja wyrażenia funkcyjnego czyszczącego kontener porównania---------------
        const clearingComparison = function () {
            const compareContainer = document.getElementById("comparison");
            compareContainer.innerHTML = "";
        };

        
        /* funkcja do porównywania wyników zawodników - wymaga sprawdzenia-------------------*/
        const vs = function() {
            const compareDisplay = document.getElementById("comparison");
            if (compareDisplay.firstChild === null) {
                //var select1 = document.getElementById("firstSelect");
                let selectedOption1 = selects[0].options[selects[0].selectedIndex];

                let selectedText1 = selectedOption1.text;
                let who1 = selectedText1;
                
                //var select2 = document.getElementById("selectoToCompare");
                let selectedOption2 = selects[1].options[selects[1].selectedIndex];
                let selectedText2 = selectedOption2.text;
                let who2 = selectedText2;
                
                let who1Score = 0;
                let who2Score = 0;
                let draw = 0;

                

                // --- chart variables ---
                let chartPoints1 = "";
                let chartPoints2 = "";
                let chartPointsNrOfDrivers = "";
                let oneRaceWidth = window.innerWidth / raceInfo.length;
                let svgHeight = 200;

                let positionPoint1MarkerTab = [];
                let positionPoint2MarkerTab = [];

                //-------SVG-----------------
                let chartWrapper = document.createElement("div");
                chartWrapper.classList.add("chart-wrapper");
                let chartBg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

                //chartBg.setAttribute("width", window.innerWidth);
                //chartBg.setAttribute("height", 100);
                //chartBg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                chartBg.setAttribute("version", "1.1");
                chartBg.classList.add("chart-bg");



                compareDisplay.appendChild(chartWrapper);
                //-------------------------------

                for (let i = 0; i < raceInfo.length; i++) {
                    let who1Id = raceInfo[i].competitors.indexOf(who1);//index danego kierowcy w tabeli uczestników danego rajdu[i]
                    let who2Id = raceInfo[i].competitors.indexOf(who2); //jw
                    let who1Pos = parseInt(raceInfo[i].position[who1Id]) || undefined;//pozycja z tabeli wzięta po odpowiadającym indexie z tabeli uczestników
                    let who2Pos = parseInt(raceInfo[i].position[who2Id]) || undefined;//jw
                    let numberOfCompetitors = raceInfo[i].competitors.length;
                    let raceCounter = i + 1;

                    let positionPerCompetitors1 = (numberOfCompetitors - who1Pos) / (numberOfCompetitors - 1);
                    let positionPerCompetitors2 = (numberOfCompetitors - who2Pos) / (numberOfCompetitors - 1);

                    let milage = (i) * oneRaceWidth;

                    chartPoints1 += `${milage}, ${who1Pos !== undefined ? positionPerCompetitors1 * numberOfCompetitors * 10 : 0} `;
                    // chartPoints1 += `${milage}, ${who1Pos !== undefined ? winsAgainstOthersTab[i] * svgHeight : 0} `;
                    chartPoints2 += `${milage}, ${who2Pos !== undefined ? positionPerCompetitors2 * numberOfCompetitors * 10 : 0} `;
                    chartPointsNrOfDrivers += `${milage}, ${numberOfCompetitors * 10} `;

 
                    let y1 = positionPerCompetitors1 * numberOfCompetitors * 10;
                    let y2 = positionPerCompetitors2 * numberOfCompetitors * 10;
                    let cordinates1 = `left: ${milage+5}px; top: ${y1+5}px;`;
                    let cordinates2 = `left: ${milage+5}px; top: ${y2+5}px;`;

                    function genTooltip(who, cordinates, whoPos) {
                        let tooltip = document.createElement("span");
                        tooltip.classList.add("tip");
                        tooltip.classList.add("hidden");
                        tooltip.setAttribute("style", cordinates);
                        tooltip.setAttribute("data-who", who);
                        tooltip.setAttribute("data-id", i);
                        tooltip.innerText = `Na rajdzie ${raceInfo[i].series}#${raceInfo[i].race}/${raceInfo[i].year} ${who} zajął ${whoPos} miejsce (na ${numberOfCompetitors} startujących)`;
                        chartWrapper.appendChild(tooltip);
                    }

                    if (who1Pos !== undefined) {
                        
                        const positionPoint1Marker = {
                            cx: milage,
                            cy: y1,
                            id: i,
                            position: who1Pos,
                            race: i + 1,
                            who: who1
                        }

                        positionPoint1MarkerTab.push(positionPoint1Marker);

                        genTooltip(who1, cordinates1, who1Pos);
                    } else {
                        positionPoint1MarkerTab.push(null);
                    }

                    if (who2Pos !== undefined) {
                        const positionPoint2Marker = {
                            cx: milage,
                            cy: y2,
                            id: i,
                            position: who2Pos,
                            race: i + 1,
                            who: who2
                        }

                        positionPoint2MarkerTab.push(positionPoint2Marker);

                        genTooltip(who2, cordinates2, who2Pos);
                    } else {
                        positionPoint2MarkerTab.push(null);
                    }

                    // if (positionPoint1Marker !== undefined) {
                    //     chartBg.appendChild(positionPoint1Marker);
                    // }

                    // if (positionPoint2Marker !== undefined) {
                    //     chartBg.appendChild(positionPoint2Marker);
                    // }

                    if (raceInfo[i].position[who1Id] !== undefined || raceInfo[i].position[who2Id] !== undefined) {
                        console.group();
                        console.warn(who1 + " vs " + who2);
                        console.log("Race#" + raceCounter + " (" + raceInfo[i].year + " #" + raceInfo[i].race + ")");
                        // if (raceInfo[i].position[who1Id] === undefined) {
                        //     console.log(who1 + " nie startował, a " + who2 + " był " + raceInfo[i].position[who2Id]);
                        //     let result1 = document.createElement("div");
                        //     result1.classList.add("col-sm-12", "bg-dark", "text-light");
                        //     result1.innerText += `Na ${raceInfo[i].race} rajdzie w ${raceInfo[i].year} ${who1} nie startował, a ${who2} był ${raceInfo[i].position[who2Id]}`;
                        //     compareDisplay.appendChild(result1);
                        // }
                        // else if (raceInfo[i].position[who2Id] === undefined) {
                        //     console.log(who1 + " był " + raceInfo[i].position[who1Id] + ", a " + who2 + " nie startował.");
                        //     let result1 = document.createElement("div");
                        //     result1.classList.add("col-sm-12", "bg-dark", "text-light");
                        //     result1.innerText += `Na ${raceInfo[i].race} rajdzie w ${raceInfo[i].year} ${who2} nie startował, a ${who1} był ${raceInfo[i].position[who1Id]}`;
                        //     compareDisplay.appendChild(result1);
                        // }
                        // else {
                        //     console.log(who1 + " był " + raceInfo[i].position[who1Id] + ", a " + who2 + " był " + raceInfo[i].position[who2Id]);
                        //     let result1 = document.createElement("div");
                        //     result1.classList.add("col-sm-12", "bg-dark", "text-light");
                        //     result1.innerText += `Na ${raceInfo[i].race} rajdzie w ${raceInfo[i].year} ${who1} był ${raceInfo[i].position[who1Id]}, a ${who2} był ${raceInfo[i].position[who2Id]}`;
                        //     compareDisplay.appendChild(result1);
                        // }
                        console.groupEnd();
                    }


                    if (who1Pos && who2Pos !== undefined) {
                        if (who1Pos < who2Pos) {
                            //console.warn("if ", i, who1Score, who2Score, who1Pos, who2Pos);
                            who1Score++;
                            //console.error(i, who1Score, who2Score, who1Pos, who2Pos);
                        }
                        else if (who2Pos < who1Pos) {
                            //console.warn("else if ", i, who1Score, who2Score, who1Pos, who2Pos);
                            who2Score++;
                            //console.error(i, who1Score, who2Score, who1Pos, who2Pos);
                        }
                        else {
                            //console.warn("else ", i, who1Score, who2Score, who1Pos, who2Pos);
                            draw++;
                            //console.error(i, who1Score, who2Score, who1Pos, who2Pos);
                        }
                    }
                }

                // --- dodanie wykresów po pętli generującej ---
                let lineA = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
                lineA.classList.add("chart-line-a");
                lineA.setAttribute("points", chartPoints1);
                chartBg.appendChild(lineA);

                let lineB = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
                lineB.classList.add("chart-line-b");
                lineB.setAttribute("points", chartPoints2);
                chartBg.appendChild(lineB);

                let lineAll = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
                lineAll.classList.add("chart-line-all");
                lineAll.setAttribute("points", chartPointsNrOfDrivers);
                chartBg.appendChild(lineAll);

                //----------------funkcja rysująca markery pozycji zawodników na podstawie obiektów w tablicy-------------

                function drawMarkers(tab, r, strokeColor, fillColor, cssClass) {
                    function drawSingleMarker(item) { 
                        if (item !== null) {
                            console.log("Rysujmy kołka");
                            let positionPointMarker = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                            positionPointMarker.setAttribute("cx", item.cx);
                            positionPointMarker.setAttribute("cy", item.cy);
                            positionPointMarker.setAttribute("r", r);
                            positionPointMarker.setAttribute("stroke", strokeColor);
                            // positionPoint1.setAttribute("fill", "transparent");
                            positionPointMarker.setAttribute("fill", fillColor);
                            positionPointMarker.setAttribute("stroke-innerWidth", "5");
                            positionPointMarker.setAttribute("data-position", item.position);
                            positionPointMarker.setAttribute("data-race", item.race);
                            positionPointMarker.setAttribute("data-who", item.who);
                            positionPointMarker.setAttribute("data-id", item.id);
                            positionPointMarker.classList.add(cssClass);
                            chartBg.appendChild(positionPointMarker);
                        } else {
                            console.log("Zawodnik nie startował");
                        }
                    }

                    tab.forEach(drawSingleMarker);
                }

                drawMarkers(positionPoint1MarkerTab, 7, "rgb(212, 9, 26)", "rgb(212, 9, 26)", "chart-point-a"); // rysuj wskazniki dla pierwszego kierowcy: f.(tab, r, strokeColor, fillColor, cssClass)
                drawMarkers(positionPoint2MarkerTab, 5, "rgb(2, 3, 65)", "rgb(2, 3, 65)", "chart-point-b"); // rysuj wskazniki dla drugiego kierowcy: f.(tab, r, strokeColor, fillColor, cssClass)

                // chartBg.innerHTML = `
                //     <polyline class="chart-line-all" points="${chartPointsNrOfDrivers}" />
                //     <polyline class="chart-line-a" points="${chartPoints1}" />
                //     <polyline class="chart-line-b" points="${chartPoints2}" />
                // `;
                

                console.log("---< Wynik H2H >---");
                console.info(who1 + " był wyżej " + who1Score);
                console.info(who2 + " był wyżej " + who2Score);
                console.info("remis był: " + draw);

                let h2hStat = document.createElement("div");
                h2hStat.classList.add("col-sm-12", "bg-dark", "text-light");
                h2hStat.innerHTML =
                    `<section class=\"row\"><div class=\"col-sm-12 bg-dark text-light\"><strong>Head to head</strong><br>
                        ${who1} był wyżej ${who1Score} <br>
                        ${who2} był wyżej ${who2Score} <br>
                        remis był: ${draw} </section></div>`;
                compareDisplay.insertBefore(h2hStat, compareDisplay.firstChild);

            
                chartWrapper.appendChild(chartBg); // wstawiamy wykres po sekcji porównywania

                let circles = document.querySelectorAll(".chart-bg > circle");
                console.log("CCC ", circles);

                for(let i = 0; i < circles.length; i++) {
                    let tooltipsForCircles = document.querySelectorAll(".tip");
                    circles[i].addEventListener("mouseenter", (e) => {
                        console.log(`${e.target.dataset.who} zajął ${e.target.dataset.position} miejsce na rajdzie ${raceInfo[e.target.dataset.race].series}#${raceInfo[e.target.dataset.race].race}/${raceInfo[e.target.dataset.race].year}`);
                        for(let j = 0; j < tooltipsForCircles.length; j++) {
                            //if (tooltipsForCircles[j].dataset.who == e.target.dataset.who && tooltipsForCircles[j].dataset.id == e.target.dataset.id) {
                            if (e.target.dataset.who == tooltipsForCircles[j].dataset.who && e.target.dataset.id == tooltipsForCircles[j].dataset.id) {
                                tooltipsForCircles[j].classList.toggle("hidden");
                            }
                        }
                    }, false);
                    circles[i].addEventListener("mouseleave", (e) => {
                        console.log(`${e.target.dataset.who} zajął ${e.target.dataset.position} miejsce na rajdzie ${raceInfo[e.target.dataset.race].series}#${raceInfo[e.target.dataset.race].race}/${raceInfo[e.target.dataset.race].year}`);
                        for(let j = 0; j < tooltipsForCircles.length; j++) {
                            if (tooltipsForCircles[j].dataset.who == e.target.dataset.who && tooltipsForCircles[j].dataset.id == e.target.dataset.id) {
                                tooltipsForCircles[j].classList.toggle("hidden");
                            }
                        }
                    }, false);
                }
            } else {
                console.log("The comparison has already been displayed");
            }
        };// koniec f. vs()

        
        const compareBtn = document.getElementById("compareBtn");
        compareBtn.addEventListener("click", vs, false); 
    }
};
xhttp.open("GET", "db.json", true);
xhttp.send();

//-------------rozszerzenia prototypów tablic-----------------
Array.prototype.contains = function(v) {
    for(let i = 0; i < this.length; i++) {
        if(this[i] === v) return true;
    }
    return false;
};

Array.prototype.unique = function() {
    let arr = [];
    for(let i = 0; i < this.length; i++) {
        if(!arr.contains(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr;
};

//-------------rozszerzenia prototypów-------------------------
//polyfill dla przeglądarek nie obsługujących closest
if (!Element.prototype.remove) {
    Element.prototype.remove = function() {
        this.parentElement.removeChild(this);
    }
}