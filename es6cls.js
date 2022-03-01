class Book {
    constructor(title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    }
}
class Ui {
// add book to list
    AddBookToList(book){
            const list = document.querySelector('#table-body');

            // create tr element
            const row = document.createElement('tr');
            
            // insert cols
            row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href "#" class 'delete'>x<a></td>
            `;
            // append the htmldlt
            list.appendChild(row);
        };

    validate(message,className){

            // create the div
            const div = document.createElement('div');
        
            // add class 
            div.className = `alert ${className}`;

            // add text
            div.appendChild(document.createTextNode(message));

            // get parent
            const container = document.querySelector('.container');

            // get form 
            const form = document.querySelector('.book-list');

            // insert alert

            container.insertBefore(div,form);

            // timeout in 3 sec
            setTimeout(function(){
                document.querySelector('.alert').remove();
            }, 3000);
        };
    clearFields(){
            document.querySelector('#title').value = '';
            document.querySelector('#author').value = '';
            document.querySelector('#isbn').value = '';
        };
    deleteBook(target){
            if(target.className === 'delete'){
            target.ParentElement.ParentElement.remove();
            }
        };
    }

// addEventListener to add a book to list

document.querySelector('.book-list').addEventListener('submit',function(e){
    //get form values
        const title = document.querySelector('#title').value;
        const author = document.querySelector('#author').value;
        const isbn = document.querySelector('#isbn').value;
    
    // instantiate the book
    const book = new Book(title,author,isbn);
    
    // instantiate the ui
    const ui = new Ui();
    
    // validate the ui
    if(title === '' || author === '' || isbn === ''){
    
        // show error alert
        ui.validate('please enter in all the fields','error');
    
    }else{
        // add book to list
        ui.AddBookToList(book);
        
        // show success alert
        ui.validate('book added','success');
    
        // clearfields
        ui.clearFields();
    
    }
        e.preventDefault();
    });
    
    // event listner for delete book
    document.querySelector('#table-body').addEventListener('click',function(e){
    
    // instantiate the ui
    const ui = new Ui();
    
    // delete book
    ui.deleteBook(e.target);
    
    // show alert
    
    ui.validate('book removed','success');
    
        e.preventDefault();
    });