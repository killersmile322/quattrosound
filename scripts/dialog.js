const dialog = document.querySelector("dialog");
const showButton = document.getElementById("dialog_show");
const closeButton = document.getElementById("dialog_close");

dialog.addEventListener("click", (event) => {
    const rect = dialog.getBoundingClientRect();
    const isClickOutside =
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom;

    if (isClickOutside) {
        dialog.close();
    }
});

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
    dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
    dialog.close();
});
