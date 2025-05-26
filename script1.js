// Окремі об'єкти для кожного списку прізвищ
const surnameDetailsList1 = {
    "Kovalchuk": "Іван Ковальчук, народився 1980 року, походить з Житомирщини. Відомий своїми ремеслами у виробництві меблів.",
    "Melnyk": "Оксана Мельник, народилася 1992 року, працює дизайнером інтер'єрів. Її роботи відзначені за креативність.",
    "Shevchenko": "Тарас Шевченко, рік народження 1814. Великий український поет, прозаїк, художник та громадський діяч.",
    "Petrenko": "Сергій Петренко, 1975 р.н., викладач математики у київському університеті. Автор кількох наукових праць."
};

const surnameDetailsList2 = {
    "Ivanenko": "Анна Іваненко, 1988 р.н., лікар-педіатр. Завжди готова допомогти своїм маленьким пацієнтам.",
    "Tkachenko": "Дмитро Ткаченко, 1965 р.н., фермер. Займається вирощуванням органічних овочів на Черкащині.",
    "Savchenko": "Вікторія Савченко, 2000 р.н., студентка Національного університету. Активістка молодіжного руху.",
    "Polishchuk": "Олег Поліщук, 1978 р.н., інженер-програміст. Спеціалізується на розробці мобільних додатків.",
    "Zelenskyy": "Володимир Зеленський, народився 1978 року. Президент України." // Нове прізвище для Списку 2
};

// Об'єднуємо всі деталі в один об'єкт для зручного пошуку
// Це дозволить знайти деталі незалежно від того, в якому списку знаходиться прізвище
const allSurnameDetails = { ...surnameDetailsList1, ...surnameDetailsList2 };


const listView = document.getElementById('list-view');
const detailsView = document.getElementById('details-view');
const detailSurnameName = document.getElementById('detail-surname-name');
const detailSurnameInfo = document.getElementById('detail-surname-info');
const backToListButton = document.getElementById('back-to-list');

const surnameList1 = document.getElementById('surname-list-1');
const surnameList2 = document.getElementById('surname-list-2');

// Функція для створення кнопки прізвища
// Тепер приймає також об'єкт з деталями для прив'язки
function createSurnameButton(surnameKey, detailsObject, isSecondary = false) {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.className = 'surname-button';
    if (isSecondary) {
        button.classList.add('secondary');
    }
    button.dataset.surname = surnameKey; // Зберігаємо ключ прізвища
    button.textContent = surnameKey; // Відображаємо сам ключ (Kovalchuk, Ivanenko тощо)

    button.addEventListener('click', () => {
        // Тепер шукаємо деталі в об'єднаному об'єкті
        detailSurnameName.textContent = surnameKey;
        detailSurnameInfo.textContent = allSurnameDetails[surnameKey] || "Деталі не знайдено.";

        listView.style.display = 'none';
        detailsView.style.display = 'block';
    });

    li.appendChild(button);
    return li;
}

// Генеруємо кнопки для Списку 1
// Передаємо surnameDetailsList1 як джерело даних
Object.keys(surnameDetailsList1).forEach(surnameKey => {
    surnameList1.appendChild(createSurnameButton(surnameKey, surnameDetailsList1, false));
});

// Генеруємо кнопки для Списку 2
// Передаємо surnameDetailsList2 як джерело даних та isSecondary = true
Object.keys(surnameDetailsList2).forEach(surnameKey => {
    surnameList2.appendChild(createSurnameButton(surnameKey, surnameDetailsList2, true));
});

// Обробник для кнопки "Повернутися до списку"
backToListButton.addEventListener('click', () => {
    listView.style.display = 'block';
    detailsView.style.display = 'none';
});
