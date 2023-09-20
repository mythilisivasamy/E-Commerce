# E-Commerce Full Stack Using MERN Technology

## 1. Creating Home page comprised of

1.Header ,Footer ,HomeCover,Slider components

### 2. Slicing the Global state of the application into 3

# 1.productSlice

1.creating initial state and reducer function for the products
2.creating extraReducer function and handle the action created outside of the application

# 2.UserSlice

1.creating initial state and reducer function for the users
2.creating extraReducer function and handle the action created outside of the application

# 3.CartSlice

1.creating initial state and reducer function for the cart items

## 3.Creating store using @redux/toolkits

1.configuring Store with 3 slices.

# 4.Creating Product and Rating Component

creating Rating component
Creating Product component
Use Rating component in Product component

## 5. Creating ProductList component

    1.Fetching products from backend using axios.post
    2.Initialize the state of the productSlice with the fetched products.
    3.Creating LoadingBox component to show the loading state of the app.
    4.Creating MessageBox Component to show the error

## 6. Creating ProductDetails page.

1.Dividing page into 3 columns
2.First column displays the large size image
3.Second column displays details of the product
4.Third column displays Status of the product's stock and 'add to cart ' action button

## 7.Handling 'Add to cart' button click

    1.Adding items to cart
    2.Checking the existing items.If exists ,increase quantity else add item to cart.

## 8. Creating cart views

1.Creating Two columns
2.First column displays,cart item's details
2.Second column displays ,Total amount and action button

### 9. Creating PreviewOrder

1.Creating Two columns
2.First column displays,shipping Address,Payment method and cart item's details
2.Second column displays ,Order summary

### 10.Placing Order

1.creating backend api to create the order in the database.
2.view displays the order details with orderID

## 11.Creating paypal developer account

1.Storing paypal client id the process environment.
2.Installing @paypal/react-paypal-js
3.Wrapping the App component with paypal-script-provider
4.fetching client id from backend.
5.configuring paypal-script-provider with client id.
6.creating PayPalButtons with createOrder,onApprove event handler

### 12.creating Login screen

1. Using React-form to sync with text form controls
   2.Creating back-end api for verifying email and password
   3.Generate jwt-web-token and sending to client

## 13. creating Sign up screen

1. Using React-form to sync with form controls
   2.Creating back end api to post the signup form values

## 14.Creating user profile screen

1.Using React-form to sync with form controls
2.creating back end api to update the user profile in the database

## 15.Creating Write cutomer review form

1.Designing form with rating and comment controls.
2.Creating back end api to post the user review and store it in the products'reviews field.

## 16. creating review component

1.This is used in product details parent component.
2.This component will display all reviews of the product.
3.creating back end api to get the product's review

## 17.setting pagination

1.Creating pagination using React Pagination component.
2.Setting no of products per page
3.Setting offset to display next page.

## 18.Rating component.

1.This will display stats based on the rating number.

## 19.loading box

1. this will load the spinner component when the browser is in the loading state.

## 20.Shipping Address screen.

1.React form to get the shipping address from the user.
2.storing it in the react cart store.

## 21.Header screen.

1.Nav bar containing logo,search box,user login,cart icon

## 22.Footer component

Display all the links of e-commerce app

## 23.creating MongoDB atlas account to access the MongoDB atlas database
