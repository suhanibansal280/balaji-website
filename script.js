fetch("menu.csv")
.then(response => response.text())
.then(data => {
    const rows = data.split("\n");
    let table = document.getElementById("menuTable");

    rows.forEach(row => {
        let cols = row.split(",");
        let tr = document.createElement("tr");

        cols.forEach(col => {
            let td = document.createElement("td");
            td.innerText = col;
            td.style.padding="10px";
            tr.appendChild(td);
        });

        table.appendChild(tr);
    });
});