const axios = require('axios');

async function busca(heroe){
    if(heroe=="" || heroe==" "){heroe=" "}
    var url ="https://www.superheroapi.com/api.php/10225922377144977/search/"+heroe;
    // HTML 
    httpGet(url)
    // TESTING
    const response = await axios.get(url)
    return response.data[0].name
    
}
    
function httpGet(theUrl){
    if (window.XMLHttpRequest){
        xmlhttp=new XMLHttpRequest();
    }else{
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            //console.log(xmlhttp.responseText)
            data = JSON.parse(xmlhttp.responseText);
            console.log(data.response)
            if (data.response != "error"){
                llena(data.results)
                return data.response
            }else{
                html = "<tr><td colspan='5'>RESULTADOS:  0</td></tr>"
                html += "<tr><td>ID</td><td>IMG</td><td>NOMBRE</td><td>BANDO</td><td>PUNTAJE</td></tr>"
                try{res = document.getElementById("res"); res.innerHTML = html}catch(e){
                    return false
                }
                return false
            }
        }
    }
    xmlhttp.open("GET", theUrl, true);
    xmlhttp.send();    
}


function llena(data){
    html = "<tr><td colspan='5'>RESULTADOS: <b>"+data.length+"</b></td></tr>"
    html += "<tr><td>ID</td><td>IMG</td><td>NOMBRE</td><td>BANDO</td><td>PUNTAJE</td></tr>"
    for(v=0;v<data.length;v++){
        try{
            res = document.getElementById("res")
            html += "<tr><td>"+data[v].id+"</td><td><img width=80 src='"+data[v].image.url+"'></td><td>"+data[v].name+"</td><td>"+data[v].biography.alignment+"</td><td>"+data[v].powerstats.power+"</td></tr>"
        }catch(e){
            return true
        }
    }
    try{res.innerHTML = html}catch(e){
        return true
    }
  }


  async function getFirstAlbumTitle() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
    return response.data[0].title;
  }


module.exports = { busca, httpGet, llena, getFirstAlbumTitle }

