function add(x){
    document.getElementById('input').value+=x;
}

function clr(){
    document.getElementById('input').value='';
}

function del(){
    var c=document.getElementById('input').value;
    var d=c.slice(0,-1);
    document.getElementById('input').value=d;
}

function calculate() {
    var c = document.getElementById('input').value;
    var op = ['+', '-', '/', '*', '%'];

    for (let i = 0; i < op.length; i++) {
        if (c.includes(op[i])) {
            var n = c.split(op[i]);
            var res;

            for (let j = 0; j < n.length; j++) {
                n[j] = parseFloat(n[j]);
                if (isNaN(n[j])) {
                    document.getElementById('input').value = "Error";
                    return;
                }
            }

            if (op[i] === '+') {
                res = n.reduce((acc, val) => acc + val);
            } else if (op[i] === '-') {
                res = n.reduce((acc, val) => acc - val);
            } else if (op[i] === '*') {
                res = n.reduce((acc, val) => acc * val);
            } else if (op[i] === '/') {
                if (n.some(val => val === 0)) {
                    document.getElementById('input').value = "Error: Division by zero";
                    return;
                }
                res = n.reduce((acc, val) => acc / val);
            } else if (op[i] === '%') {
                res =n.reduce((acc, val) => acc % val);
            }

            document.getElementById('input').value = res;
            return;
        }
    }
}
