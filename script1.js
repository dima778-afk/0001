const surnameDetails = {
    "Kovalchuk": "Іван Ковальчук, народився 1980 року, походить з Житомирщини. Відомий своїми ремеслами у виробництві меблів.",
    "Melnyk": "Оксана Мельник, народилася 1992 року, працює дизайнером інтер'єрів. Її роботи відзначені за креативність.",
    "Shevchenko": "Тарас Шевченко, рік народження 1814. Великий український поет, прозаїк, художник та громадський діяч.",
    "Petrenko": "Сергій Петренко, 1975 р.н., викладач математики у київському університеті. Автор кількох наукових праць.",
    "Ivanenko": "Анна Іваненко, 1988 р.н., лікар-педіатр. Завжди готова допомогти своїм маленьким пацієнтам.",
    "Tkachenko": "Дмитро Ткаченко, 1965 р.н., фермер. Займається вирощуванням органічних овочів на Черкащині.",
    "Savchenko": "Вікторія Савченко, 2000 р.н., студентка Національного університету. Активістка молодіжного руху.",
    "Polishchuk": "Олег Поліщук, 1978 р.н., інженер-програміст. Спеціалізується на розробці мобільних додатків.",
    "Zelenskyy": "Володимир Зеленський, народився 1978 року. Президент України." // Додаємо нове прізвище
};

const listView = document.getElementById('list-view');
const detailsView = document.getElementById('details-view');
const detailSurnameName = document.getElementById('detail-surname-name');
const detailSurnameInfo = document.getElementById('detail-surname-info');
const backToListButton = document.getElementById('back-to-list');

const surnameList1 = document.getElementById('surname-list-1');
const surnameList2 = document.getElementById('surname-list-2');

// Функція для створення кнопки прізвища
function createSurnameButton(surnameKey, isSecondary = false) {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.className = 'surname-button';
    if (isSecondary) {
        button.classList.add('secondary');
    }
    button.dataset.surname = surnameKey; // Зберігаємо ключ прізвища
    button.textContent = surnameKey; // Відображаємо сам ключ (Kovalchuk, Ivanenko тощо)

    button.addEventListener('click', () => {
        detailSurnameName.textContent = surnameKey;
        detailSurnameInfo.textContent = surnameDetails[surnameKey] || "Деталі не знайдено.";

        listView.style.display = 'none';
        detailsView.style.display = 'block';
    });

    li.appendChild(button);
    return li;
}

// Розділяємо прізвища на два списки (наприклад, перші 4 і наступні)
const allSurnames = Object.keys(surnameDetails);
const list1Surnames = allSurnames.slice(0, 4); // Перші 4 прізвища
const list2Surnames = allSurnames.slice(4); // Решта прізвищ

// Генеруємо кнопки для Списку 1
list1Surnames.forEach(surnameKey => {
    surnameList1.appendChild(createSurnameButton(surnameKey, false));
});

// Генеруємо кнопки для Списку 2
list2Surnames.forEach(surnameKey => {
    surnameList2.appendChild(createSurnameButton(surnameKey, true)); // Передаємо true для secondary класу
});

// Обробник для кнопки "Повернутися до списку"
backToListButton.addEventListener('click', () => {
    listView.style.display = 'block';
    detailsView.style.display = 'none';
});
