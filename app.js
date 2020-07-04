// function getnum(num)
// {
//     console.log(num)
//     var result = document.getElementById("ans")
//     result.value += num
// }

// function getresult()
// {
//     var result = document.getElementById("ans")
//     result.value = eval(result.value)
// }

function getnum(num)
{
    console.log(num)
    var result = document.getElementById("inp")
    result.value += num
}
function clearr()
{
    var result = document.getElementById("inp")
    result.value = "";
}

function getResult()
{
    var result = document.getElementById("inp")
    result.value = eval(result.value)
}