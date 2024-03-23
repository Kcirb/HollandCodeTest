import getUserResult from "./getUserResult.js";

(async () => {
    let userResult = await getUserResult();
    let descriptions = await fetch('../data/descriptions.json');
    descriptions = await descriptions.json();

    // 最低分
    let lowestCode = userResult.interestCode[userResult.interestCode.length-1];
    let lowestCodeDescr = descriptions.find((d) => d.Code == userResult.interestCode[userResult.interestCode.length-1]);

    let div = document.createElement('div');
    div.className = "code_descr_block";
    
    let codeIcon = document.createElement('img');
    codeIcon.className = "code_descr_icon";
    codeIcon.src = `../images/codeIcon/${lowestCodeDescr.Code}.svg`;
    
    div.appendChild(codeIcon);

    
    let leastInterest = document.createElement('dt');
    document.getElementById('theme_code_last')
    .appendChild(div)
    .appendChild(document.createElement('dl'))
    .appendChild(leastInterest);
    
    leastInterest.id = "least_interest_code";
    leastInterest.innerHTML = lowestCode + `（${lowestCodeDescr.Theme}）`;

    // 呈現此代碼描述
    console.log(lowestCodeDescr.lowScoreSuggest);
    let dt = document.createElement('dt');
    dt.innerHTML = lowestCodeDescr.lowScoreSuggest;
    leastInterest.appendChild(dt);
})();