var emojiTable = document.getElementsByTagName("table")[0];

var rowCount = emojiTable.rows.length;
for (var rowIndex = rowCount - 1; rowIndex >= 0; rowIndex--) {
    let row = emojiTable.rows[rowIndex];
    if (isNaN(row.cells[0].textContent)) {
        emojiTable.deleteRow(rowIndex);
    }
}

var rowCount = emojiTable.rows.length;
for (var rowIndex = rowCount - 1; rowIndex >= 0; rowIndex--) {
    let row = emojiTable.rows[rowIndex];
    let colCount = row.cells.length;
    for (var colIndex = colCount - 1; colIndex >= 0; colIndex--) {
        if (colIndex != 2 && colIndex != colCount - 1) {
            row.deleteCell(colIndex);
        }
    }
}