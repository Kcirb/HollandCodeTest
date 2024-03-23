import getUserResult from "./getUserResult.js";

(async () => {
    let userResult = await getUserResult();
    let selectList = document.getElementById('userSelectList');

    for(let i = 0; i < userResult.occupations.length; i++){
        let jobName = userResult.occupations[i];
        let li = document.createElement('li');
        li.innerHTML = jobName;
        selectList.appendChild(li);
    }
})();
