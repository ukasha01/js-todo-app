function add() {

    inp = document.getElementById('user-Inp')
    table = document.getElementById("content");
    tr = document.createElement('tr');
    var td_1 = document.createElement('th');
    var td_2 = document.createElement('td');
    var td_3 = document.createElement('td');
    var edit_btn = document.createElement('button');
    var delet_btn = document.createElement('button');
    edit_btn.setAttribute("onClick", "edit(this)")
    delet_btn.setAttribute("onclick", "delet(this)")
    edit_btn.className = "edit-btn1"
    delet_btn.className = "delet_btn2"
    // console.log(edit_btn)
    inp_text = document.createTextNode(inp.value)
    var edit_text = document.createTextNode('Edit');
    var delet_text = document.createTextNode('Delet');
    td_1.className = "user_text";
    td_2.className = "edit-btn";
    td_3.className = "delet-btn";
    if (inp_text.length > 0) {
        td_1.appendChild(inp_text);
        edit_btn.appendChild(edit_text)
        delet_btn.appendChild(delet_text)
        td_2.appendChild(edit_btn);
        td_3.appendChild(delet_btn);
        tr.appendChild(td_1);
        tr.appendChild(td_2);
        tr.appendChild(td_3);
        table.appendChild(tr);
        inp.value = ""
    }
    else {
        alert('please enetr a data')
    }


}
function delet_All() {
    table.innerHTML = ""
}
function delet(e) {
    e.parentNode.parentNode.remove()
}
function edit(d) {
    x = d.parentNode.previousSibling.innerHTML
    
    // console.log(x)
    edit_User_text = prompt("enter a data", x);

    if (edit_User_text == "") {
        alert("please enter a data");

    }
    else {
        d.parentNode.previousSibling.innerHTML = edit_User_text
    }


}