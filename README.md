# Development

### Link to Deployed Website
https://roundThings.github.io/Development

### Goal and Value of the Application
The goal of this application is to allow users to easily browse through a selection 
of flower and search for the best fit for their garden. To do this, this application
utlizes multiple sets of filters/sorting functions allowing users to pick out
specific attributes to find the flower that they are looking for. This sets apart 
this application from say, browsing in a home depot, as it is much easier to parse 
though all the various items without checking each of them one by one. 

### Usability Principles Considered
In this application, utlized several usability principle. First, I made sure 
that the sorting/filtering state of the items shown were clearly highlighted in blue. 
Additionally, chose to group together the item information and then the aggragator
information to define where information pieces lay. Finally, I made sure that
each function was clearly labeled. 

### Organization of Components
I have two components, the items (which handles the rendering of a single item, as
well as adding and removing an item to cart) and the aggragator (which allows for 
the filtering/sorting and display of cart and total). 

### How Data is Passed Down Through Components
The item component rendersa single card with the props cart, total, price, color, type, name, and image, as
well as any corrosponding functions to modify (setType etc). The usestate of these
props are intially declared to the default empty (for cart), zero (for total). This
just makes it so that when an item is rendered, there is a default empty cart/price etc. 
The other component is the aggrgator, which takes in everything the item compenent does 
but also filtering/sorting props: color, setColor, type, setType, sort, setStore. 
Passing in these props allow modifcation via functions within the component to change states
and thus filter within. The default useState of these are all (for type and color),
and "high to low" (for sort). These components are then rendered in the App.js file.

### How the User Triggers State Changes

The user triggers state changes in the item component by clicking either 
remove or add, which on click runs a function that sets a new state accordingly, 
in this case adding/subtracting to the cart and total. Within the agragator, 
the user can click to sort/filter, which triggers a change in the state of the attribute
(color, type, sort) and thus what is used to filter data and later be rendered 
in the display by GardenItem. Lastly, the reset button in this component on click
allows all usestates to set back to default -including the filter nav component itself
whose active display is controlled by the respective props attribute. 
