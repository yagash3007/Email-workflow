

domo.get('/domo/users/v1?includeDetails=true&limit=200').then(function(data)
{
    console.log(data);
    // console.log(domo.env)
    data.forEach(user => {
        let email = user.detail.email;
        let name = user.displayName;
        console.log(email, name);
    
        // Create HTML string for <li> element
        let liHTML = `<li id="${name}" value="${email}"><a href="#" onclick="handle('${name}')">${name}</a></li>`;
    
        // Append to list1
        let list1 = document.getElementById('appendnew');
        list1.innerHTML += liHTML;

    });
    
})

function handle(id) {
    const element = document.getElementById(id);
    const value = element.innerText; // Get the text content of the element
    element.setAttribute('style', 'background-color: gray;');
    // Add or remove a CSS class to change style
    if (!element.classList.contains('highlighted')) {
      element.classList.add('highlighted'); // Add the class
    } else {
      element.classList.remove('highlighted'); // Remove the class
    }

    document.getElementById('email').textContent = "Email: " + value;

    let store = document.getElementById(id).getAttribute('value')
    document.getElementById('email').value= store
    console.log(store)
  }







domo.get('/domo/users/v1?includeDetails=true&limit=300').then(function(data){
    console.log(data);
  
 //for profile name display
    data.forEach((ele) => {
      if (ele.id == (domo.env).userId) {
        document.getElementById("name").textContent = ele.displayName;
       
      }
    });
  })