fetch('/XML/sheet1.xml') // або підстав URL файлу
  .then(response => response.text())
  .then(xmlText => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, 'application/xml');

    // Отримуємо всі рядки з таблиці
    const rows = xmlDoc.querySelectorAll('sheetData row');

    rows.forEach(row => {
      let rowData = [];

      row.querySelectorAll('c').forEach(cell => {
        const value = cell.querySelector('v')?.textContent || '';
        rowData.push(value);
      });

      console.log(rowData); // Виводимо дані рядка
    });
  })
  .catch(error => console.error('Помилка завантаження XML:', error));
