document
  .getElementById('fileInput')
  .addEventListener('change', async function (event) {
    const file = event.target.files[0];
    if (!file) return;

    const zip = await JSZip().loadAsync(file);

    const sheetXml = await zip.file('xl/worksheets/sheet1.xml').async('text');
    const sharedStringsXml = zip.file('xl/sharedStrings.xml')
      ? await zip.file('xl/sharedStrings.xml').async('text')
      : null;

    displayTable(sheetXml, sharedStringsXml);
  });

function displayTable(sheetXml, sharedStringsXml) {
  const parser = new DOMParser();
  const sheetDoc = parser.parseFromString(sheetXml, 'application/xml');
  const sharedStrings = sharedStringsXml
    ? parseSharedStrings(sharedStringsXml)
    : [];

  const rows = sheetDoc.querySelectorAll('sheetData row');
  const table = document.getElementById('dataTable');
  table.innerHTML = '';

  rows.forEach(row => {
    const tr = document.createElement('tr');
    row.querySelectorAll('c').forEach(cell => {
      const value = cell.querySelector('v')?.textContent || '';
      const type = cell.getAttribute('t');

      const td = document.createElement(row.rowIndex === 0 ? 'th' : 'td');
      td.textContent = type === 's' ? sharedStrings[value] : value;
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });
}

function parseSharedStrings(xml) {
  const doc = new DOMParser().parseFromString(xml, 'application/xml');
  return [...doc.querySelectorAll('si t')].map(el => el.textContent);
}
