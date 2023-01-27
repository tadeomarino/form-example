const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    alert(`Nombre: ${name}\nEmail: ${email}`);
})