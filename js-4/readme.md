## JS Assignments - module 4

## Assignment 1 – Add a list with innerHTML

- Used `getElementById()` to select the element with id="target".
- Used `innerHTML` to add three list items.
- Used `classList.add('my-list')` to add a CSS class to the target element.
- Used CSS to change the list text color to red.


## Assignment 2 – Adding a list with createElement()

- Used `getElementById()` to select the element with id="target".
- Used `createElement()` to create three list items.
- Used `textContent` to add text to each list item.
- Used `appendChild()` to add the list items to the target element.
- Used `classList.add('my-item')` to add a class to the second list item.




## Assignment 3 – A list from an array

- Created an array called `names` containing John, Paul and Jones.
- Used `getElementById()` to select the element with id="target".
- Used a `for` loop to go through the names array.
- Used `innerHTML` to add each name inside an `<li>` element.



## Assignment 4 – Options from an array of objects

- Created a `students` array containing student names and IDs.
- Used `getElementById()` to select the element with id="target".
- Used a `for` loop to go through the students array.
- Used `createElement()` to create option elements.
- Used `value` to assign student IDs.
- Used `textContent` to add student names.
- Used `appendChild()` to add the options to the select element.



## Assignment 5 – Picture cards

- Used `getElementById()` to select the section with id="pictures".
- Used a `for` loop to go through the `picArray`.
- Used `createElement()` to create article, heading, figure, image, caption and paragraph elements.
- Used `textContent` to add titles, captions and descriptions.
- Used `src` and `alt` to add image information.
- Used `classList.add('card')` to add a class to each article.
- Used `appendChild()` to arrange and add all article elements to the section.



## Assignment 6 – Button Click

- Used `querySelector()` to select the button element.
- Used `addEventListener('click', ...)` to detect a button click.
- Used `alert()` to display "Button Clicked" when the button is clicked.



## Assignment 7 – Hover Effect

- Used `getElementById()` to select the paragraph and image elements.
- Used `addEventListener()` to detect mouse events.
- Used `mouseenter` to change the image to picB.jpg.
- Used `mouseleave` to change the image back to picA.jpg.
- Used the `src` property to change the image source.



## Assignment 8 – Calculator

- Used `getElementById()` to select the input fields, dropdown, button and result paragraph.
- Used `Number()` to convert input values into numbers.
- Used `addEventListener()` to detect button clicks.
- Used the `value` property to get the selected operation.
- Used `switch` to perform addition, subtraction, multiplication or division.
- Used `textContent` to display the result.



## Assignment 9 – Calculator with one field

- Used `querySelector()` to select the input field and button.
- Used `getElementById()` to select the result paragraph.
- Used `addEventListener()` to detect button clicks.
- Used `includes()` to check which operator is used.
- Used `split()` to separate the two numbers.
- Used `Number()` to convert the values into numbers.
- Used `if` and `else if` to perform the calculation.
- Used `textContent` to display the result.
- Did not use `eval()`.



## Assignment 10 – Read a Form 

- Used `querySelector()` to select the form and input fields.
- Used attribute selectors to select the first name and last name inputs.
- Used `addEventListener()` to detect form submission.
- Used `preventDefault()` to stop the default form action.
- Used `value` to read the input values.
- Used `textContent` to display the full name in the target paragraph.



## Assignment 11 – Picture cards with a modal

- Continued Assignment 5 by using the same `picArray`.
- Used `createElement()` to create the article elements.
- Used `addEventListener()` to detect article clicks.
- Used the large image from `picArray` inside the dialog.
- Used `showModal()` to open the modal.
- Used `close()` to close the modal.
- Used the span element as the close button.
- Used the `alt` attribute to describe the image.

