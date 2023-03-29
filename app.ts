fetch("https://fakestoreapi.com/products").then((data) => {
    return data.json();
}).then((objData) => {
    console.log(objData[0].title)
    var tableData = "";
    type product = {
        id: number;
        title: string;
        description: string;
        price: number;
    }
    objData.map((values:product) => {
        tableData += `<tr>
            <td>${values.id}</td>
            <td>${values.title}</td>
            <td>${values.description}</td>
            <td>${values.price}</td>
        </tr>`;
        let body = document.getElementById(`table-body`)!;
        body.innerHTML = tableData;
    })
}).catch((err:string) => {
    alert('error');
})
