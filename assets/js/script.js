/**
 * Display Date
 */
const currentDate = new Date();
const optionDate = {weekday: 'short', month: 'short', day: '2-digit', year: 'numeric'};
const formattedDate = currentDate.toLocaleDateString('en-US', optionDate);

const [dayOfWeek, month, day, year] = formattedDate.split(' ');

const displayDate = `${dayOfWeek}<br><span class="font-bold">${month} ${day} ${year}</span>`;
document.getElementById('dateDisplay').innerHTML = displayDate;

/**
 * Completed Task
 */
const completedTasks = document.querySelectorAll('.completedTask');
const completedList = document.getElementById('completedList');

const taskAssignments = document.getElementById('taskAssigned');
const completedCount = document.getElementById('completedCount');

let tasksAssign = parseInt(taskAssignments.textContent.trim());
let compCount = parseInt(completedCount.textContent.trim());

completedTasks.forEach(task => {
    task.addEventListener('click', function () {
        const taskContainer = task.closest('.rounded-xl');
        const taskNameElement = taskContainer.querySelector('h3');
        const taskName = taskNameElement ? taskNameElement.textContent.trim() : 'Unknown task';

        const newDate = new Date();
        const timeString = newDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: true});

        const listItem = document.createElement('li');
        listItem.className = "bg-[#F4F7FF] p-4 rounded-md mb-4";
        listItem.innerHTML = `<p>You have completed the task <b>${taskName}</b> at ${timeString}</p>`;

        completedList.appendChild(listItem);
        task.disabled = true;

        if (tasksAssign > 0) {
            tasksAssign -= 1;

            taskAssignments.textContent = tasksAssign.toString().padStart(2, '0');
        }

        compCount += 1;
        completedCount.textContent = compCount;

        alert(`Successful! You have completed the task ${taskName}!`);

        if (tasksAssign === 0) {
            alert(`🎉 WOW!!! you have completed all task`);
        }
    });
});

/**
 * Clear Task
 */
const clearTasks = document.getElementById('clearTask');

clearTasks.addEventListener('click', function () {
    completedList.innerHTML = '';

    completedTasks.forEach(task => {
        task.disabled = false;
    });

    tasksAssign = completedTasks.length;
    compCount = 23;
    taskAssignments.textContent = tasksAssign.toString().padStart(2, '0');
    completedCount.textContent = compCount;
});

/**
 * Background Color Change
 */
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

const colorsShades = ["#F4F7FF", "#FFF7E6", "#E6FFF2", "#F3E6FF"];
let currentColorIndex = 0;

themeToggle.addEventListener('click', function () {
    currentColorIndex = (currentColorIndex + 1) % colorsShades.length;
    body.style.backgroundColor = colorsShades[currentColorIndex];
});

document.getElementById('newDiscoverItem').addEventListener('click', function () {
    window.location.href = 'blog.html';
});







