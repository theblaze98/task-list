/* ------------------------ */
/* Variables y Constantes */
/* ------------------------ */

const task_list = document.getElementById('list');
let delete_task;
const btn_add_task = document.getElementById('btn_add_task');
const popup = document.getElementById('popup');
const btn_cancel = document.getElementById('btn_cancel');
const btn_ready = document.getElementById('btn_ready');
let checks;
const task_name = document.getElementById('input_task_name');
const task_description = document.getElementById('task_description');

/* ------------------------ */
/* Eventos */
/* ------------------------ */

btn_add_task.addEventListener('click', (e) => {
    popup.classList.add('active');
});

popup.addEventListener('click', (e) => {
    if (e.target.id === popup.id) {
        popup.classList.remove('active');
        task_name.value = '';
        task_description.value = '';
    }
});

btn_cancel.addEventListener('click', (e) => {
    popup.classList.remove('active');
    task_name.value = '';
    task_description.value = '';
});

btn_ready.addEventListener('click', (e) => {
    add_task();

    delete_task = document.querySelectorAll('.fa-times');
    delete_task.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.parentNode.remove();
        });
    });

    checks = task_list.querySelectorAll('.fa-li');

    checks.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (e.target.className.includes('fa-square')) {
                e.target.classList.replace('fa-square','fa-check-square');
            } else if (e.target.className.includes('fa-check-square')) {
                e.target.classList.replace('fa-check-square','fa-square');
            }
        });
    });
});


/* ------------------------ */
/* Funciones */
/* ------------------------ */

const add_task = function() {
    

    task_list.innerHTML += `
        <li class="task">
            <span class="fa-li"><i class="far fa-square"></i></span>
            <h4 class="task-name">${task_name.value}</h4>
            <p class="description">
                ${task_description.value}
            </p>
            <span class="fas fa-times"></span>
        </li>
    `;

    task_description.value = '';
    task_name.value = '';

    popup.classList.remove('active');
}