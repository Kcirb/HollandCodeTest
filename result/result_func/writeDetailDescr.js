import getUserResult from "./getUserResult.js";

(async () => {
    let response = await fetch('../data/detailDescr.json');
    let data = await response.json();
    let userResult = await getUserResult();

    data = data.find((d) => d.Code == userResult.interestCode[0]+userResult.interestCode[1]+userResult.interestCode[2]);

    let p = document.createElement('p');
    if (userResult.score[2] == userResult.score[3]){
        // low Discrimination description
        let lowDiscrimDescr = "<i>您選擇的分散在不同的類型，難以區分最高分的三種類型。<br>這表示您的職業興趣很廣泛，區辨度低，或者是您對於工作的實際內容不夠清楚。<br><br>您可以再做一次測驗，或是去做更多的職業探索（打工、詢問產業內的人士、閱讀參考資料），再回來進行測試。<i/>"
        p.innerHTML = data.Description + lowDiscrimDescr;
    }else{p.innerHTML = data.Description;}

    document.getElementById('detail_description').appendChild(p);

})();