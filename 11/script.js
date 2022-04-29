function table(box) {
    const table = document.createElement("table");
    table.classList = "table";
    let counter = 1;
  
    for (let i = 0; i < box; i++) {
      const tr = document.createElement("tr");
      tr.classList = "row";
      table.appendChild(tr);
  
      for (let j = 0; j < box; j++) {
        const td = document.createElement("td");
        td.classList = "cell";
        td.innerHTML = +counter;
        tr.appendChild(td);
        counter++;
      }
    }
  
    return table;
  }
  const result = table(10)
  document.body.appendChild(result);