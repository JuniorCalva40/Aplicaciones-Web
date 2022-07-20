//Tarea 1
import fetch from "node-fetch";
const API = "https://rickandmortyapi.com/api";


const fetchData = async (urlAPI) => {
    const response = await fetch(urlAPI);
    return response.json();
};

async function FunFetchData() {
    try {
        const data1 = await fetchData(`${API}/character`);
        console.log(data1.info.count);

        const data2 = await fetchData(`${API}/character/${data1.results[0].id}`);
        console.log(data2.name);

        const data3 = await fetchData(`${API}/location/${data2.id}`);
        console.log(data3.dimension);
    } catch (er) {
        console.error(er);
    }
}

FunFetchData();