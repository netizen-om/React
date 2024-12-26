function customRender(reactElemnt,DOM){
    const DOMElement = document.createElement(reactElemnt.type)
    console.log(DOMElement);
    
    DOMElement.innerHTML = reactElemnt.children

    for (const prop in reactElemnt.props) {
        DOMElement.setAttribute(prop, reactElemnt.props[prop])
    }

    DOM.appendChild(DOMElement)
}

const reactElement = {
    type : "a",
    props : {
        href : "https://google.com",
        target : "_blanck"
    },
    children : "Vist Google"
}

const DOM = document.querySelector('#root')

customRender(reactElement,DOM)