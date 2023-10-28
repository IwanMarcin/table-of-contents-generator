let generatePL = document.getElementById("generate");
let generateEN = document.getElementById("generateen");

function tableOfContents(content){
    let htmltextarea = document.getElementById("htmltextarea");
    let textFromUser = htmltextarea.value;

    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = textFromUser;

    let h2Tags = tempDiv.querySelectorAll("h2");
    let h2Texts = [];

    h2Tags.forEach(function (h2Tag) {
            h2Texts.push(h2Tag.textContent);
        }
    );

    const transformText = (textFromUser) => textFromUser
        .toLowerCase()
        .split("ł")
        .join("l")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-zA-Z0-9 -]/g, "")
        .replace(/ /g, "-");

    let transformedTexts = h2Texts.map(function (textFromUser) {
        return transformText(textFromUser);
    });

    let parser = new DOMParser();
    let doc = parser.parseFromString(textFromUser, 'text/html');
    let genenidh2 = doc.querySelectorAll('h2');
        
    for (let i=0; i < genenidh2.length; i++) {
        genenidh2[i].id = transformedTexts[i];
    }
    
    textFromUser = doc.body.innerHTML;
    
    for (let i = 0; i <= h2Texts.length - 1; i++) {
        content = content + `<li><a href="#${transformedTexts[i]}">${h2Texts[i]}</a></li>\n`;
    }

    content += `</ul>`;
    document.getElementById("spistresci").innerHTML = `${content} \n ${textFromUser}`;

    return h2Texts;
}

generatePL.addEventListener('click', function() {
    let content = `<p><b>Spis treści</b></p>\n<ul>`;
    tableOfContents(content);    
});

generateEN.addEventListener('click', function() {
    let content = `<p><b>Table of Contents</b></p>\n<ul>`;
    tableOfContents(content);
})
    
