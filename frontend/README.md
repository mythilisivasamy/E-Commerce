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

### 12.Modifying Order with orderId

1.
