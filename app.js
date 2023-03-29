fetch("https://fakestoreapi.com/products").then(function (data) {
    return data.json();
}).then(function (objData) {
    console.log(objData[0].title);
    var tableData = "";
    objData.map(function (values) {
        tableData += "<tr>\n            <td>".concat(values.id, "</td>\n            <td>").concat(values.title, "</td>\n            <td>").concat(values.description, "</td>\n            <td>").concat(values.price, "</td>\n          </tr>");
        var body = document.getElementById("table-body");
        body.innerHTML = tableData;
    });
}).catch(function (err) {
    alert('error');
});
