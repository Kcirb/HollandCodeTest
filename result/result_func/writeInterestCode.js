import getUserResult from "./getUserResult.js";

(async () => {
    let userResult = await getUserResult();
    let descriptions = await fetch('../data/descriptions.json');
    descriptions = await descriptions.json();

    let interestCodesList = document.createElement('dl');
    interestCodesList.id = "interest_codes_list";
    document.getElementById('theme_code_top3').append(interestCodesList);
    
    // 前三高分
    for (let i = 0; i<3; i++){
        
        let codeDescription = descriptions.find((d) => d.Code == userResult.interestCode[i]);
        
        let descrDiv = document.createElement('div');
        descrDiv.className = "code_descr_block";

        interestCodesList.append(descrDiv);
        
        let codeIcon = document.createElement('img');
        codeIcon.className = "code_descr_icon";
        codeIcon.src = `../images/codeIcon/${codeDescription.Code}.svg`;
        
        descrDiv.appendChild(codeIcon);

        let descrTextDiv = document.createElement('div');
        descrTextDiv.className = "code_descr_text";
        
        descrDiv.appendChild(descrTextDiv);

        // 呈現此代碼的清單項目
        let dt = document.createElement('dt');
        descrTextDiv.appendChild(dt);
        dt.id = 'interest_code'+i;
        dt.innerHTML = (i+1)+ `. `+ codeDescription.Code + `（${codeDescription.Theme}）`;

        // 呈現此代碼描述
        let dlPersonality = document.createElement('dl');
        descrTextDiv.appendChild(dlPersonality);
        dlPersonality.innerHTML = "個性優勢："+ codeDescription.Personality;

        let dlPreference = document.createElement('dl');
        descrTextDiv.appendChild(dlPreference);
        dlPreference.innerHTML = "風格偏好："+ codeDescription.Preference;
        
        let dlAdvantage = document.createElement('dl');
        descrTextDiv.appendChild(dlAdvantage);
        dlAdvantage.innerHTML = codeDescription.Advantage;

        descrTextDiv.appendChild(document.createElement('br'));
    }

})();