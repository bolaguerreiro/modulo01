let options = {
    method: 'GET'
};
fetch('https://api.thecatapi.com/v1/images/search?limit=10', options)
.then((response) => {
    return response.json();
})
.then((responseApi) => {
    let url = responseApi.url;
    for (let i of responseApi){
    document.write (`<img width='200' height='200' src=’${i.url}’/> <br />`);
    }
    })