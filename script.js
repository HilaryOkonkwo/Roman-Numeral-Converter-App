const form = document.getElementById("form");
const numberOutput = document.getElementById("output");
const convertButton = document.getElementById("convert-btn");

const convert = num => {
    const base = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ]
    const val = [];
    
    base.forEach(function(arr){
        while(num >= arr[1]){
            val.push(arr[0]);
            num -=arr[1];
        }

    })
return val.join('');
};

const isValid = (str, int) => {
  let errMsg = " ";
 if(!str || str.match(/[e.]/g)){
    errMsg = "Please enter a valid Number.";
  } else if(int < 1){
    errMsg = "Please enter a number greater than or equal to 1.";
 } else if (int >= 4000){
    errMsg = "Please enter a number less than or equal to 3999";
 }
 else{
    return true;
 }

 numberOutput.innerText = errMsg;
 numberOutput.classList.add('alert');
 return false;

}

const wipeOutput = () => {
    numberOutput.innerText = " ";
    numberOutput.classList.remove('alert');
}

const UIUpdate = () => {
    const numStr = document.getElementById('number').value;
    const int = parseInt(numStr, 10);
    numberOutput.classList.remove('hidden');

    wipeOutput();
    
    if(isValid(numStr, int)){
        numberOutput.innerText = convert(int);
    }

}

form.addEventListener('submit', e => {
    e.preventDefault();
    UIUpdate();
  })

convertButton.addEventListener('click', () =>{
    UIUpdate();
  })

