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
      jobs.filter((j) => j.JOB.length > 6).forEach(t => jobs.push(jobs.splice(jobs.indexOf(t), 1)[0]));
      
      // 針對json檔案的每個物件執行
      jobs.forEach(j => {isInURL(j.ID)? writeCheckbox(j):null});
    })
    .catch(error => console.error('Error loading JSON:', error));
  });
  
function writeCheckbox(job){
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