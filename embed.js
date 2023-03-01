
function embed()
{
    var url = document.getElementById('url').value 
		document.getElementById('myframe').src = url;

}

document.getElementById("mybutton").addEventListener("click", embed);