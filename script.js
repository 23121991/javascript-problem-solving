console.log("hello world");
const url = "https://dog.ceo/api/breeds/list/all"

let data;
// fetch(url).then(res=>res.json()
// ).then(res=>{
//     console.log(res);
//     //return res;
//     data = res.message;
//     populate();

// })
// console.log(data);



async function myFunc() {
    try {
        const res = await fetch(url);
        data = await res.json();
        data = data.message;
        populate(' ');
    } catch (exp) {
        console.log(exp);
    }
}

myFunc();

const inpEle = document.createElement("input");
inpEle.type = "text";
const body = document.getElementsByTagName("body")[0];
console.log(body);
body.appendChild(inpEle);
const table = document.createElement("table");
body.appendChild(table);


function populate(searchText) {
    console.log(data);
    table.innerHTML = "";
    let data1 = Object.keys(data)
    if (searchText)
        data1 = data1.filter(val => val.startsWith(searchText.toLowerCase()))


    for (let i of data1) {

        const tr = document.createElement("tr");
        const td = document.createElement("td");
        const td1 = document.createElement("td");
        console.log(i);
        td.innerHTML = i.toUpperCase();
        td1.innerHTML = data[i].join().toUpperCase();
        // tr.appendChild(td);
        // tr.appendChild(td1);
        tr.append(td, td1);
        table.appendChild(tr);

    }
}

inpEle.addEventListener("keyup", (event) => {
    console.log(event.target.value);
    populate(event.target.value);
})