//accessing add list button main-
const addList = document.getElementById("addList");    // First page add list button
const popup = document.querySelector(".cardsWrap");   //blank div to append popup

//---- First add list popup ----
addList.addEventListener("click", () => {
  //creating add new list pop up template(addNew)-
  const addNew = document.createElement("div");    //div to append card
  addNew.className = "popup-box";

  const popHeading = document.createElement("p");    //card heading
  popHeading.innerText = "Add new List"; 

  const popInput = document.createElement("input");  //popup input
  popInput.type = "text";
  popInput.placeholder = "Add New List Name Here";
  popInput.style.textAlign= 'center';

  const addBtn = document.createElement("div");     //for-add btn
  addBtn.className = "popup-box-button";
  addBtn.innerText = "Add";

  const closeBtn = document.createElement("div");    //for-cls btn
  closeBtn.className = "popup-box-button";
  closeBtn.innerText = "Close";
  
  //document.querySelector('.container').style.filter = "blur(5px)";   // for blur the main container
  document.querySelector(".container").classList.add("blur");
  
  popup.appendChild(addNew);       // Add created elements into popup
  addNew.appendChild(popHeading);
  addNew.appendChild(popInput);
  addNew.appendChild(addBtn);
  addNew.appendChild(closeBtn);

  // Accessing Add button from popup creating cards (First time)
  addBtn.addEventListener("click", () => {
      document.getElementById("pageText").style.display="none"; //no items in the list

      const box = document.createElement("div");  //box is card
      box.className = "box";

      const boxHeading = document.createElement("span");  //heading
      boxHeading.id="box-heading";

      const line = document.createElement("div");
      line.className = "borderLine"
      
      const add = document.createElement("bottomSign");   // Add button
      add.className = "fa-solid fa-circle-plus";
      
      const deleteBtn = document.createElement("bottomSign");  // Delete button
      deleteBtn.className = "fa-solid fa-trash-can";
      
      const btnContainer = document.createElement("div"); // this is for add & delete button
      btnContainer.className = "button-container";
      
      const containerTwo = document.querySelector(".container2"); // This is the container in which we have to push our cards.

      containerTwo.appendChild(box);     // adding childs in container
      box.appendChild(boxHeading);
      box.appendChild(line);
      box.appendChild(btnContainer);
      btnContainer.appendChild(add);
      btnContainer.appendChild(deleteBtn);
      boxHeading.innerText = popInput.value;
      
      // By clicking on First card heading open new card page 

      boxHeading.addEventListener('click',()=>{
        const heading = document.createElement("div")
        heading.className= "secondCardHeading"
        heading.innerText = popInput.value;
        const backBtn = document.getElementById('backBtn')
        const container = document.querySelector(".container");
        const containerThree = document.querySelector(".container3");
        
        // When we click on card heading and new page open then we only want that new page visible and all are hidden
        container.style.visibility="hidden";
        containerThree.style.visibility="visible";

        // appending whole card of container into container 3
         // containerThree.appendChild(heading)
          containerThree.appendChild(heading)
         containerThree.appendChild(box);

          deleteBtn.addEventListener('click',()=>{
          document.querySelector(".container3").removeChild(box);
          document.querySelector(".container").style.visibility="visible";  // when all cards deleted then main container is visible.
          document.querySelector(".container3").style.visibility="hidden";
        })
        
          backBtn.addEventListener('click',()=>{
          containerThree.removeChild(box);  // When we go back the it remove that second card page.
          containerTwo.appendChild(box);
          document.querySelector(".container").style.visibility="visible";  // when we go back from the second page of card then the main container is to be visible
          document.querySelector(".container3").style.visibility="hidden";
        })
      })
      
      //after clicking add list(input) btn -

      boxHeading.style.borderBottom = "1px solid black";
      popup.removeChild(addNew);  //add list pop up will dissapears
      document.querySelector(".container").classList.remove("blur"); //blur will dissapear
      
      deleteBtn.addEventListener("click", () => {                    //deleting the whole card
        document.querySelector(".container2").removeChild(box);
        
      });

      // The process for new pop up is repeated as created above ( Repeating First process of popup) 
      //again creating template for add new add items-
      
      add.addEventListener("click", () => {
        const addNew = document.createElement("div");
        addNew.className = "popup-box";

        const popHeading = document.createElement("p");
        popHeading.innerText = "Add new Items";

        const popInput = document.createElement("input");
        popInput.type = "text";
        popInput.style.textAlign = "center";
        popInput.placeholder = "Add New Items Here";
        
        const addBtn = document.createElement("div");
        addBtn.className = "popup-box-button";
        addBtn.innerText = "Add";

        const closeBtn = document.createElement("div");
        closeBtn.className = "popup-box-button";
        closeBtn.innerText = "Close";

        popup.appendChild(addNew);
        document.querySelector(".container").classList.add("blur");
        addNew.appendChild(popHeading);
        addNew.appendChild(popInput);
        addNew.appendChild(addBtn);
        addNew.appendChild(closeBtn);

        addBtn.addEventListener("click", () => {

            // creating space/div to appends that list items on card
            const task = document.createElement("div");
            task.className = "task";

            const taskText = document.createElement("span");
            taskText.className = "task-text";
            taskText.innerText = popInput.value;

            const doneButton = document.createElement("button");
            doneButton.innerText = "mark done";
            doneButton.className = "done-button";

            document.querySelector(".container").classList.remove("blur");
            box.appendChild(task);
            task.appendChild(taskText);
            task.appendChild(doneButton);
            popup.removeChild(addNew);

            doneButton.addEventListener("click", () => {
              taskText.style.textDecoration = "line-through";
              task.removeChild(doneButton);
            });
          
        });
        //close btn for the Second add list popup-
        closeBtn.addEventListener("click", () => {
          popup.removeChild(addNew);
          document.querySelector(".container").classList.remove("blur");
        });
      });
    
  });
  //close btn for the First add item popup-

  closeBtn.addEventListener("click", () => {
    popup.removeChild(addNew);
    document.querySelector(".container").classList.remove("blur");
  });
});

