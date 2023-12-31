const url = 'http://localhost:3000/data';
//Get
// const xhrGet = new XMLHttpRequest();
// xhrGet.open('GET', url);
// xhrGet.onreadystatechange = () => {
//     console.log(JSON.parse(xhrGet.responseText));
// }
// xhrGet.send()
//POSt
// const data = {
//     params1: 'value1',
//     params2: 'value2',
// }
const xhrPost = new XMLHttpRequest();
const data = 'param1=value1&param2=value2'

xhrPost.open('POST', url);
xhrPost.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhrPost.onreadystatechange = () => {
    console.log(JSON.parse(xhrPost.responseText));
}
xhrPost.send(data)

const xhrPut = new XMLHttpRequest();
const dataStr = '{"key":"valueKey"}'
const itemId = 3
const putUrl = `${url}/${itemId}`
xhrPut.open('PUT', putUrl);
xhrPut.setRequestHeader('Content-Type', 'application/json');
xhrPut.onreadystatechange = () => {
    console.log(JSON.parse(xhrPut.responseText));
}
xhrPut.send(dataStr)




const xhrPatch = new XMLHttpRequest();
const patchItemId = 4
const patchUrl = `${url}/${patchItemId}`
const pathStr = '{"param1": "updateValue"}'
xhrPatch.open('PATCH', patchUrl);
xhrPatch.setRequestHeader('Content-Type', 'application/json');
xhrPatch.onreadystatechange = () => {
    console.log(JSON.parse(xhrPatch.responseText));
}
xhrPatch.send(pathStr)


// const xhrDelete = new XMLHttpRequest();
// const deleteItemId = 1
// const deleteUrl = `${url}/${deleteItemId}`
// xhrDelete.open('DELETE', deleteUrl);
// xhrDelete.setRequestHeader('Content-Type', 'application/json');
// xhrDelete.onreadystatechange = () => {
//     console.log(JSON.parse(xhrDelete.responseText));
// }
// xhrDelete.send()
