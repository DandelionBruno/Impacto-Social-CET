const commentSections = document.querySelectorAll(".comment");

let username = prompt("Ingresa tu nombre de usuario:")

commentSections.forEach(commentSection => {
    const input = commentSection.querySelector(".comment-input");
    const button = commentSection.querySelector(".comment-button");

    button.addEventListener("click", () => {
        let comment = input.value;
        

        let commentAdded = document.createElement("div");
        commentAdded.className = "comment-added";

        let commentUsername = document.createElement("p");
        commentUsername.innerHTML = username;
        commentUsername.style.fontWeight = "900";

        let commentContent = document.createElement("p");
        commentContent.innerHTML = comment;

        commentAdded.append(commentUsername);
        commentAdded.append(commentContent);
        commentSection.append(commentAdded);
    });
});
