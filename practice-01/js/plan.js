"use strict";

const totalTasks = 12;
const completedTasks = 5;
const dailyLimit = 3;

if (Number.isInteger(totalTasks) && Number.isInteger(completedTasks) && Number.isInteger(dailyLimit)) {

    if (totalTasks >= 0 && totalTasks <= 1000 && completedTasks >= 0 && completedTasks <= totalTasks) {

        if (dailyLimit >= 1 && dailyLimit <= 1000) {

            const remaining = totalTasks - completedTasks;

            if (remaining === 0) {
                console.log("Все задачи уже выполнены");
                console.log("Потребуется дней: 0");
            } else {
                console.log(`Осталось задач: ${remaining}`);

                let remainingTasks = remaining;
                let day = 0;

                while (remainingTasks > 0) {
                    day += 1;
                    const doneToday = Math.min(dailyLimit, remainingTasks);
                    remainingTasks -= doneToday;
                    console.log(`День ${day}: выполнено ${doneToday}, осталось ${remainingTasks}`);
                }

                console.log(`Потребуется дней: ${day}`);
            }

        } else {
            console.log("Ошибка: дневная норма должна быть целым числом от 1 до 1000.");
        }

    } else {
        console.log("Ошибка: количество задач должно быть в допустимом диапазоне.");
    }

} else {
    console.log("Ошибка: тип данных должен быть целым числом.");
}