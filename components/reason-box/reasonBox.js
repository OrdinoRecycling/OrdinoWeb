fetch('./components/reason-box/reasonBox.html')
.then(stream => stream.text())
.then(
    response =>
    {
        //console.log(response);
        define(response);
    } 
)

function define(template)
{
    class ReasonBox extends HTMLElement
    {
        constructor()
        {
            
            super();
            let shadow = this.attachShadow({mode: "open"});
            shadow.innerHTML = template; 

            const text = LANG[this.getAttribute("text-id")];    
            let textContainer = shadow.getElementById("text-container");
            let textElement = document.createElement("p");
            textElement.innerText = text;
            textContainer.appendChild(textElement);

        }
    }
    
    window.customElements.define("reason-box", ReasonBox);
}