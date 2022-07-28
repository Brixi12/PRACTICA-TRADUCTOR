
const URL="https://google-translate1.p.rapidapi.com/language/translate/v2";
const formulario= document.querySelector("#formulario");
const resultado = document.querySelector("#results");

formulario.addEventListener("submit",e=>{
    e.preventDefault()
    console.log("envie el  formulario");
    const data = new URLSearchParams(new FormData(formulario));
    //const data =new FormData(formulario);
    console.log(data.get("soucer"))
    console.log(data.get("target"))
    console.log(data.get("q"))


    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': '11cb3af122msh28934688c42013dp1562b6jsn0574ef68b860',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        body: data
    
};

fetch(URL, options)
	.then(response => response.json())

	.then(response =>{
        console.log(response); 
        const {translations}=response.data;
        const {translatedText}=translations[0];
        console.log(translatedText);
        results.innerText=translatedText;
    }) 
	.catch(err => console.error(err));

});