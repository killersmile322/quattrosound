// Функция для отправки данных в Telegram
function sendDataToTelegram(formData) {
    const botToken = "7008235879:AAF0hGFDb-gcntOkPOomSS88LZAY3QmD-7U"; // Токен вашего бота
    const chatId = "-1002632828612"; // ID получателя (пользователя)
    const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`; // URL для отправки сообщения

    // Формируем сообщение в формате HTML
    const message = `
📩 Вам новая заявка:
<b>Имя:</b> ${formData.firstName}
<b>Фамилия:</b> ${formData.lastName}
<b>Телефон:</b> ${formData.phone}
    `;

    // Параметры, которые будем отправлять
    const params = {
        chat_id: chatId, // ID чата
        text: message, // Текст сообщения
        parse_mode: "HTML", // Режим парсинга HTML
    };

    // Отправляем данные с помощью fetch API
    return fetch(apiUrl, {
        method: "POST", // Метод отправки
        headers: {
            "Content-Type": "application/json", // Указываем тип содержимого
        },
        body: JSON.stringify(params), // Преобразуем параметры в JSON
    }).then((response) => response.json()); // Возвращаем ответ в формате JSON
}

const contactUsForm = document.getElementById("contact-us-form");
const modal = document.getElementById("contact-us-form-modal");

// Обработчик события отправки формы
contactUsForm.addEventListener("submit", (e) => {
    console.log("submit");
    e.preventDefault(); // Отменяем стандартное поведение формы
    // Проверяем форму на валидность

    const formData = {
        // Собираем данные из формы
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        phone: document.getElementById("phone-field").value,
    };

    // Показать состояние загрузки
    modal.innerHTML =
        '<div class="modal-content"><p>Отправка данных...</p></div>';
    modal.style.display = "block";

    // Отправляем данные в Telegram
    sendDataToTelegram(formData)
        .then((result) => {
            if (result.ok) {
                // Если данные успешно отправлены
                modal.innerHTML =
                    '<div class="modal-content"><p>Ваша анкета успешно отправлена</p></div>';
            } else {
                // Если произошла ошибка при отправке
                modal.innerHTML =
                    '<div class="modal-content"><p>Ошибка при отправке анкеты. Пожалуйста, попробуйте еще раз.</p></div>';
            }
        })
        .catch((error) => {
            console.error("Error:", error);
            // Обработка ошибки
            modal.innerHTML =
                '<div class="modal-content"><p>Произошла ошибка. Пожалуйста, попробуйте позже.</p></div>';
        })
        .finally(() => {
            // Закрываем модальное окно и сбрасываем форму через 3 секунды
            setTimeout(() => {
                modal.style.display = "none";
                contactUsForm.reset(); // Сброс формы
                updateHobbiesButton(); // Обновляем текст кнопки хобби
            }, 3000);
        });
});
