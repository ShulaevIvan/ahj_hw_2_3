export function createTable() {
  const table = document.createElement('table');
  const header = document.createElement('tr');
  const tdHeaderId = document.createElement('th');
  const tdHeaderTitle = document.createElement('th');
  const tdHeaderYear = document.createElement('th');
  const tdHeaderImdb = document.createElement('th');
  tdHeaderId.classList.add('id');
  tdHeaderTitle.classList.add('title');
  tdHeaderImdb.classList.add('imdb');
  tdHeaderYear.classList.add('year');
  tdHeaderId.innerHTML = 'id';
  tdHeaderTitle.textContent = 'title';
  tdHeaderImdb.textContent = 'imdb';
  tdHeaderYear.textContent = 'year';
  header.classList.add('table_header');
  header.appendChild(tdHeaderId);
  header.appendChild(tdHeaderTitle);
  header.appendChild(tdHeaderImdb);
  header.insertBefore(tdHeaderYear, tdHeaderImdb);
  table.appendChild(header);
  table.classList.add('main_table');
  
  return table;
}
  
export function createTableEl(data, table, param, reverse) {
  let tmpTable = document.querySelectorAll('.main_table tr');
  let header = document.querySelectorAll('.table_header th');
  let tr = undefined;
  let td = undefined;
  tmpTable.forEach((item) => {
    if (!item.classList.contains('table_header')) {
      table.removeChild(item);
    }
  });
  
  for (const obj of data) {
    tr = document.createElement('tr')
    for (const value of Object.entries(obj)) {
      header.forEach((item) => {
        item.classList.remove('active_up');
        item.classList.remove('active_down');
        if (item.classList.contains(param) && reverse) {
          item.classList.add('active_up');
        } else if (item.classList.contains(param) && !reverse) {
          item.classList.add('active_down');
        }
      });
      td = document.createElement('td');
      td.textContent = value[1];
      tr.appendChild(td);
      }
      table.appendChild(tr);
    }
}
  
export function sortData(data, objItem, param, reverse) {
  let result = undefined;
  if (typeof(objItem[param]) === 'number' && reverse == true) {
    result = data.sort((a, b) => a[param] - b[param]).reverse();
    return result;
  }else if (typeof(objItem[param]) === 'number' && reverse == false) {
    result = data.sort((a, b) => a[param] - b[param]);
    return result;
  }
  if (typeof(objItem[param]) === 'string' && reverse == true) {
    result = data.sort((a, b) => a[param].toLowerCase() > b[param].toLowerCase() ? 1 : -1).reverse();
    return result;
  }else if (typeof(objItem[param]) === 'string' && reverse == false) {
    result = data.sort((a, b) => a[param].toLowerCase() > b[param].toLowerCase() ? 1 : -1);
    return result;
  }
}
