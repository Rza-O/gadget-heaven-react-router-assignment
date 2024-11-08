
# Gadgets Heaven

**Gadget Heaven** is a modern single page e-commerce application built using React, React-Router. The platform offers a seamless shopping experience, featuring a dynamic product listing, interactive features such as a wishlist and a shopping cart.


## Fundamental React Component Used: 
- **JSX**: For writing HTML-like syntax in JavaScript.
- **Components**: Functional components and reusable components like `Navbar`, `Footer`, `ProductList`, and `ProductCard`.
- **Props**: Passing data between components using props, such as product details and cart information.
- **State**: Managing state using `useState` for dynamic changes (e.g., adding/removing products).
- **Event Handling**: Handling events like button clicks, hover effects, and input changes.
- **Conditional Rendering**: Displaying content based on conditions, such as the cart badge and wishlist status.
- **Hooks**: Using `useState`, `useEffect`, `useNavigate`, `useLocation` for state updates.
- **React Router**: For navigation and routing between pages such as home, dashboard, and product details.
## Data Management
**Local Storage**: Used for persisting wishlist and cart data so that even after refreshing, the data remains intact.
## Features
- **Product Listing**: Displays a grid of products fetched from the JSON data structure, categorized for easy browsing.
- **Dynamic Category Filter**: The product grid updates based on the selected category from the sidebar.
- **Wishlist Feature**: Users can add and remove products from the wishlist, with local storage persistence.
- **Cart System**: Users can add products to the cart, and the cart badge on the navbar reflects the number of items.
- **Toast Notifications**: A toast message is shown when an item is added to the cart or wishlist, providing feedback to the user.
## Challenges I've Faced

Building the **Gadget Heaven** project has been a challenging yet rewarding experience, as it required me to apply a broad range of concepts and technologies. One of the main challenges was ensuring proper **state synchronization** between the cart, wishlist, and other components, especially when using **local storage** for data persistence. Managing data persistence while keeping everything in sync across the application proved tricky, particularly when dealing with page reloads or navigating between pages. Another hurdle was implementing a **dynamic product filter** system that updates the product list based on selected categories. Additionally, implementing the cart and wishlist features without a centralized state management system like Context API made it more complex to manage shared state across components. From a personal perspective, this was the hardest project I've done so far, as I had to learn and implement many concepts at once while balancing my web development bootcamp and personal commitments. Juggling multiple tasks with a newborn at home made it even harder to find time to focus. However, overcoming these challenges has significantly strengthened my problem-solving skills and knowledge of `React`, `React Router`, and `JavaScript`.


## Live Website Link
- https://heavenly-gadgets.surge.sh/
## Requirement Link
- https://drive.google.com/file/d/1UT9cvUsmSXdjqz0lvqNI9EckxDqvH7z6/view?usp=sharing