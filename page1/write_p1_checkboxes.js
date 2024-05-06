import writeCheckbox from "../functions/writeCheckbox.js";

document.addEventListener("DOMContentLoaded", function() {

fetch('../data/occupations.json')
  .then(response => response.json())
  .then(jobs => {

    // 找出工作表中最長和最短的職業
    let minLengthJob = jobs.reduce((pre, cur) => pre.JOB.length<cur.JOB.length? pre:cur);
    let maxLengthJob = jobs.reduce((pre, cur) => pre.JOB.length>cur.JOB.length? pre:cur);

    // 從最短開始生成checkbox
    for(let i = minLengthJob.JOB.length; i <= maxLengthJob.JOB.length; i++){
      let curJobs = jobs.filter((j) => j.JOB.length == i);
      curJobs.forEach(j => {writeCheckbox(j)});
    }

  })
  .catch(error => console.error('Error loading JSON:', error));
});

