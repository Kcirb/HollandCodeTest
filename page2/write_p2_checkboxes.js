import writeCheckbox from "../functions/writeCheckbox.js";

document.addEventListener("DOMContentLoaded", function() {

  function isInURL(id, url) {
    // 如沒有指定url則使用網頁網址
    if(!url) url = window.location.href;
    var regex = new RegExp(id + '='),
        results = regex.exec(url);
    if (!results) return false;
    return true;
  }

  fetch('../data/occupations.json')
    .then(response => response.json())
    .then(jobs => {
      // 按照ID順序生成，因此不需要排序
      // 如果職業ID在URL中，則生成checkbox。
      jobs.forEach(j => {isInURL(j.ID)? writeCheckbox(j):null});
    })
    .catch(error => console.error('Error loading JSON:', error));
});