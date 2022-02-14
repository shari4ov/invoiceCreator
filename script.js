const washing = document.getElementById('washing');
const mowing = document.getElementById('mowing');
const pulling = document.getElementById('pulling');
const firstTbl = document.getElementById('first-table');
const washAct = document.querySelector('.wash-act').textContent;
const washPrice=document.querySelector('.wash-price').textContent;
const mowAct = document.querySelector('.mow-act').textContent;
const mowPrice=document.querySelector('.mow-price').textContent;
const pullAct = document.querySelector('.pull-act').textContent;
const pullPrice=document.querySelector('.pull-price').textContent;
const totalPrice = document.getElementById('total-price');
const resetBtn = document.getElementById('reset');
const tasks=[];
const prices=[];


function totalSum(arr){
       totalPrice.textContent=`$${arr.reduce((partialSum,a)=> partialSum+a)}`;
}
function calculating(act,price){
              let content = document.createElement('tr');
              let contentTask = document.createElement('td');
              let contentPrice= document.createElement('td');
              contentTask.innerHTML=`${act} <button class='remove'>Remove</button>`;
              contentPrice.textContent=`$${price}`
              content.append(contentTask,contentPrice);
              firstTbl.append(content);                  
}
const removeBtn = document.querySelectorAll('.remove');
washing.addEventListener('click',function(){
       tasks.push(washAct);
       prices.push(Number(washPrice));
       calculating(washAct,washPrice);
       totalSum(prices);
});
mowing.addEventListener('click',function(){
       tasks.push(mowAct);
       prices.push(Number(washPrice));
       calculating(mowAct,mowPrice);
       totalSum(prices);

})
pulling.addEventListener('click',function(){
       tasks.push(pullAct);
       prices.push(Number(pullPrice));
       calculating(pullAct,pullPrice);
       totalSum(prices);

})

resetBtn.addEventListener('click',function(){
       firstTbl.innerHTML='';
       totalPrice.innerText=''
})