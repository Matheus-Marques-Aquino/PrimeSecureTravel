document.getElementById("form_cotation").addEventListener("submit", async (event)=>{
    event.preventDefault(); 
    let data = {};
    let inputArray = document.querySelectorAll('#form_cotation input');
    let selectArray = document.querySelectorAll('#form_cotation select');

    inputArray.forEach((input)=>{ data[input.id] = input.value; });
    selectArray.forEach((select)=>{ data[select.id] = select.value; });

    console.log('inputs:', inputArray);
    console.log('selects:', selectArray);
});