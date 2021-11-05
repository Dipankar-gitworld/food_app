let timerId;

let addSearchResult=()=>{
    let categories=document.getElementById("categories-container");
    let result=document.getElementById("show-results-grid");
    let search_result=document.getElementById("search-result");
    let clicked_food=document.getElementById("show-clicked-food");
    
    
    
    search_result.style.display="block";
    search_result.innerHTML="";
    let name=document.getElementById("name").value;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`).then((res)=>{
        return res.json();
    })
    .then((res)=>{
       console.log(res);
       addFoodNames(res.meals);
    })

    function addFoodNames(data){
        data.forEach((el)=>{
            let p=document.createElement("p");
            p.textContent=el.strMeal;
            p.style.cursor="pointer";
            
            p.onclick=()=>{
                categories.style.display="none";
                result.style.display="none";
                search_result.style.display="none";
                clicked_food.style.display="flex";
                clicked_food.innerHTML="";

                let div1=document.createElement("div");
                let div2=document.createElement("div");
                
                let img=document.createElement("img");
                img.src=el.strMealThumb;

                let h1=document.createElement("h2");
                h1.textContent=el.strMeal+"'s Receipe";
                h1.style.textAlign="center";
                h1.style.margin="0";

                let p2=document.createElement("p");
                p2.textContent=el.strInstructions;
                p2.style.marginTop="4px";

                div1.style.flexBasis="40%";
                div2.style.flexBasis="60%";

                

                div1.append(img);

                div2.append(h1,p2);
                div2.style.height="600px";
                div2.style.backgroundColor="#E3F2FD";
                div2.style.overflow="auto";
                div2.style.padding="2%"


                clicked_food.append(div1,div2);
                
            }

            search_result.append(p);
        })
    }

}


let debounce= (func,delay)=>{

    if(timerId){
        clearTimeout(timerId);
    }


     timerId=setTimeout(()=>{
        func();
    },delay);
}  

window.addSearchResult=addSearchResult;
window.debounce=debounce;



export {addSearchResult,debounce}
