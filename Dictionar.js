
let elementsOfA = [], elementsOfĂ = [], elementsOfÂ = [], elementsOfB = [],
    elementsOfC = [], elementsOfD = [], elementsOfE =[], elementsOfF = [], elementsOfG = [], elementsOfH = [],
    elementsOfI= [], elementsOfÎ = [], elementsOfJ = [], elementsOfK = [], elementsOfL = [], elementsOfM =[], elementsOfN = [], elementsOfO = [],
    elementsOfP = [], elementsOfQ = [], elementsOfR = [], elementsOfS = [], elementsOfȘ =[], elementsOfT = [], elementsOfȚ =[], elementsOfU = [],
     elementsOfV = [], elementsOfW = [], elementsOfX = [], elementsOfY = [], elementsOfZ = [];
const numberOfElements = [];
for (i = 0; i <= 30; ++i) {
    numberOfElements[i] = 0;
}




function addWord() {
    const litere = ["A", "Ă", "Â", "B", "C", "D", "E", "F", "G", "H", "I", "Î", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "Ș", "T", "Ț", "U", "V", "W", "X", "Y", "Z"];
    let word = document.getElementById("valueOfWord").value;
    let firstLetter = word.charAt(0);
    let pozition, stop = 0, valid = 0;
    for(i = 0; i < litere.length && valid == 0; ++i) {
        valid = 0;
        if(firstLetter === litere[i]) { 
            pozition = numberOfElement(i);
            if(firstLetter === litere[0] && numberOfElement(i) == 0){
                document.getElementById("setA").innerHTML = "A";
                document.getElementById("setListA").innerHTML = '<li> ' + word + ' </li>';
                elementsOfA[0] = word;
                ++numberOfElements[i];
                valid = 1;
            } else if(firstLetter === litere[1] && numberOfElement(i) == 0) {
                alert("functioneaza");
                document.getElementById("setĂ").innerHTML = "Ă";
                document.getElementById("setListĂ").innerHTML = '<li> ' + word + ' </li>';
                elementsOfĂ[0] = word;
                ++numberOfElements[i];
                valid = 1;
            } else if(firstLetter === litere[2] && numberOfElement(i) == 0) {
                document.getElementById("setÂ").innerHTML = "Â";
                document.getElementById("setListÂ").innerHTML = '<li> ' + word + ' </li>';
                elementsOfÂ[0] = word;
                ++numberOfElements[i];
                valid = 1;
            } else if(firstLetter === litere[3] && numberOfElement(i) == 0) {
                document.getElementById("set" + litere[i]).innerHTML = litere[i];
                document.getElementById("setListB").innerHTML =  '<li> ' + word + ' </li>';
                elementsOfB[0] = word;
                ++numberOfElements[i];
                valid = 1;
            } else if(firstLetter === litere[4] && numberOfElement(i) == 0) {
                document.getElementById("set" + litere[i]).innerHTML = litere[i];
                document.getElementById("setList" + litere[i]).innerHTML = '<li> ' + word + ' </li>';
                elementsOfC[0] = word;
                ++numberOfElements[i];
                valid = 1;
            } else if(firstLetter === litere[5] && numberOfElement(i) == 0) {
                document.getElementById("set" + litere[i]).innerHTML = litere[i];
                document.getElementById("setListD").innerHTML = word;
                elementsOfD[0] = word;
                ++numberOfElements[i];
                valid = 1;
            } else if(firstLetter === litere[6] && numberOfElement(i) == 0) {
                document.getElementById("set" + litere[i]).innerHTML = litere[i];
                document.getElementById("setListE").innerHTML = '<li> ' + word + ' </li>';
                elementsOfE[0] = word;
                ++numberOfElements[i];
                valid = 1;
            } else if(firstLetter === litere[7] && numberOfElement(i) == 0) {
                document.getElementById("set" + litere[i]).innerHTML = litere[i];
                document.getElementById("setListF").innerHTML = '<li> ' + word + ' </li>';
                elementsOfF[0] = word;
                ++numberOfElements[i];
                valid = 1;
            } else if(firstLetter === litere[8] && numberOfElement(i) == 0) {
                document.getElementById("set" + litere[i]).innerHTML = litere[i];
                document.getElementById("setListG").innerHTML = '<li> ' + word + ' </li>';
                elementsOfG[0] = word;
                ++numberOfElements[i];
                valid = 1;
            } else if(firstLetter === litere[9] && numberOfElement(i) == 0) {
                document.getElementById("set" + litere[i]).innerHTML = litere[i];
                document.getElementById("setListH").innerHTML = '<li> ' + word + ' </li>';
                elementsOfH[0] = word;
                ++numberOfElements[i];
                valid = 1;
            } else if(firstLetter === litere[10] && numberOfElement(i) == 0) {
                document.getElementById("set" + litere[i]).innerHTML = litere[i];
                document.getElementById("setListI").innerHTML = '<li> ' + word + ' </li>';
                elementsOfI[0] = word;
                ++numberOfElements[i];
                valid = 1;
            } else if(firstLetter === litere[11] && numberOfElement(i) == 0) {
                document.getElementById("set" + litere[i]).innerHTML = litere[i];
                document.getElementById("setListÎ").innerHTML = '<li> ' + word + ' </li>';
                elementsOfÎ[0] = word;
                ++numberOfElements[i];
                valid = 1;
            } else if(firstLetter === litere[12] && numberOfElement(i) == 0) {
                document.getElementById("set" + litere[i]).innerHTML = litere[i];
                document.getElementById("setListJ").innerHTML = '<li> ' + word + ' </li>';
                elementsOfJ[0] = word;
                ++numberOfElements[i];
                valid = 1;
            } else if(firstLetter === litere[13] && numberOfElement(i) == 0) {
                document.getElementById("set" + litere[i]).innerHTML = litere[i];
                document.getElementById("setListK").innerHTML = '<li> ' + word + ' </li>';
                elementsOfK[0] = word;
                ++numberOfElements[i];
                valid = 1;
            } else if(firstLetter === litere[14] && numberOfElement(i) == 0) {
                document.getElementById("set" + litere[i]).innerHTML = litere[i];
                document.getElementById("setListL").innerHTML = '<li> ' + word + ' </li>';
                elementsOfL[0] = word;
                ++numberOfElements[i];
                valid = 1;
            } else if(firstLetter === litere[15] && numberOfElement(i) == 0) {
                document.getElementById("set" + litere[i]).innerHTML = litere[i];
                document.getElementById("setListM").innerHTML = '<li> ' + word + ' </li>';
                elementsOfM[0] = word;
                ++numberOfElements[i];
                valid = 1;
            } else if(firstLetter === litere[16] && numberOfElement(i) == 0) {
                document.getElementById("set" + litere[i]).innerHTML = litere[i];
                document.getElementById("setListN").innerHTML = '<li> ' + word + ' </li>';
                elementsOfN[0] = word;
                ++numberOfElements[i];
                valid = 1;
            } else if(firstLetter === litere[17] && numberOfElement(i) == 0) {
                document.getElementById("set" + litere[i]).innerHTML = litere[i];
                document.getElementById("setListO").innerHTML = '<li> ' + word + ' </li>';
                elementsOfO[0] = word;
                ++numberOfElements[i];
                valid = 1;
            } else if(firstLetter === litere[18] && numberOfElement(i) == 0) {
                document.getElementById("set" + litere[i]).innerHTML = litere[i];
                document.getElementById("setListP").innerHTML = '<li> ' + word + ' </li>';
                elementsOfP[0] = word;
                ++numberOfElements[i];
                valid = 1;
            } else if(firstLetter === litere[19] && numberOfElement(i) == 0) {
                document.getElementById("set" + litere[i]).innerHTML = litere[i];
                document.getElementById("setListQ").innerHTML = '<li> ' + word + ' </li>';
                elementsOfQ[0] = word;
                ++numberOfElements[i];
                valid = 1;
            } else if(firstLetter === litere[20] && numberOfElement(i) == 0) {
                document.getElementById("set" + litere[i]).innerHTML = litere[i];
                document.getElementById("setListR").innerHTML = '<li> ' + word + ' </li>';
                elementsOfR[0] = word;
                ++numberOfElements[i];
                valid = 1;
            } else if(firstLetter === litere[21] && numberOfElement(i) == 0) {
                document.getElementById("set" + litere[i]).innerHTML = litere[i];
                document.getElementById("setListS").innerHTML = '<li> ' + word + ' </li>';
                elementsOfS[0] = word;
                ++numberOfElements[i];
                valid = 1;
            } else if(firstLetter === litere[22] && numberOfElement(i) == 0) {
                document.getElementById("set" + litere[i]).innerHTML = litere[i];
                document.getElementById("setListȘ").innerHTML = '<li> ' + word + ' </li>';
                elementsOfȘ[0] = word;
                ++numberOfElements[i];
                valid = 1;
            } else if(firstLetter === litere[23] && numberOfElement(i) == 0) {
                document.getElementById("set" + litere[i]).innerHTML = litere[i];
                document.getElementById("setListT").innerHTML = '<li> ' + word + ' </li>';
                elementsOfT[0] = word;
                ++numberOfElements[i];
                valid = 1;
            } else if(firstLetter === litere[24] && numberOfElement(i) == 0) {
                document.getElementById("set" + litere[i]).innerHTML = litere[i];
                document.getElementById("setListȚ").innerHTML = '<li> ' + word + ' </li>';
                elementsOfȚ[0] = word;
                ++numberOfElements[i];
                valid = 1;
            } else if(firstLetter === litere[25] && numberOfElement(i) == 0) {
                document.getElementById("set" + litere[i]).innerHTML = litere[i];
                document.getElementById("setListU").innerHTML = '<li> ' + word + ' </li>';
                elementsOfU[0] = word;
                ++numberOfElements[i];
                valid = 1;
            } else if(firstLetter === litere[26] && numberOfElement(i) == 0) {
                document.getElementById("set" + litere[i]).innerHTML = litere[i];
                document.getElementById("setListV").innerHTML = '<li> ' + word + ' </li>';
                elementsOfV[0] = word;
                ++numberOfElements[i];
                valid = 1;
            } else if(firstLetter === litere[27] && numberOfElement(i) == 0) {
                document.getElementById("set" + litere[i]).innerHTML = litere[i];
                document.getElementById("setListW").innerHTML = '<li> ' + word + ' </li>';
                elementsOfW[0] = word;
                ++numberOfElements[i];
                valid = 1;
            } else if(firstLetter === litere[28] && numberOfElement(i) == 0) {
                document.getElementById("set" + litere[i]).innerHTML = litere[i];
                document.getElementById("setListX").innerHTML = '<li> ' + word + ' </li>';
                elementsOfX[0] = word;
                ++numberOfElements[i];
                valid = 1;
            } else if(firstLetter === litere[29] && numberOfElement(i) == 0) {
                document.getElementById("set" + litere[i]).innerHTML = litere[i];
                document.getElementById("setListY").innerHTML = '<li> ' + word + ' </li>';
                elementsOfY[0] = word;
                ++numberOfElements[i];
                valid = 1;
            } else if(firstLetter === litere[30] && numberOfElement(i) == 0) {
                document.getElementById("set" + litere[i]).innerHTML = litere[i];
                document.getElementById("setListZ").innerHTML = '<li> ' + word + ' </li>';
                elementsOfZ[0] = word;
                ++numberOfElements[i];
                valid = 1;
         }else if(firstLetter === litere[0] && numberOfElement(i) != 0){  //Daca cuvantul incepe cu a
            stop = 0;
            for(j = 0; j <= numberOfElement(i) && stop == 0; ++j) {
                if(elementsOfA[j] == word) 
                stop = 1;
            }
            if(stop == 1) {
                alert("Cuvantul dat este deja introdus in lista!");
            } else {
                document.getElementById("setListA").innerHTML += '<li> ' + word + ' </li>';
                elementsOfA[pozition] = word;
                ++numberOfElements[i];
            }
            valid = 1;
        } else if(firstLetter === litere[1] && numberOfElement(i) != 0) {
            stop = 0;
            for(j = 0; j <= numberOfElement(i) && stop == 0; ++j) {
                if(elementsOfĂ[j] == word)
                stop = 1;
            }
            if(stop == 1) {
                alert("Cuvantul dat este deja introdus in lista!");
            } else {
                document.getElementById("setListĂ").innerHTML += '<li> ' + word + ' </li>';
            elementsOfĂ[pozition] = word;
            ++numberOfElements[i];
            }
            valid = 1;
        } else if(firstLetter === litere[2] && numberOfElement(i) != 0) {
            stop = 0;
            for(j = 0; j <= numberOfElement(i) && stop == 0; ++j) {
                if(elementsOfÂ[j] == word)
                stop = 1;
            }
            if(stop == 1) {
                alert("Cuvantul dat este deja introdus in lista!");
            } else {
                document.getElementById("setListÂ").innerHTML += '<li> ' + word + ' </li>';
            elementsOfÂ[pozition] = word;
            ++numberOfElements[i];
            }
            valid = 1;
        } else if(firstLetter === litere[3] && numberOfElement(i) != 0) {
            stop = 0;
            for(j = 0; j <= numberOfElement(i) && stop == 0; ++j) {
                if(elementsOfB[j] === word)
                stop = 1;
            }
            if(stop == 1) {
                alert("Cuvantul dat este deja introdus in lista!");
            } else {
                document.getElementById("setListB").innerHTML += '<li> ' + word + ' </li>';
            elementsOfB[pozition] = word;
            ++numberOfElements[i];
            }
            valid = 1;
        } else if(firstLetter === litere[4] && numberOfElement(i) != 0) {
            stop = 0;
            for(j = 0; j <= numberOfElement(i) && stop == 0; ++j) {
                if(elementsOfC[j] == word)
                stop = 1;
            }
            if(stop == 1) {
                alert("Cuvantul dat este deja introdus in lista!");
            } else {
                document.getElementById("setListC").innerHTML += '<li> ' + word + ' </li>';
            elementsOfC[pozition] = word;
            ++numberOfElements[i];
            }
            valid = 1;
        } else if(firstLetter === litere[5] && numberOfElement(i) != 0) {
            stop = 0;
            for(j = 0; j <= numberOfElement(i) && stop == 0; ++j) {
                if(elementsOfD[j] == word)
                stop = 1;
            }
            if(stop == 1) {
                alert("Cuvantul dat este deja introdus in lista!");
            } else {
                document.getElementById("setListD").innerHTML += '<li> ' + word + ' </li>';
            elementsOfD[pozition] = word;
            ++numberOfElements[i];
            }
            valid = 1;
        } else if(firstLetter === litere[6] && numberOfElement(i) != 0) {
            stop = 0;
            for(j = 0; j <= numberOfElement(i) && stop == 0; ++j) {
                if(elementsOfE[j] == word)
                stop = 1;
            }
            if(stop == 1) {
                alert("Cuvantul dat este deja introdus in lista!");
            } else {
                document.getElementById("setListE").innerHTML += '<li> ' + word + ' </li>';
            elementsOfE[pozition] = word;
            ++numberOfElements[i];
            }
            valid = 1;
        } else if(firstLetter === litere[7] && numberOfElement(i) != 0) {
            stop = 0;
            for(j = 0; j <= numberOfElement(i) && stop == 0; ++j) {
                if(elementsOfF[j] == word)
                stop = 1;
            }
            if(stop == 1) {
                alert("Cuvantul dat este deja introdus in lista!");
            } else {
                document.getElementById("setListF").innerHTML += '<li> ' + word + ' </li>';
            elementsOfF[pozition] = word;
            ++numberOfElements[i];
            }
            valid = 1;
        } else if(firstLetter === litere[8] && numberOfElement(i) != 0) {
            stop = 0;
            for(j = 0; j <= numberOfElement(i) && stop == 0; ++j) {
                if(elementsOfG[j] == word)
                stop = 1;
            }
            if(stop == 1) {
                alert("Cuvantul dat este deja introdus in lista!");
            } else {
                document.getElementById("setListG").innerHTML += '<li> ' + word + ' </li>';
            elementsOfG[pozition] = word;
            ++numberOfElements[i];
            }
            valid = 1;
        } else if(firstLetter === litere[9] && numberOfElement(i) != 0) {
            stop = 0;
            for(j = 0; j <= numberOfElement(i) && stop == 0; ++j) {
                if(elementsOfH[j] == word)
                stop = 1;
            }
            if(stop == 1) {
                alert("Cuvantul dat este deja introdus in lista!");
            } else {
                document.getElementById("setListH").innerHTML += '<li> ' + word + ' </li>';
            elementsOfH[pozition] = word;
            ++numberOfElements[i];
            }
            valid = 1;
        } else if(firstLetter === litere[10] && numberOfElement(i) != 0) {
            stop = 0;
            for(j = 0; j <= numberOfElement(i) && stop == 0; ++j) {
                if(elementsOfI[j] == word)
                stop = 1;
            }
            if(stop == 1) {
                alert("Cuvantul dat este deja introdus in lista!");
            } else {
                document.getElementById("setListI").innerHTML += '<li> ' + word + ' </li>';
            elementsOfI[pozition] = word;
            ++numberOfElements[i];
            }
            valid = 1;
        } else if(firstLetter === litere[11] && numberOfElement(i) != 0) {
            stop = 0;
            for(j = 0; j <= numberOfElement(i) && stop == 0; ++j) {
                if(elementsOfÎ[j] == word)
                stop = 1;
            }
            if(stop == 1) {
                alert("Cuvantul dat este deja introdus in lista!");
            } else {
                document.getElementById("setListÎ").innerHTML += '<li> ' + word + ' </li>';
            elementsOfÎ[pozition] = word;
            ++numberOfElements[i];
            }
            valid = 1;
        } else if(firstLetter === litere[12] && numberOfElement(i) != 0) {
            stop = 0;
            for(j = 0; j <= numberOfElement(i) && stop == 0; ++j) {
                if(elementsOfJ[j] == word)
                stop = 1;
            }
            if(stop == 1) {
                alert("Cuvantul dat este deja introdus in lista!");
            } else {
                document.getElementById("setListJ").innerHTML += '<li> ' + word + ' </li>';
            elementsOfJ[pozition] = word;
            ++numberOfElements[i];
            }
            valid = 1;
        } else if(firstLetter === litere[13] && numberOfElement(i) != 0) {
            stop = 0;
            for(j = 0; j <= numberOfElement(i) && stop == 0; ++j) {
                if(elementsOfK[j] == word)
                stop = 1;
            }
            if(stop == 1) {
                alert("Cuvantul dat este deja introdus in lista!");
            } else {
                document.getElementById("setListK").innerHTML += '<li> ' + word + ' </li>';
            elementsOfK[pozition] = word;
            ++numberOfElements[i];
            }
            valid = 1;
        } else if(firstLetter === litere[14] && numberOfElement(i) != 0) {
            stop = 0;
            for(j = 0; j <= numberOfElement(i) && stop == 0; ++j) {
                if(elementsOfL[j] == word)
                stop = 1;
            }
            if(stop == 1) {
                alert("Cuvantul dat este deja introdus in lista!");
            } else {
                document.getElementById("setListL").innerHTML += '<li> ' + word + ' </li>';
            elementsOfL[pozition] = word;
            ++numberOfElements[i];
            }
            valid = 1;
        } else if(firstLetter === litere[15] && numberOfElement(i) != 0) {
            stop = 0;
            for(j = 0; j <= numberOfElement(i) && stop == 0; ++j) {
                if(elementsOfM[j] == word)
                stop = 1;
            }
            if(stop == 1) {
                alert("Cuvantul dat este deja introdus in lista!");
            } else {
                document.getElementById("setListM").innerHTML += '<li> ' + word + ' </li>';
            elementsOfM[pozition] = word;
            ++numberOfElements[i];
            }
            valid = 1;
        } else if(firstLetter === litere[16] && numberOfElement(i) != 0) {
            stop = 0;
            for(j = 0; j <= numberOfElement(i) && stop == 0; ++j) {
                if(elementsOfN[j] == word)
                stop = 1;
            }
            if(stop == 1) {
                alert("Cuvantul dat este deja introdus in lista!");
            } else {
                document.getElementById("setListN").innerHTML += '<li> ' + word + ' </li>';
            elementsOfN[pozition] = word;
            ++numberOfElements[i];
            }
            valid = 1;
        } else if(firstLetter === litere[17] && numberOfElement(i) != 0) {
            stop = 0;
            for(j = 0; j <= numberOfElement(i) && stop == 0; ++j) {
                if(elementsOfO[j] == word)
                stop = 1;
            }
            if(stop == 1) {
                alert("Cuvantul dat este deja introdus in lista!");
            } else {
                document.getElementById("setListO").innerHTML += '<li> ' + word + ' </li>';
            elementsOfO[pozition] = word;
            ++numberOfElements[i];
            }
            valid = 1;
        } else if(firstLetter === litere[18] && numberOfElement(i) != 0) {
            stop = 0;
            for(j = 0; j <= numberOfElement(i) && stop == 0; ++j) {
                if(elementsOfP[j] == word)
                stop = 1;
            }
            if(stop == 1) {
                alert("Cuvantul dat este deja introdus in lista!");
            } else {
                document.getElementById("setListP").innerHTML += '<li> ' + word + ' </li>';
            elementsOfP[pozition] = word;
            ++numberOfElements[i];
            }
            valid = 1;
            } else if(firstLetter === litere[19] && numberOfElement(i) != 0) {
            stop = 0;
            for(j = 0; j <= numberOfElement(i) && stop == 0; ++j) {
                if(elementsOfQ[j] == word)
                stop = 1;
            }
            if(stop == 1) {
                alert("Cuvantul dat este deja introdus in lista!");
            } else {
                document.getElementById("setListQ").innerHTML += '<li> ' + word + ' </li>';
            elementsOfQ[pozition] = word;
            ++numberOfElements[i];
            }
            valid = 1;
        } else if(firstLetter === litere[20] && numberOfElement(i) != 0) {
            stop = 0;
            for(j = 0; j <= numberOfElement(i) && stop == 0; ++j) {
                if(elementsOfR[j] == word)
                stop = 1;
            }
            if(stop == 1) {
                alert("Cuvantul dat este deja introdus in lista!");
            } else {
                document.getElementById("setListR").innerHTML += '<li> ' + word + ' </li>';
            elementsOfR[pozition] = word;
            ++numberOfElements[i];
            }
            valid = 1;
        } else if(firstLetter === litere[21] && numberOfElement(i) != 0) {
            stop = 0;
            for(j = 0; j <= numberOfElement(i) && stop == 0; ++j) {
                if(elementsOfS[j] == word)
                stop = 1;
            }
            if(stop == 1) {
                alert("Cuvantul dat este deja introdus in lista!");
            } else {
                document.getElementById("setListS").innerHTML += '<li> ' + word + ' </li>';
            elementsOfS[pozition] = word;
            ++numberOfElements[i];
            }
            valid = 1;
        } else if(firstLetter === litere[22] && numberOfElement(i) != 0) {
            stop = 0;
            for(j = 0; j <= numberOfElement(i) && stop == 0; ++j) {
                if(elementsOfȘ[j] == word)
                stop = 1;
            }
            if(stop == 1) {
                alert("Cuvantul dat este deja introdus in lista!");
            } else {
                document.getElementById("setListȘ").innerHTML += '<li> ' + word + ' </li>';
            elementsOfȘ[pozition] = word;
            ++numberOfElements[i];
            }
            valid = 1;
        } else if(firstLetter === litere[23] && numberOfElement(i) != 0) {
            stop = 0;
            for(j = 0; j <= numberOfElement(i) && stop == 0; ++j) {
                if(elementsOfT[j] == word)
                stop = 1;
            }
            if(stop == 1) {
                alert("Cuvantul dat este deja introdus in lista!");
            } else {
                document.getElementById("setListT").innerHTML += '<li> ' + word + ' </li>';
            elementsOfT[pozition] = word;
            ++numberOfElements[i];
            }
            valid = 1;
        } else if(firstLetter === litere[24] && numberOfElement(i) != 0) {
            stop = 0;
            for(j = 0; j <= numberOfElement(i) && stop == 0; ++j) {
                if(elementsOfȚ[j] == word)
                stop = 1;
            }
            if(stop == 1) {
                alert("Cuvantul dat este deja introdus in lista!");
            } else {
                document.getElementById("setListȚ").innerHTML += '<li> ' + word + ' </li>';
            elementsOfȚ[pozition] = word;
            ++numberOfElements[i];
            }
            valid = 1;
        } else if(firstLetter === litere[25] && numberOfElement(i) != 0) {
            stop = 0;
            for(j = 0; j <= numberOfElement(i) && stop == 0; ++j) {
                if(elementsOfU[j] == word)
                stop = 1;
            }
            if(stop == 1) {
                alert("Cuvantul dat este deja introdus in lista!");
            } else {
                document.getElementById("setListU").innerHTML += '<li> ' + word + ' </li>';
            elementsOfU[pozition] = word;
            ++numberOfElements[i];
            }
            valid = 1;
        } else if(firstLetter === litere[26] && numberOfElement(i) != 0) {
            stop = 0;
            for(j = 0; j <= numberOfElement(i) && stop == 0; ++j) {
                if(elementsOfV[j] == word)
                stop = 1;
            }
            if(stop == 1) {
                alert("Cuvantul dat este deja introdus in lista!");
            } else {
                document.getElementById("setListV").innerHTML += '<li> ' + word + ' </li>';
            elementsOfV[pozition] = word;
            ++numberOfElements[i];
            }
            valid = 1;
        } else if(firstLetter === litere[27] && numberOfElement(i) != 0) {
            stop = 0;
            for(j = 0; j <= numberOfElement(i) && stop == 0; ++j) {
                if(elementsOfW[j] == word)
                stop = 1;
            }
            if(stop == 1) {
                alert("Cuvantul dat este deja introdus in lista!");
            } else {
                document.getElementById("setListW").innerHTML += '<li> ' + word + ' </li>';
            elementsOfW[pozition] = word;
            ++numberOfElements[i];
            }
            valid = 1;
        } else if(firstLetter === litere[28] && numberOfElement(i) != 0) {
            stop = 0;
            for(j = 0; j <= numberOfElement(i) && stop == 0; ++j) {
                if(elementsOfX[j] == word)
                stop = 1;
            }
            if(stop == 1) {
                alert("Cuvantul dat este deja introdus in lista!");
            } else {
                document.getElementById("setListX").innerHTML += '<li> ' + word + ' </li>';
            elementsOfX[pozition] = word;
            ++numberOfElements[i];
            }
            valid = 1;
        } else if(firstLetter === litere[29] && numberOfElement(i) != 0) {
            stop = 0;
            for(j = 0; j <= numberOfElement(i) && stop == 0; ++j) {
                if(elementsOfY[j] == word)
                stop = 1;
            }
            if(stop == 1) {
                alert("Cuvantul dat este deja introdus in lista!");
            } else {
                document.getElementById("setListY").innerHTML += '<li> ' + word + ' </li>';
            elementsOfY[pozition] = word;
            ++numberOfElements[i];
            }
            valid = 1;
        } else if(firstLetter === litere[30] && numberOfElement(i) != 0) {
            stop = 0;
            for(j = 0; j <= numberOfElement(i) && stop == 0; ++j) {
                if(elementsOfZ[j] == word)
                stop = 1;
            }
            if(stop == 1) {
                alert("Cuvantul dat este deja introdus in lista!");
            } else {
                document.getElementById("setListZ").innerHTML += '<li> ' + word + ' </li>';
            elementsOfZ[pozition] = word;
            ++numberOfElements[i];
            }
            valid = 1;
        }
    }
 }
    return false;
}

function numberOfElement(pozition) {
    for(i = 0; i <= 30; ++i) {
        if(i == pozition)
            return numberOfElements[i];
    }
}

function checkIfWordIsInList(sir) {
        for(i = 0; i <= sir.length; ++i) {
            alert(sir[i]);
        }
}
