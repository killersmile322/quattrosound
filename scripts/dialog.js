const allSongs = [
    {
        categoryName: "Джаз каверы",
        songs: [
            { title: "Название песни", author: "Автор(ы)" },
            { title: "Название песни", author: "Автор(ы)" },
            { title: "Название песни", author: "Автор(ы)" },
            { title: "Название песни", author: "Автор(ы)" },
            { title: "Название песни", author: "Автор(ы)" },
            { title: "Название песни", author: "Автор(ы)" },
            { title: "Название песни", author: "Автор(ы)" },
        ],
    },
    {
        categoryName: "Киномузыка",
        songs: [
            { title: "Название песни", author: "Автор(ы)" },
            { title: "Название песни", author: "Автор(ы)" },
            { title: "Название песни", author: "Автор(ы)" },
        ],
    },
    {
        categoryName: "Салонный стиль",
        songs: [
            { title: "Название песни", author: "Автор(ы)" },
            { title: "Название песни", author: "Автор(ы)" },
            { title: "Название песни", author: "Автор(ы)" },
            { title: "Название песни", author: "Автор(ы)" },
        ],
    },
    {
        categoryName: "Классика",
        songs: [
            { title: "Название песни", author: "Автор(ы)" },
            { title: "Название песни", author: "Автор(ы)" },
            { title: "Название песни", author: "Автор(ы)" },
            { title: "Название песни", author: "Автор(ы)" },
            { title: "Название песни", author: "Автор(ы)" },
        ],
    },
    {
        categoryName: "Новый год",
        songs: [{ title: "Название песни", author: "Автор(ы)" }],
    },
];

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

const handleClickCategory = (element) => {
    const categories = dialog.querySelectorAll("li");
    categories.forEach((category) => {
        category.dataset.open = false;
    });
    element.dataset.open = true;
    console.log(allSongs[element.dataset.id])
};
