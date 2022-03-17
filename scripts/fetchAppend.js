const  getData = async (url) =>{
    try{
        let res  = await fetch (url)

        let data = await res.json()

        return data ;
    }
    catch(error){
        console.log("error :",error);
    }
};

const append =  (data,parent) =>{

    parent.innerHTML=null ;

    if(data.length>1){
        data.forEach(({ strMeal })=>{

            let div = document.createElement("div");

            let name = document.createElement("p");
            name.innerHTML="Dish :" + " "+data.meals.strMeal  ;
            // console.log(name);
    
            let img = document.createElement("img")
            img.src=data.meals.strMealThumb;
            img.setAttribute("clasa","imgBox")
    
            let cat = document.createElement("p")
            cat.innerHTML="Category :" + " "+data.meals.strCategory
    
            let type = document.createElement("p")
            type.innerHTML="Area :" + " "+data.meals.strArea
    
            let ins = document.createElement("p")
            ins.innerHTML="Instructions :" + " "+data.meals.strInstructions
            
            
    
            div.append(img,name,cat,type,ins)
    
            parent.append(div);
        })

    }
    else{
        let div = document.createElement("div");

        let name = document.createElement("p");
        name.innerHTML="Dish :" + " "+data.meals[0].strMeal  ;
        // console.log(name);

        let img = document.createElement("img")
        img.src=data.meals[0].strMealThumb;
        img.setAttribute("clasa","imgBox")

        let cat = document.createElement("p")
        cat.innerHTML="Category :" + " "+data.meals[0].strCategory

        let type = document.createElement("p")
        type.innerHTML="Area :" + " "+data.meals[0].strArea

        let ins = document.createElement("p")
        ins.innerHTML="Instructions :" + " "+data.meals[0].strInstructions
        
        

        div.append(img,name,cat,type,ins)

        parent.append(div);
    }

    // data.forEach(({ strMeal })=>{

       
    // })
}

export {getData,append};