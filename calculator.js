var num1 = "";
var num2 = "";
var sign = "";
var mem = "";
var p = false;  // true when a decimal number is being entered (prevents more than one decimal point to be entered when entering a decimal number)
var space = 25;
var center = 7;
function mc()
{
  mem = "";
}
function mr()
{
  num1 = mem;
}
function mplus()
{
  if(num2 == "" && num1 != "")
  {
    if(mem == "")
    {
      mem = num1;
    }
    else
    {
      mem += "+" + num1;
    }
    mem = parseFloat(eval(mem).toFixed(12)).toString();
  }
  else if(num2 != "")
  {
    equals();
    if(mem == "")
    {
      mem = num1;
    }
    else
    {
      mem += "+" + num1;
    }
    mem = parseFloat(eval(mem).toFixed(12)).toString();
  }
}
function mminus()
{
  if(num2 == "" && num1 != "")
  {
    if(mem == "")
    {
      if(num1.substring(0, 1) == "-")
      {
        mem = num1.substring(1, num1.length);
      }
      else
      {
        mem = "-" + num1;
      }
    }
    else
    {
      mem += "-" + "(" + num1 + ")";
    }
    mem = parseFloat(eval(mem).toFixed(12)).toString();
  }
  else if(num2 != "")
  {
    equals();
    if(mem == "")
    {
      mem = "-" + num1;
    }
    else
    {
      mem += "-" + num1;
    }
    mem = parseFloat(eval(mem).toFixed(12)).toString();
  }
}
function one()
{
  if(sign != "")
  {
    num2 += "1";
  }
  else
  {
    if(num1.charAt(0) == "0" && p != true)
    {
      num1 = "1";
    }
    else
    {
      num1 += "1";
    }
  }
}
function two()
{
  if(sign != "")
  {
    num2 += "2";
  }
  else
  {
    if(num1.charAt(0) == "0" && p != true)
    {
      num1 = "2";
    }
    else
    {
      num1 += "2";
    }
  }
}
function three()
{
  if(sign != "")
  {
    num2 += "3";
  }
  else
  {
    if(num1.charAt(0) == "0" && p != true)
    {
      num1 = "3";
    }
    else
    {
      num1 += "3";
    }
  }
}
function four()
{
  if(sign != "")
  {
    num2 += "4";
  }
  else
  {
    if(num1.charAt(0) == "0" && p != true)
    {
      num1 = "4";
    }
    else
    {
      num1 += "4";
    }
  }
}
function five()
{
  if(sign != "")
  {
    num2 += "5";
  }
  else
  {
    if(num1.charAt(0) == "0" && p != true)
    {
      num1 = "5";
    }
    else
    {
      num1 += "5";
    }
  }
}
function six()
{
  if(sign != "")
  {
    num2 += "6";
  }
  else
  {
    if(num1.charAt(0) == "0" && p != true)
    {
      num1 = "6";
    }
    else
    {
      num1 += "6";
    }
  }
}
function seven()
{
  if(sign != "")
  {
    num2 += "7";
  }
  else
  {
    if(num1.charAt(0) == "0" && p != true)
    {
      num1 = "7";
    }
    else
    {
      num1 += "7";
    }
  }
}
function eight()
{
  if(sign != "")
  {
    num2 += "8";
  }
  else
  {
    if(num1.charAt(0) == "0" && p != true)
    {
      num1 = "8";
    }
    else
    {
      num1 += "8";
    }
  }
}
function nine()
{
  if(sign != "")
  {
    num2 += "9";
  }
  else
  {
    if(num1.charAt(0) == "0" && p != true)
    {
      num1 = "9";
    }
    else
    {
      num1 += "9";
    }
  }
}
function zero()
{
  if(sign != "")
  {
    num2 += "0";
  }
  else
  {
    num1 += "0";
  }
}
function point()
{
  if(p != true)
  {
    if(sign == "")
    {
      if(num1 == "")
      {
        num1 += "0.";
        p = true;
      }
      else
      {
        num1 += ".";
        p = true;
      }
    }
    else
    {
      if(num2 == "")
      {
        num2 += "0.";
        p = true;
      }
      else
      {
        num2 += ".";
        p = true;
      }
    }
  }
}
function sub()
{
  if(num1 == "")
  {
    num1 = "0";
    sign = "-";
  }
  else
  {
    if(num2 == "")
    {
      sign = "-";
    }
    else
    {
      equals();
      sign = "-";
    }
  }
  p = false;
}
function add()
{
  if(num1 == "")
  {
    num1 = "0";
    sign = "+";
  }
  else
  {
    if(num2 == "")
    {
      sign = "+";
    }
    else
    {
      equals();
      sign = "+";
    }
  }
  p = false;
}
function mult()
{
  if(num1 == "")
  {
    num1 = "0";
    sign = "*";
  }
  else
  {
    if(num2 == "")
    {
      sign = "*";
    }
    else
    {
      equals();
      sign = "*";
    }
  }
  p = false;
}
function div()
{
  if(num1 == "")
  {
    num1 = "0";
    sign = "/";
  }
  else
  {
    if(num2 == "")
    {
      sign = "/";
    }
    else
    {
      equals();
      sign = "/";
    }
  }
  p = false;
}
function percent()
{
  if(num2 == "")
  {
    if(num1 != "")
    {
      num1 += "/100";
      num1 = eval(num1).toString();
    }
  }
  else
  {
    if(sign == "+" || sign == "-")
    {
      num2 = num1 + "*" + num2 + "/100";
    }
    else
    {
      num2 = "(" + num2 + "/100)";
    }
  }
  equals();
}
function root()
{
  if(num2 == "")
  {
    if(num1 != "")
    {
      if(num1 < 0)
      {
        var newnum = eval(num1) * (-1);
        num1 = newnum.toString();
      }
      num1 = (Math.sqrt(eval(num1))).toString();
      sign = "";
    }
  }
  else
  {
    if(num2 < 0)
    {
      var newnum = eval(num2) * (-1);
      num2 = newnum.toString();
    }
    num2 = (Math.sqrt(eval(num2))).toString();
  }
  p = false;
}
function negate()
{
  if(num2 != "")
  {
    var newnum = eval(num2) * (-1);
    num2 = newnum.toString();
  }
  else if(num2 == "" && num1 != "")
  {
    var newnum = eval(num1) * (-1);
    num1 = newnum.toString();
  }
  else
  {
    if(num1 == "")
    {
      num1 = "-";
    }
    else
    {
      num1 = "";
    }
  }
}
function ce()
{
  num1 = "";
  num2 = "";
  sign = "";
  p = false;
}
function equals()
{
  if(num1.charAt(num1.length - 1) == ".")
  {
    num1 = num1.substring(0, num1.length - 1);
  }
  if(num2.charAt(num2.length - 1) == ".")
  {
    num2 = num2.substring(0, num2.length - 1);
  }
  var entered = num1 + sign + "(" + num2 + ")";
  if(sign != "" && num2 == "")
  {
    entered = entered.substring(0, entered.length - 1);
  }
  num1 = parseFloat(eval(entered).toFixed(12)).toString();
  sign = "";
  num2 = "";
  if(num1 % 1 != 0)
  {
    p = true;
  }
}
function redraw()
{
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.font = "normal normal normal 55px digital_dreamregular";
  ctx.textBaseline = "middle";
  ctx.textAlign = "end";
  if(num1 == "")
  {
    ctx.fillText("0", ctx.canvas.width - space, ctx.canvas.height / 2 + center, ctx.canvas.width - 2 * space);
  }
  else
  {
    if(sign == "")
    {
      ctx.fillText(num1, ctx.canvas.width - space, ctx.canvas.height / 2 + center, ctx.canvas.width - 2 * space);
    }
    else
    {
      if(num2 == "")
      {
        var print = num1 + sign;
        ctx.fillText(print, ctx.canvas.width - space, ctx.canvas.height / 2 + center, ctx.canvas.width - 2 * space);
      }
      else
      {
        ctx.fillText(num2, ctx.canvas.width - space, ctx.canvas.height / 2 + center, ctx.canvas.width - 2 * space);
      }
    }
  }
}
redraw();
