import jsonData from '../components/filter/data'
import { createTable, createTableEl, sortData } from '../components/filter/filter'

window.addEventListener('DOMContentLoaded', ()=> {
    const table = createTable();
    const params = ['id', 'id', 'title', 'title', 'year', 'year', 'imdb', 'imdb'];
    let data = jsonData;
    let counter =  0;
    let datacounter = 0;
    let reverse = false;

    setInterval(()=> {
      data = sortData(data, data[datacounter],  params[counter], reverse);
      createTableEl(data, table, params[counter], reverse);
      counter += 1;
      datacounter += 1;
      if (datacounter === data.length) {
        datacounter = 0;
      }
      if (counter === params.length) {
        counter = 0;
      }
      if (reverse) reverse = false;
      else if (!reverse)reverse = true;
    }, 2000);

    document.body.appendChild(table);
});
