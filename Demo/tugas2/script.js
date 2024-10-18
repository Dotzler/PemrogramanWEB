function addActivity() {
    const activityInput = document.getElementById('activity-input').value;

    if (activityInput.trim() != "") {
        createActivityElement(activityInput);
        document.getElementById('activity-input').value = '';
    } else {
        alert("Masukkan Aktivitas Anda!");
    }
}

function createActivityElement(activityText) {
    const li = document.createElement('li');
    
    const span = document.createElement('span');
    span.textContent = activityText;

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit');
    editButton.onclick = () => editActivity(li, span);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => li.remove();

    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);

    li.appendChild(span);
    li.appendChild(buttonContainer);

    document.getElementById('activity-list').appendChild(li);
}

function editActivity(li, span) {
    const input = document.createElement('input');
    input.type = 'text';
    input.value = span.textContent;
    input.classList.add('edit-mode');

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.classList.add('edit');
    saveButton.onclick = () => {
        if (input.value.trim() != "") {
            span.textContent = input.value;
            li.removeChild(input);
            li.removeChild(saveButton);
            li.insertBefore(span, li.querySelector('.button-container'));
        } else {
            alert("Teks tidak boleh kosong!");
        }
    };

    li.replaceChild(input, span);
    li.appendChild(saveButton);
    li.querySelector('.edit').remove();
}
