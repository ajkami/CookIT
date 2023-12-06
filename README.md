# Assignment2-481
Desktop version of CookIT Application
Graydon Benson, Habiba Abuelazm, Maira Khan, Carlos Sujanto, Auric Adubofour-Poku

Login and Signup:
- User can register for an account by entering valid name, email, and password (two entries required for verification). Password requires 8 characters, mix of upper and lower case characters, and 1 number.
- User must also provide phone number, address and accept terms of service on last page.
- User can login with email/password.

View Profile:
- User can see profile details, as well as access favourite recipies with a single click.
- User can view their transaction history.
- (Mocked), user can update profile information, change password, or delete account.

View Transactions:
- (Mocked), user can view transaction history for pending and completed orders.
- User can view support information for order corrections and or cancellations.

Browse Recipes:
- User can search for recipes to cook
- User can filter recipes based off of time (by hours increments up to four hours)
- User can filter recipes based off of cuisine
- User can view recipe overviews on the main page (includes photo, name, time to cook, and rating)
- User can click on any recipe to see additional recipe information (Description, and number of reviewers)
- User can click on view recipe button to be taken to that recipes cooking page
- Sidebar at the top left of the screen includes links to Profile, Fridge, and Purchasing pages


View Individual Recipies:
- User can see a picture of the recipe, the title, cooking time, serving size, nutritional value, as well as rating.
- User can see the ingredients the recipe requires, as well as the steps, and they can check off the steps as they go to keep track of their progress.
- User can click on the complete recipe button once they are done which is when a pop-up notifies them that their ingredients have been updated. 
- User can click on the next button, revealing a new pop-up where the user can rate the recipe and leave a review.
- Whether the user chooses to leave a review or skip, they will be redirected to their inventory.

Shop for Ingredients:
- User can choose a location for the store using search bar in pop up. 
- User can search for a specific item to add to cart using the search bar by typing in to the text field provided then clicking on to one of the options in the drop box or pressing on to the search button. 
- User can browse for items by filtering through the different categories provided. User will click on to one of the categories provided under the Browse Categories header. 
- User can add an item into the shopping cart by clicking on to the "Add to Cart" button.
- User can view and add previously bought items by clicking on to the "Previously Bought" navigation button on the top right of main header beneath Cart button.
- User can view items added to cart by clicking on to the cart trolley icon button.
- User can increment/decrement quantity of specific items added to cart by pressing "-" or "+" button beside the quantity textbox.
- User can remove a specific item added to cart by clicking on to "Remove" button placed beside the item.
- user can proceed to Checkout cart items with a non-empty cart, by clicking on to "Checkout Now" button placed under 
grand total
- User can choose either dropoff or pickup for grocery delivery method by clicking on to one of the options in the Checkout div in cart
- Logged-in user can use their card details linked to their account by pressing on to the "Saved Card" button beneath card details text fields
- User can use valid card details by entering information into the text fields using keyboard and pressing on to the "Choose This Payment" button
- User can save entered card details in text fields by ticking off checkmark beside label "Save card details"
- User can enter special delivery instructions if they choose dropoff for grocery delivery method
- User can confirm their total order, and receive a confirmation number, for grocery purchase by clicking on to the "Confirm Order" button after filling out all required fields
  

View Inventory:
- User can see items they have
- User can increment or decrement quantity of the item they have by clicking the item they want to edit and pressing "-" or "+" button beside the quantity textbox
- User can remove any item from the inventory by decreasing the quantity until 0 with the "-" button
- User can add item to the inventory by pressing the big "+" button on the bottom right of the page

Add Ingredients to Inventory:
- User can search for a specific item they want to add to inventory by typing it inside the search bar
- User can browse items sorted by category by pressing one of the button "fruit", "dairy", "baked goods"
- User can add multiple items to the inventory at once by pressing "add to inventory" button on the item they want to add
- User can remove items they dont want to add to inventory anymore by pressing "remove" button on the sidebar
- User can increment or decrement quantity of the item they want to add by pressing "-" or "+" button on the sidebar

Features not implemented:
- Protected routing (all pages are accessible regardless of Login State, no cookie history)
- No backend for users (no usernames/passwords stored), states removed after exit
- No syncronization between orders and order history (no database to support this)
- Profile details (credit card, name, address, etc.) not stored
- No backend to support inventory state (removed after exit)
- No terms of service
- No backend to support nutrient filtering for recipes
- No reviews viewable on recipes due to lack of backend
