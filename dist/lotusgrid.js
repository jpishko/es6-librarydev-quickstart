var lotusgrid = (function () {
    'use strict';

    function lotusgrid(config) {
        if (!(config.hasOwnProperty("id"))) {
            throw new Error("No id property found in config object.");
        }
        let table = document.getElementById(config.id);
        let row = document.createElement("tr");
        let cell = document.createElement("td");
        cell.innerHTML = "test";
        row.appendChild(cell);
        table.appendChild(row);
        console.log("done3");
    }

    return lotusgrid;

}());
//# sourceMappingURL=lotusgrid.js.map
