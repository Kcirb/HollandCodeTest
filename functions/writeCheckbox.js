async function writeCheckbox(job){
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

export default writeCheckbox;