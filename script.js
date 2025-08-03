function myFunction() {
    const body = document.querySelector("#myBody");
    const header = document.getElementById("myHeader");
    const nav = document.getElementById("myNav");
    const main = document.getElementById("myMain");
    const footer = document.querySelector("#myFooter");

    body.style.color = "white"

    header.style.border = "black 2px solid";
    nav.style.border = "black 2px solid";
    main.style.border = "black 2px solid";
    footer.style.border = "black 2px solid";


    main.style.backgroundColor = "gray";
    footer.style.backgroundColor = "black";
}
