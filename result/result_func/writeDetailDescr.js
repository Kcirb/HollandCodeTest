import getUserResult from "./getUserResult.js";

(async () => {
    let response = await fetch('../data/detailDescr.json');
    let data = await response.json();
    let userResult = await getUserResult();

    data = data.find((d) => d.Code == userResult.interestCode[0]+userResult.interestCode[1]+userResult.interestCode[2]);

    let p = document.createElement('p');
    p.innerHTML = data.Description;

    document.getElementById('detail_description').appendChild(p);

})();