const submit = document.getElementById("submit");
const input = document.getElementById("input");
const list = document.getElementById("list");

let myitems = [];


submit.addEventListener("click", myFunction)



function myFunction()
{
    inputWords = input.value;
    if (inputWords == "")
    {
    alert("Not Valid!");
    } 

    else 
    {
        input.value = "";
        const li = document.createElement("li");
        li.textContent = inputWords;

        myitems.push(inputWords);
        const itemsString = JSON.stringify(myitems);
        localStorage.setItem("myitems", itemsString);

        console.log(myitems);

        list.appendChild(li);
     
        li.addEventListener("click", () =>
        {         
            const index = myitems.indexOf(li.textContent);

            if (index > -1) {
            myitems.splice(index, 1);
            localStorage.setItem("myitems", JSON.stringify(myitems));
            console.log(myitems);
            }

            li.remove();
        });




        }


}

const retrievedItemsString = localStorage.getItem("myitems");
const retrievedItems = JSON.parse(retrievedItemsString);

const li = document.createElement("li");
li.textContent = retrievedItems;

if (retrievedItems) {
    retrievedItems.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
  
      li.addEventListener("click", () => {
        const index = retrievedItems.indexOf(item);
  
        if (index > -1) {
          retrievedItems.splice(index, 1);
          localStorage.setItem("myitems", JSON.stringify(retrievedItems));
          console.log(retrievedItems);
        }
  
        li.remove();
      });
    });
  }