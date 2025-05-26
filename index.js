 const surnameDetails = {
            "Kovalchuk": "Іван Ковальчукккк, народився 1980 року, походить з Житомирщини. Відомий своїми ремеслами у виробництві меблів.",
            "Melnyk": "Оксана Мельник, народилася 1992 року, працює дизайнером інтер'єрів. Її роботи відзначені за креативність.",
            "Shevchenko": "Тарас Шевченко, рік народження 1814. Великий український поет, прозаїк, художник та громадський діяч.",
            "Petrenko": "Сергій Петренко, 1975 р.н., викладач математики у київському університеті. Автор кількох наукових праць.",
            "Ivanenko": "Анна Іваненко, 1988 р.н., лікар-педіатр. Завжди готова допомогти своїм маленьким пацієнтам.",
            "Tkachenko": "Дмитро Ткаченко, 1965 р.н., фермер. Займається вирощуванням органічних овочів на Черкащині.",
            "Savchenko": "Вікторія Савченко, 2000 р.н., студентка Національного університету. Активістка молодіжного руху.",
            "Polishchuk": "Олег Поліщук, 1978 р.н., інженер-програміст. Спеціалізується на розробці мобільних додатків."
        };

        const listView = document.getElementById('list-view');
        const detailsView = document.getElementById('details-view');
        const detailSurnameName = document.getElementById('detail-surname-name');
        const detailSurnameInfo = document.getElementById('detail-surname-info');
        const backToListButton = document.getElementById('back-to-list');

        document.querySelectorAll('.surname-button').forEach(button => {
            button.addEventListener('click', () => {
                const surname = button.dataset.surname;
                detailSurnameName.textContent = surname;
                detailSurnameInfo.textContent = surnameDetails[surname] || "Деталі не знайдено.";

                listView.style.display = 'none';
                detailsView.style.display = 'block';
            });
        });

        backToListButton.addEventListener('click', () => {
            listView.style.display = 'block';
            detailsView.style.display = 'none';
        });
