"use strict";

const totalTasks = 5;
const completedTasks = 2.5;

// Здесь разместите своё решение.


if (Number.isInteger(totalTasks) && Number.isInteger(completedTasks)) {

    

    if (totalTasks >= 0 && totalTasks <= 1000 && completedTasks >= 0 && completedTasks <= totalTasks) {
        if (totalTasks === 0 && completedTasks === 0) {
            console.log("Задач пока нет");
            
        } else {

            const remainingTasks = totalTasks - completedTasks;
            const status = remainingTasks === 0 ? "Завершено" : remainingTasks === totalTasks ? "Не начато" : "В работе";
            const progress = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

            console.log(`Всего задач: ${totalTasks}`);
            console.log(`Выполнено: ${completedTasks}`);
            console.log(`Осталось: ${remainingTasks}`);
            console.log(`Прогресс: ${progress.toFixed(1)}%`);
            console.log(`Статус: ${status}`);
        
        }

    } else {
        console.log("Ошибка: количество задач должно быть в диапазоне от 0 до 1000, а количество выполненных задач не может превышать общее количество задач.");
    }

} else {
    console.log("Ошибка: тип данных должен быть целым числом.");
}
