/* ACCEDER A SECCION DE COMENTARIOS DEL HTML */
const commentSections = document.querySelectorAll(".comment");

/* PREGUNTA POR NOMBRE DE USUARIO */
let username = prompt("Ingresa tu nombre de usuario:")

/* A CADA COMENTARIO DE UNA PUBLICACION SE LE AGREGA FUNCIONAMIENTO */
commentSections.forEach(commentSection => {

    /* se selecciona el input y el boton de cada publicacion */
    const input = commentSection.querySelector(".comment-input");
    const button = commentSection.querySelector(".comment-button");

    button.addEventListener("click", () => {
        let comment = input.value;
        
        /* div que almacene los elementos del comentario */
        let commentAdded = document.createElement("div");
        commentAdded.className = "comment-added";

        /* parrafo para nombre de usuario */
        let commentUsername = document.createElement("p");
        commentUsername.innerHTML = username;
        commentUsername.style.fontWeight = "900";

        /* parrafo que almacena el comentario que escribe el usuario */
        let commentContent = document.createElement("p");
        commentContent.innerHTML = comment;
        
        /* agrupar los diferentes elementos */
        commentAdded.append(commentUsername);
        commentAdded.append(commentContent);
        commentSection.append(commentAdded);
    });
});
