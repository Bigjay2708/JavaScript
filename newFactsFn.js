
function newFacts(facts, container) {
    const factDiv = document.createElement("div");
    factDiv.classList.add("card");
        const factParagraph = document.createElement("p");
    factParagraph.textContent = fact.text;
    factDiv.appendChild(factParagraph);
    container.appendChild(factDiv);
  });
}

