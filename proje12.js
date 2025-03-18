const boxes = document.querySelector(".boxes");

window.addEventListener("keydown", (e) => {
    boxes.innerHTML = `
            <div class="box">${e.key === " " ? "sapce" : e.key}</div>
            <div class="box">${e.keyCode}</div>
            <div class="box">${e.code}</div>`;
    console.log(e);

})