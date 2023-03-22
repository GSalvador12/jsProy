window.onload = function()
{
    pantalla = document.getElementById("txtRes"); //elemento pantalla de salida
}
    
x = "0"; // current number
x1 = "0";
x2 = "";
op = "";
wasEval = 0;
mustClear = 0;
nextDecimalToken = 0;
decimalSeparator = ((1/10) + "").substring(1,2);



function btnclick(pinum)
{
    if (mustClear == 1)
    {
        mustClear = 0;

        pantalla.value = pinum;
        
        x = pinum;
    }
    else
    {
        if ( (nextDecimalToken == 1) && ( !(x+"").includes(decimalSeparator) ) )
        {
            tmpNum = Number(x + decimalSeparator + pinum);

            nextDecimalToken = 0;
        }
        else
        {
            tmpNum = Number(x + "" + pinum);
        }

        x = tmpNum + "";

        pantalla.value = x;
    }
}

function btnclickop(piope)
{
    if (op == "")
    {
        op = piope;

        x1 = x;

        mustClear = 1;
    }
    else
    {
        x2 = x;

        eval(x1, x2, op);
    }
}

function eval(n1,n2,operation)
{
    switch (operation) 
    {
        case "+":
            x = Number(x1) + Number(x2);
            break;

        case "-":
            x = Number(x1) - Number(x2);
            break;
            
        case "x":

            x = Number(x1) * Number(x2);
            break;
            
        case "/":
            x = Number(x1) / Number(x2);
            break;
    }

    pantalla.value = x;

    x1 = "0";
    x2 = "";
    op = "";

    mustClear = 1;

    //alert(n1 + "," + n2 + "," + operation);
}

function btnchangemasminus()
{
    x = x * (-1);
    pantalla.value = x;
}

function btnclickrun()
{
    if (op != "")
    {
        x2 = x;

        eval(x1, x2, op);
    }
}

function btndecimalclick()
{
    nextDecimalToken = 1;
}

function btnclear()
{
    x1 = "0";
    x2 = "";
    op = "";
    nextDecimalToken = 0;

    pantalla.value = 0;
}