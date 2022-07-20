import fetch from 'node-fetch'
const API = 'https://rickandmortyapi.com/api';

const fechData1 = async () => {
    const url = 'https://rickandmortyapi.com/api/character'
    const res = await fetch(url);
    const data1 = await res.json();
    console.log(data1.info.count);
}
fechData1();

const fechData2 = async () => {
    const url = 'https://rickandmortyapi.com/api/character/1'
    const res = await fetch(url);
    const data2 = await res.json();
    console.log(data2.name);
}
fechData2();

const fechData3 = async () => {
    const url = 'https://rickandmortyapi.com/api/location/1'
    const res = await fetch(url);
    const data3 = await res.json();
    console.log(data3.dimension);
}
fechData3();