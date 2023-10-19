let gen = document.getElementById("generate");
let genen = document.getElementById("generateen");

gen.addEventListener('click', function(){


let htmltextarea = document.getElementById("htmltextarea");
let text = htmltextarea.value;

let tempDiv = document.createElement("div");
tempDiv.innerHTML = text;

let h2Tags = tempDiv.querySelectorAll("h2");
let h2Texts = [];

h2Tags.forEach(function (h2Tag) {
    h2Texts.push(h2Tag.textContent);
});

function transformText(text) {
    text = text.toLowerCase();

    text = text.split("ł").join("l");

    text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    text = text.replace(/[^a-zA-Z0-9 -]/g, "");
    
    text = text.replace(/ /g, "-");
    
    return text;
}

let transformedTexts = h2Texts.map(function (text) {
    return transformText(text);
});

console.log(transformedTexts);
console.log(h2Texts);

let ans = `<p><b>Spis treści</b></p>
<ul>
`
for (let i = 0; i <= h2Texts.length - 1; i++){
    ans = ans + `<li><a href="#${transformedTexts[i]}">${h2Texts[i]}</a></li>\n`;
}
ans += `</ul>`;

console.log(ans);
document.getElementById("spistresci").innerHTML = ans;
});

genen.addEventListener('click', function(){
    let htmltextarea = document.getElementById("htmltextarea");
    let text = htmltextarea.value;
    
    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = text;
    
    let h2Tags = tempDiv.querySelectorAll("h2");
    let h2Texts = [];
    
    h2Tags.forEach(function (h2Tag) {
        h2Texts.push(h2Tag.textContent);
    });
    
function transformText(text) {
    text = text.toLowerCase();
    
    text = text.split("ł").join("l");
    
    text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    text = text.replace(/[^a-zA-Z0-9 -]/g, "");
        
    text = text.replace(/ /g, "-");
        
    return text;
    }
    
    let transformedTexts = h2Texts.map(function (text) {
        return transformText(text);
    });
    
    
let ans = `<p><b>Table of Contents</b></p>
<ul>
`
    for (let i = 0; i <= h2Texts.length - 1; i++){
        ans = ans + `<li><a href="#${transformedTexts[i]}">${h2Texts[i]}</a></li>\n`;
    }
    ans += `</ul>`;
    
    
    document.getElementById("spistresci").innerHTML = ans;
    });
    