
import Papa from 'papaparse';

type LinkData = {
  label: string;
  url: string;
};

const linksDB = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRyrBTPnxRvpUCqkoCQU_a3rbiSTSt6_fX2jOutr76o_QbUwIOy_kYx5VPhxcMAt2HpgNYTY_BCtvH4/pub?gid=0&single=true&output=csv';

export const api = {
  links: {
    fetch:async()=>{
      
  const res = await fetch(linksDB);

  const data = await res.text();

  const parsed = await new Promise<LinkData[]>((resolve, reject) => {
    Papa.parse<LinkData>(data, {
      header: true,
      complete: (result) => resolve(result.data),
      error: reject
    });
  });

  return parsed;
    }
  }
}