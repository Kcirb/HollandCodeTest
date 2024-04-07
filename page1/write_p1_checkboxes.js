document.addEventListener("DOMContentLoaded", function() {

fetch('../data/occupations.json')
  .then(response => response.json())
  .then(data => {
    // 整理出各個向度的職業
    let RJobs = data.filter((j)=>j.CODE.charAt(0) == "R");
    let IJobs = data.filter((j)=>j.CODE.charAt(0)=="I");
    let AJobs = data.filter((j)=>j.CODE.charAt(0)=="A");
    let SJobs = data.filter((j)=>j.CODE.charAt(0)=="S");
    let EJobs = data.filter((j)=>j.CODE.charAt(0)=="E");
    let CJobs = data.filter((j)=>j.CODE.charAt(0)=="C");

    // 找到最長的職業列表作為重複次數
    let maxLength = Math.max(...[RJobs.length, IJobs.length, AJobs.length, SJobs.length, EJobs.length, CJobs.length]);

    // 按照RIASEC的順序排列
    let jobs = []
    for (let i = 0; i<maxLength; i++){
      if(RJobs[i]) jobs.push(RJobs[i]);
      if(IJobs[i]) jobs.push(IJobs[i]);
      if(AJobs[i]) jobs.push(AJobs[i]);
      if(SJobs[i]) jobs.push(SJobs[i]);
      if(EJobs[i]) jobs.push(EJobs[i]);
      if(CJobs[i]) jobs.push(CJobs[i]);
    }

    // 將文字長度超過六個字者放到最後
    jobs.filter((j) => j.JOB.length > 6).forEach(t => jobs.push(jobs.splice(jobs.indexOf(t), 1)[0]));

    // 生成checkbox
    jobs.forEach(j => {writeCheckbox(j)});

  })
  .catch(error => console.error('Error loading JSON:', error));
});

function writeCheckbox(job){
  // console.log(job);
  const checkboxContainer = document.getElementById('checkboxContainer');
  const div = document.createElement('div');
  div.className = 'checkboxShell';
  checkboxContainer.appendChild(div);
  const checkboxShell = checkboxContainer.lastChild;
  if(job.JOB.length>6) div.classList.add('longTextShell') ;
  
  // 生成checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className ='checkbox';
  checkbox.id = `${job.ID}`;
  checkbox.name = job.ID;
  
  //當checkbox被選取時更新selectCounter文字，作為計數器
  checkbox.onchange = () => {
    let checkedCheckboxes = document.querySelectorAll('.checkbox:checked');
    document.getElementById('selectCounter').innerHTML = `您目前選擇的職業張數為：${checkedCheckboxes.length} 張`;
  }
  
  // 生成label
  const label = document.createElement('label');
  label.htmlFor = `${job.ID}`;
  label.appendChild(document.createTextNode(job.JOB));

  
  // 將chekcbox和label添加到容器中
  checkboxShell.appendChild(checkbox);
  checkboxShell.appendChild(label);
}