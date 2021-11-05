window.showCategories=()=>{
    let categories=document.getElementById("categories-container");
    let result=document.getElementById("show-results-grid");
    let search_result=document.getElementById("search-result");
    let clicked_food=document.getElementById("show-clicked-food");
    categories.style.display="block";
    
    categories.innerHTML="";
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list").then((res)=>{
        return res.json();
    })
    .then((res)=>{
        console.log(res.meals);
        addcategories(res.meals);
    })

    function addcategories(data){
        
        data.forEach((el)=>{
            let p=document.createElement("p");

            p.textContent=el.strCategory;
            p.style.textAlign="center";
            p.style.cursor="pointer";

            p.onclick=(()=>{
                categories.style.display="none";
                result.style.display="grid";
                search_result.style.display="none";
                clicked_food.style.display="none";
                result.innerHTML="";
                fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${p.textContent}`).then((res)=>{
                    return res.json();
                })
                .then((res)=>{
                    console.log(res);
                    appendcategory(res.meals);
                })

                function appendcategory(food){
                    food.forEach((el)=>{
                        let div=document.createElement("div");

                        let img=document.createElement("img");
                        img.src=el.strMealThumb;

                        let p1=document.createElement("p");
                        p1.style.textAlign="center";
                        p1.textContent=el.strMeal;
                        

                        div.append(img,p1);

                        img.onclick=(()=>{

                            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${el.idMeal}`).then((res)=>{
                                return res.json();
                            })
                            .then((res)=>{
                                console.log(res);
                                addFromCategories(res.meals);
                            })

                            function addFromCategories(data){
                                data.forEach((el)=>{
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
                                    div2.style.height="600px";
                                    div2.style.backgroundColor="#E3F2FD";
                                    div2.style.overflow="auto";
                                    div2.style.padding="2%"

                

                                    div1.append(img);

                                    div2.append(h1,p2);


                                    clicked_food.append(div1,div2);

                                })
                            }

                        })



                        result.append(div);


                    })
                }

            })

            categories.append(p);

        })

    }

}

export default showCategories