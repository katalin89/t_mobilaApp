let mobile=[
    {
    brand:"Mira",
    tip:"bucatarie",
    continutSet:4,
    pret:6000,

},
{
    brand:"Irim",
    tip:"Living",
    continutSet:6,
    pret:9000,
},

{
    brand:"yasmine",
    tip:"dormitor",
    continutSet:3,
    pret:7000,
}
]

let show=document.querySelector(".show-mobila");
let ex=document.querySelector(".exemplu");
let propr=document.querySelector(".show-car");
let container=document.querySelector(".container-mobile");
let add=document.querySelector(".add-mobila");
let brand=document.querySelector(".brand-mobil");
let tip=document.querySelector(".tip-mobil");
let continutS=document.querySelector(".continutSet-mobil");
let pret=document.querySelector(".pret-mobil");

let dupaPret=document.querySelector(".sorteaza");

let brandSelectata="";

let sterge=document.querySelector(".sterge");

 function afiseaza(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
 }

 function pretul(arr,p){
    for(let i=0;i<arr.length;i++){
        if(arr[i].pret==p){
            console.log(arr[i]);
        }
    }
 }

 let x=100;

 show.addEventListener("click",()=>{
    alert("E un text alert");
    container.innerHTML=createRows(mobile);
 });

 //functie ce primeste ca parametru un obiect si returneaza un rand

 function createRow(mobila){
    return `<tr>
                <th class="m">${mobila.brand}</th>
                <th>${mobila.tip}</th>
                <th>${mobila.continutSet}</th>
                <th>${mobila.pret}</th>
             </tr>  `;

 }

 //   //functie ce primeste ca parametru un vector si returneaza mai mai multe randuri

function createRows(arr){
    let text="";
    for(let i=0;i<arr.length;i++){
        text+=createRow(arr[i]);
    }
    return text;
}

add.addEventListener("click",() =>{
   
  
       let m= {
          brand: "",
          tip: "",
          continutSet: 0,
          pret: 0,
        }
      
      
      
        m.brand=brand.value;
        m.tip=tip.value;
        m.continutSet=continutS.value;
        m.pret=pret.value;
      
        mobile.push(m);

        container.innerHTML=createRows(mobile);
      
      
      
      });

      function sortare(arr){
        let s;
            for(let i=0;i<arr.length;i++){
                for(let j=i+1;j<arr.length;j++){
                    if(arr[i].pret>arr[j].pret){
                        s=arr[i];
                        arr[i]=arr[j];
                        arr[j]=s;
                    }
                }
            }

            for(let i=0;i<arr.length;i++){
                console.log(arr[i]);
            }
      }


dupaPret.addEventListener("click",()=>{
    sortare(mobile)
    container.innerHTML=createRows(mobile);
});

function pozitia(arr,brand){
    for(let i=0;i<arr.length;i++){
        if(arr[i].brand==brand){
            return i;
        }
    }
    return -1
}
  

  
container.addEventListener("click",(e)=>{
    let obj=e.target;//arata cine a declasnsat clickul

    obj.style.background="red";
    console.log(obj);

    if(obj.classicList.contais("m")){
        brandSelectata=obj.textContent;
    }
});
  
sterge.addEventListener("click",(e)=>{
    if (brandSelectata!=""){
        let poz=pozitia(mobile,brandSelectata);
        mobile.slice(poz,1);

        container.innerHTML=createRows(mobile);
        brandSelectata="";
    }

})
