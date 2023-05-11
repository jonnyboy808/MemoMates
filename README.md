# MemoMates

![MIT Badge](https://img.shields.io/badge/license-MIT-green)

## Technology Used 

| Technology Used (API & Framework)         | Resource URL           | 
| ------------- |:-------------:| 
| AOS Library   | [https://michalsnik.github.io/aos/](https://michalsnik.github.io/aos/) | 
| Bootstrap     | [https://getbootstrap.com](https://getbootstrap.com)  |   
| MYSQL | [https://www.mysql.com/](https://www.mysql.com)     |
| bcrypt   | [https://www.npmjs.com/package/bcrypt](https://www.npmjs.com/package/bcrypt)   |
| Express   | [https://www.npmjs.com/package/express](https://www.npmjs.com/package/express)  |
| Handlebars  | [https://handlebarsjs.com](https://handlebarsjs.com)  |

---

## Description 

[Visit the Deployed Site](https://memomates.herokuapp.com/)

The site is designed to be simple and easy to use, with a minimalistic interface that allows you to quickly create and store notes about people you want to reconnect with. Whether it's an old friend from high school, a former colleague, or a distant relative, MemoMates can help you stay organized and focused on reaching out to those you've lost touch with. 

## User Stories
``` 
1 User
To see a sign in or sign up form
So that I can sign in or sign up
Front-end login display and html page with a form
Back-end login that serves up a template for html

2 User
I want to submit the sign up form
So that I can create an account
Front-end submit button event listener with a function, and display the newly created users profile
Back-end route api/login POST to display the users profile

3 User
I want to click on a connection
To see the details regarding that connection
Front-end have a href on each connection to profile/connection
Back-end route profile/connection, based on the connection id all details about connection is sent to a template and served up as a populated HTML page

4 User
I want to create a new connection
So that I can enter the information about my connection
Front-end input fields, submit button event listener with function to send post request for api/connection to save to the database
Back-end a POST route to create a connection
```

![User Stories Finished Product](/public/images/working-site.gif)


## Table of Contents

* [Code Example](#code-example)
* [Usage](#usage)
* [Author Info & Credits](#author-info-and-credits)
* [License](#license)


## Code Example


### Short example of bootstrap being implemented 
```html
 <ul class="col-auto">
    {{#each notes }}
      <div class="card">
        <h2 class="card-header">
          <a href="/notes/{{id}}">{{title}}</a>
          
          </h2>
        <div class="card-body">
```


### Example of javascript code used to create a new note
```JS
//creates new Note
router.post("/", async (req, res) => {
  const { name, word, last_contact, details, steps } = req.body;
  // create a new category for the note
  try {
    const NoteData = await Note.create({
      name,
      word,
      last_contact,
      details,
      steps,
      user_id: req.session.user_Id,
    });

    res.status(200).json(NoteData);
  } catch (err) {
    res.status(400).json(err);
  }
});                             
```

### Example of notes being dynamically generated for html page
``` js
  {{#if notes.length}}
    <div class="col-md-6 connection-list">
      <h3>Saved Connections</h3>

      {{#each notes as |note|}}
        <div class="row mb-2">
          <div class="col-md-8">
            <h4><a href="/notes/{{note.id}}">{{note.name}}</a></h4>
            <p>{{note.word}}</p>
          </div>
          <div class="col-md-4">
            <button
              class="btn btn-sm btn-danger delbtn"
              data-id="{{note.id}}"
            >DELETE</button>
          </div>
        </div>
      {{/each}}
    </div>
  {{/if}}
</div>
```



## Usage 

This website is very simple and quick to get started. After visiting the site with the link from above, users are asked to login. If no previous account exists the user may sign up simply by clicking the sign up button, this will take the user to a page that will ask for their name, email, and password. After creating an account the user is taken to the New Connections landing page where the user can enter details of the person who they lost connection with. All previous notes and connection details are then rendered to the homepage where the user can view them all. Lastly after 5 minutes the user will be automatically signed out for security purposes, otherwise they can manually logout by clicking the logout button within the header




## Learning Points 



---

## Author Info and Credits

An amazing amount of credit is due to the wonderful team that help bring this webpage to life
Below is each contributors account.

```md
- Didrik: [Github](https://github.com/DidrikLindberg)
- Jonathan: [Github](https://github.com/jonnyboy808/)
- Sabeen: [Github](https://github.com/Sabeen44)
```


## License

![MIT Badge](https://img.shields.io/badge/license-MIT-green)

Copyright (c) 2023 Sabeen44; jonnyboy808; DidrikLindberg;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


---

© 2023 Confidential and Proprietary. All Rights Reserved.
