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

let lang = "en";

const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const response = JSON.parse(xhttp.responseText);
        const raceInfo = response.raceInfo;

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

        //-----------dodanie nasłuchu do selectów-----------------------
        for (let i = 0; i < selects.length; i++) {
            selects[i].addEventListener("blur", function() {
                let context = this;
                showSelectedTruckerAndDisplayStats(context, i);
                clearingComparison();

                if (this.id === "firstSelect") {
                    //--- trzeba wywołać dodatkową funkcję do stworzenia listy oponentów ---
                    prepareSecondSelect();
                }
            });
        }

        for (let i = 0; i < selects.length; i++) { // to do: DRY
            selects[i].addEventListener("change", function() {
                let context = this;
                showSelectedTruckerAndDisplayStats(context, i);
                clearingComparison();

                if (this.id === "firstSelect") {
                    prepareSecondSelect();
                }
            });
        }

        //--- tworzymy tablicę ze wszystkich pojedyńczych występów na rajdzie---
        let competitorsToSelect = [];
        for (let i = 0; i < raceInfo.length; i++) {
            competitorsToSelect = competitorsToSelect.concat(raceInfo[i].competitors);
        }
        
        //--- pozostawienie unikatów z tablicy competitorsToSelect za pomocą roszerzeń prototypu tablic, posortowanie ---
        const uniques = competitorsToSelect.unique().sort();
        addingSelects(uniques, 0); //wypełnienie firstSelect kierowcami z tablicy uniques

        /*------------funkcja do wyświetlania statystyk pierwszego zawodnika i... generująca opcje wyboru do drugiego selecta (warto wydzielić)---------*/
        const showSelectedTruckerAndDisplayStats = function showSelectedTruckerAndDisplayStats(context, indexOfSelect) {
                let select = context;
                let selectedOption = select.options[select.selectedIndex];
                const selectedText   = selectedOption.text;  // 'dane'
                const statsTableBody = document.querySelector("#selected-truckers-stats tbody");
                statsTableBody.classList.add("open");
            
                //------statsDisplay---------
                const showMeStats = function showMeStats(raceInfo) {
                    let absent = 0;
                    let winner = 0;
                    let second = 0;
                    let third = 0;
                    let podium = 0;
                    let furtherPlaces = 0;
                    let competed = 0;
                    let miejsca = [];
                    let numOfParticipants = [];
                    let posPerContestants = [];
                    let winsAgainstOthersTab = [];
                    let winsTabLength = winsAgainstOthersTab.length;

                    //--- pętla zliaczająca pozycje do statystyk ---
                    for (let i = 0; i < raceInfo.length; i++) {
                        let raceNr = i + 1;
                        let chosenIndex = raceInfo[i].competitors.indexOf(selectedText);
                        let positionToPush = raceInfo[i].position[chosenIndex];
                        let numOfParticipantsToPush = raceInfo[i].position.length;
                        let winsAgainstOthersRate = (numOfParticipantsToPush - positionToPush)/(numOfParticipantsToPush - 1);
                        winsTabLength = winsAgainstOthersTab.length;
                        
                        if (positionToPush != undefined) {
                            miejsca.push(positionToPush);
                            numOfParticipants.push(numOfParticipantsToPush);
                            let posPerCont = "";
                            posPerCont += " (Race " + raceNr + ": " + positionToPush + "/" + numOfParticipantsToPush + ")";
                            posPerContestants.push(posPerCont);
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
                            furtherPlaces++;
                            competed++;
                        }
                    }
                    
                    //--- statystyki procentowe wyliczane po warunkach zliczających ---
                    let frequency = competed/raceInfo.length*100;
                    let winsPct = winner/competed*100;
                    let podiumPct = podium/competed*100;
                    
                    let fSumOfComp = function su(numOfParticipants) {
                        let sumOfComp = 0;
                        for(let i = 0; i < numOfParticipants.length; i++) { 
                            sumOfComp = sumOfComp + parseInt(numOfParticipants[i]); 
                        }
                        return sumOfComp; 
                    };
                    
                    let fSumOfPos = function suma(miejsca) {
                        let sumOfPos = 0;
                        for(let i = 0; i < miejsca.length; i++) { 
                            sumOfPos = sumOfPos + parseInt(miejsca[i]); 
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
                            return prev + cur;
                        });
                        return winsRateSum / winsTabLength;
                    }

                    let indexOfStatsContainer = 1 + indexOfSelect;
                    let nameOfStatsPrefix = "st".concat(indexOfStatsContainer, "-");
                    let statsCompetedId = nameOfStatsPrefix.concat("competed");
                    let statsFrequencyId = nameOfStatsPrefix.concat("frequency");
                    let statsWinnerId = nameOfStatsPrefix.concat("winner");
                    let statsSecondId = nameOfStatsPrefix.concat("second");
                    let statsThirdId = nameOfStatsPrefix.concat("third");
                    let statsPodiumId = nameOfStatsPrefix.concat("podium");
                    let statsWinsPctId = nameOfStatsPrefix.concat("wins-pct");
                    let statsPodiumPctId = nameOfStatsPrefix.concat("podium-pct");
                    let statsFurtherPlacesId = nameOfStatsPrefix.concat("further-places");
                    let statsAgainstOthersId = nameOfStatsPrefix.concat("against-others");
                    let raceContainerNr = "race-by-race" + indexOfStatsContainer;  
                    
                    const statsCompeted = document.getElementById(statsCompetedId);
                    const statsFrequency = document.getElementById(statsFrequencyId);
                    const statsWinner = document.getElementById(statsWinnerId);
                    const statsSecond = document.getElementById(statsSecondId);
                    const statsThird = document.getElementById(statsThirdId);
                    const statsPodium = document.getElementById(statsPodiumId);
                    const statsWinsPct = document.getElementById(statsWinsPctId);
                    const statsPodiumPct = document.getElementById(statsPodiumPctId);
                    const statsFurtherPlaces = document.getElementById(statsFurtherPlacesId);
                    const statsAgainstOthers = document.getElementById(statsAgainstOthersId);

                    const chart = 
                        `<svg viewBox="0 0 64 64" class="pie">
                            <circle r="25%" cx="50%" cy="50%" style="stroke-dasharray: ${winsRate(winsAgainstOthersTab, winsTabLength).toFixed(3)*100}, 100; stroke-dashoffset: 0; animation-delay: .2s">
                            </circle>
                        </svg>`;

                    statsCompeted.innerText = competed;
                    statsFrequency.innerText = `${frequency.toFixed(3)}%`;
                    statsWinner.innerHTML = `${winner} ${onceOrMore(winner, "&#129351;")}`;
                    statsSecond.innerHTML = `${second} ${onceOrMore(winner, "&#129352;")}`;
                    statsThird.innerHTML = `${third} ${onceOrMore(winner, "&#129353;")}`;
                    statsPodium.innerText = podium;
                    statsWinsPct.innerText = `${winsPct.toFixed(3)}%`;
                    statsPodiumPct.innerText = `${podiumPct.toFixed(3)}%`;
                    statsFurtherPlaces.innerText = furtherPlaces;
                    statsAgainstOthers.innerHTML = `<span class="wins-rate">${winsRate(winsAgainstOthersTab, winsTabLength).toFixed(3)} ${chart}</span>`;
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
            let avilableToCompare =[];
            avilableToCompare = uniques.filter(function(el) {
                return el != selectedOption.text;
            });
            return avilableToCompare;
        }

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

        /*--------- funkcja do porównywania wyników zawodników - wymaga sprawdzenia-------------------*/
        const vs = function() {
            const compareDisplay = document.getElementById("comparison");
            if (compareDisplay.firstChild === null) {
                // --- first driver ---
                let selectedOption1 = selects[0].options[selects[0].selectedIndex];
                let selectedText1 = selectedOption1.text;
                let who1 = selectedText1;
                // --- second driver ---
                let selectedOption2 = selects[1].options[selects[1].selectedIndex];
                let selectedText2 = selectedOption2.text;
                let who2 = selectedText2;
                // --- score collection ---
                let who1Score = 0;
                let who2Score = 0;
                let draw = 0;
                // --- chart variables ---
                let chartPoints1 = "";
                let chartPoints2 = "";
                let chartPointsNrOfDrivers = "";
                let oneRaceWidth = window.innerWidth / raceInfo.length;
                let svgHeight = 160;
                // --- markers arrays ---
                let positionPoint1MarkerTab = [];
                let positionPoint2MarkerTab = [];

                // --- SVG section ---
                let chartWrapper = document.createElement("div");
                chartWrapper.classList.add("chart-wrapper");

                let chartBg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                chartBg.setAttribute("version", "1.1");
                chartBg.classList.add("chart-bg");

                // --- chart wrapper injection ---
                compareDisplay.appendChild(chartWrapper);
                
                //------------ calculate scores and charts ----------------
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
                    chartPoints2 += `${milage}, ${who2Pos !== undefined ? positionPerCompetitors2 * numberOfCompetitors * 10 : 0} `;
                    chartPointsNrOfDrivers += `${milage}, ${numberOfCompetitors * 10} `;

                    let y1 = positionPerCompetitors1 * numberOfCompetitors * 10;
                    let y2 = positionPerCompetitors2 * numberOfCompetitors * 10;
                    let cordinates1 = `left: ${milage+5}px; top: ${y1+5}px;`;
                    let cordinates2 = `left: ${milage+5}px; top: ${y2+5}px;`;

                    // --- creating&add tooltips --- 
                    function genTooltip(who, cordinates, whoPos) {
                        let tooltip = document.createElement("span");
                        tooltip.classList.add("tip");
                        tooltip.classList.add("hidden");
                        tooltip.setAttribute("style", cordinates);
                        tooltip.setAttribute("data-who", who);
                        tooltip.setAttribute("data-id", i);
                        tooltip.innerText = `On the race ${raceInfo[i].series}#${raceInfo[i].race}/${raceInfo[i].year} ${who} took ${whoPos} place (out of ${numberOfCompetitors} participants)`;
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

                    // --- vertical race indicators on chart ---
                    let raceLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
                    raceLine.classList.add("race-line");
                    raceLine.setAttribute("x1", milage);
                    raceLine.setAttribute("x2", milage);
                    raceLine.setAttribute("y1", 0);
                    raceLine.setAttribute("y2", 160);
                    chartBg.appendChild(raceLine);

                    // --- score calculator ---
                    if (who1Pos && who2Pos !== undefined) {
                        if (who1Pos < who2Pos) {
                            who1Score++;
                        }
                        else if (who2Pos < who1Pos) {
                            who2Score++;
                        }
                        else {
                            draw++;
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

                //--- funkcja rysująca markery pozycji zawodników na podstawie obiektów w tablicy ---
                function drawMarkers(tab, r, strokeColor, fillColor, cssClass) {
                    function drawSingleMarker(item) { 
                        if (item !== null) {
                            let positionPointMarker = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                            positionPointMarker.setAttribute("cx", item.cx);
                            positionPointMarker.setAttribute("cy", item.cy);
                            positionPointMarker.setAttribute("r", r);
                            positionPointMarker.setAttribute("stroke", strokeColor);
                            positionPointMarker.setAttribute("fill", fillColor);
                            positionPointMarker.setAttribute("stroke-innerWidth", "5");
                            positionPointMarker.setAttribute("data-position", item.position);
                            positionPointMarker.setAttribute("data-race", item.race);
                            positionPointMarker.setAttribute("data-who", item.who);
                            positionPointMarker.setAttribute("data-id", item.id);
                            positionPointMarker.classList.add(cssClass);
                            chartBg.appendChild(positionPointMarker);
                        } else {
                            console.log("DNS");
                        }
                    }
                    tab.forEach(drawSingleMarker);
                }

                // --- rysuj wskazniki dla pierwszego kierowcy: f.(tab, r, strokeColor, fillColor, cssClass) ---
                drawMarkers(positionPoint1MarkerTab, 7, "rgb(212, 9, 26)", "rgb(212, 9, 26)", "chart-point-a"); 

                // --- rysuj wskazniki dla drugiego kierowcy: f.(tab, r, strokeColor, fillColor, cssClass) ---
                drawMarkers(positionPoint2MarkerTab, 5, "rgb(2, 3, 65)", "rgb(2, 3, 65)", "chart-point-b");

                // --- score in console ---
                console.log("---< Wynik H2H >---");
                console.info(who1 + " był wyżej " + who1Score);
                console.info(who2 + " był wyżej " + who2Score);
                console.info("remis był: " + draw);

                // --- markup for show driver comparison ---
                let h2hStat = document.createElement("div");
                h2hStat.classList.add("row", "text-light", "text-center", "bd-dark");
                h2hStat.innerHTML =
                    `<div class=\"col-sm-12 bg-dark text-light\"><strong>Head to head</strong><br>
                        ${who1} took a higher place ${who1Score}<br>
                        ${who2} took a higher place ${who2Score}<br>
                        draw był: ${draw}</div>`;
                compareDisplay.insertBefore(h2hStat, compareDisplay.firstChild);

                // --- wstawiamy wykres po sekcji porównywania ---
                chartWrapper.appendChild(chartBg); 

                // --- add event listeners on markers ---
                let circles = document.querySelectorAll(".chart-bg > circle");

                for(let i = 0; i < circles.length; i++) {
                    let tooltipsForCircles = document.querySelectorAll(".tip");
                    circles[i].addEventListener("mouseenter", (e) => {
                        for(let j = 0; j < tooltipsForCircles.length; j++) {
                            if (e.target.dataset.who == tooltipsForCircles[j].dataset.who && e.target.dataset.id == tooltipsForCircles[j].dataset.id) {
                                tooltipsForCircles[j].classList.toggle("hidden");
                            }
                        }
                    }, false);
                    circles[i].addEventListener("mouseleave", (e) => {
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

        // --- plugging event listener on compare button ---
        const compareBtn = document.getElementById("compareBtn");
        compareBtn.addEventListener("click", vs, false); 
    }
};
xhttp.open("GET", "db.json", true);
xhttp.send();

// --- polyfill: Array ---
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