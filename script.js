// console.log("hi")
showNotes();
const typeWords = document.getElementById('textarea');
const btn = document.querySelector('.btn');

btn.addEventListener('click',function(){
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes)
    };
    notesObj.push(typeWords.value);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    showNotes();
})
function showNotes(){
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes)
    };
    let html = '';
    notesObj.forEach(function(Element,index){
        html += `<div class="notes">
        <h2>notes ${index + 1}</h2>
        <p>${Element}</p>
        <button class="dltBtn" id = '${index}' onclick = deletedBtn(this.id)>Delete Note</button>
        </div>`
    });
    let notesElm = document.querySelector('.all-notes');
    if(notes != 0){
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}
function deletedBtn(index){
    notesObj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    showNotes();
}