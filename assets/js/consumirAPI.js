// import { MD5 } from './node_modules/crypto-js';


// document.addEventListener ('DOMContentLoaded', function(){
//     obtieneComics();
// });

// // Async - Sirve para hacer funciones asíncronos
// async function obtieneComics(){
    
//     const publicKey ='96a3834334b5035f61b7ab28551e9e93';
//     const privateKey = '24200ee263c222c28fc65e88fc43d0d5c13502fd';
//     const timeStamp = new Date().getTime();
//     const hash =    MD5(timeStamp + privateKey + publicKey);
//     const apiUrl = 'https://gateway.marvel.com/v1/public/comics';
//     const url = `${apiUrl}?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`;
//     try{
//         //Se ejecuta cuando todo anda bien
//         const comics = await fetch(url);
//         const comicsJson = await comics.json();
//         console.log(comicsJson);
//     }
//     catch (error){
//         //Se ejecuta cuando hay un error
//         console.log(error);

//     }
// };


