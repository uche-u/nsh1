function getvals(){
    author = document.getElementById("Name").value;
    country = document.getElementById("Country").value;
    text = document.getElementById("review").value;
    output = "<h2>" +author + "</h2>" + "<h3>" + country + "</h3>" + "<p>"+text+"</p>";
    $('#adding').append(output); 
}

