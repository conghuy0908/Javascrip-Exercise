function convert(){
    let amount = +document.getElementById("amount").value;
    let selection1 = +document.getElementById("selection1").value;
    let selection2 = +document.getElementById("selection2").value;
    let rate = selection1/selection2;
    let result = rate*amount;
    document.getElementById("result").innerText = result;
    
}
