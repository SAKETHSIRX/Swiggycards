import React from "react";
import ReactDOM from "react-dom/client";

const resData = [
  {
    id: 1,
    title: "Delicious Spaghetti",
    desc: "A classic Italian pasta dish with rich tomato sauce and fresh herbs.",
    price: "$12.99",
    rating: "4.5⭐",
    img: "https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?auto=format&fit=crop&w=644&h=805&q=80"
  },
  {
    id: 2,
    title: "Spicy Chicken Biryani",
    desc: " Hyderabadi biryani with  spices and tender chicken.",
    price: "$10.49",
    rating: "4.7⭐",
    img: "https://images.unsplash.com/photo-1604908176997-125188b08c29?auto=format&fit=crop&w=644&h=805&q=80"
  },
  {
    id: 3,
    title: "Cheesy Veg Burger",
    desc: "Grilled veg patty with melted cheese and fresh lettuce.",
    price: "$7.99",
    rating: "4.2⭐",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=644&h=805&q=80"
  },
  {
    id: 4,
    title: "Butter Paneer Masala",
    desc: "Creamy tomato-based curry with soft paneer cubes.",
    price: "$9.99",
    rating: "4.6⭐",
    img: "https://images.unsplash.com/photo-1603899122634-2f24c0c47d66?auto=format&fit=crop&w=644&h=805&q=80"
  },
  {
    id: 5,
    title: "Crispy French Fries",
    desc: "Golden fried potatoes with a pinch of salt and herbs.",
    price: "$3.99",
    rating: "4.1⭐",
    img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=644&h=805&q=80"
  },
  {
    id: 6,
    title: "Chicken Shawarma",
    desc: "Juicy chicken wrapped in warm pita with garlic sauce.",
    price: "$8.49",
    rating: "4.4⭐",
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=644&h=805&q=80"
  },
  {
    id: 7,
    title: "Veg Pizza Supreme",
    desc: "Loaded with fresh veggies, olives and mozzarella cheese.",
    price: "$11.99",
    rating: "4.3⭐",
    img: "https://images.unsplash.com/photo-1548365328-9daaf8b8cdfb?auto=format&fit=crop&w=644&h=805&q=80"
  },
  {
    id: 8,
    title: "Tandoori Chicken",
    desc: "Smoky roasted chicken marinated in yogurt and spices.",
    price: "$13.49",
    rating: "4.8⭐",
    img: "https://images.unsplash.com/photo-1625944525483-9d8c7d7b1e3e?auto=format&fit=crop&w=644&h=805&q=80"
  },
  {
    id: 9,
    title: "Chocolate Brownie",
    desc: "Rich and gooey chocolate dessert with nuts.",
    price: "$4.99",
    rating: "4.5⭐",
    img: "https://images.unsplash.com/photo-1606312619349-39c6e1927d0a?auto=format&fit=crop&w=644&h=805&q=80"
  },
  {
    id: 10,
    title: "South Indian Dosa",
    desc: "Crispy dosa served with coconut chutney and sambar.",
    price: "$6.99",
    rating: "4.6⭐",
    img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=644&h=805&q=80"
  },
  {
    id: 11,
    title: "Grilled Fish Fillet",
    desc: "Perfectly grilled fish with herbs and lemon butter.",
    price: "$14.99",
    rating: "4.4⭐",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=644&h=805&q=80"
  },
  {
    id: 12,
    title: "Pasta Alfredo",
    desc: "Creamy Alfredo pasta with mushrooms and parmesan.",
    price: "$10.99",
    rating: "4.2⭐",
    img: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=644&h=805&q=80"
  },
  {
    id: 13,
    title: "Chicken Momos",
    desc: "Steamed dumplings filled with spicy chicken stuffing.",
    price: "$5.49",
    rating: "4.7⭐",
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=644&h=805&q=80"
  },
  {
    id: 14,
    title: "Veg Thali",
    desc: "Complete Indian meal with roti, rice, dal and sabzi.",
    price: "$9.49",
    rating: "4.5⭐",
    img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=644&h=805&q=80"
  },
  {
    id: 15,
    title: "Cold Coffee Frappe",
    desc: "Chilled coffee blended with milk and ice cream.",
    price: "$4.49",
    rating: "4.3⭐",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=644&h=805&q=80"
  }
];


const SakethComp = () => {
  return (
    <div>
      <div className="page">
      <div className="header">
        <div className="swiggycard">Swiggy Dynamic </div>
        <div className="nav">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="auth">
          SignIn / LogIn</div>
      </div>
         
      <div className="card-container">
        {resData.map((item) => (
          <div className="card" key={item.id}>
            <div>
              <img
  className="img"
  src={item.img}
  alt={item.title}
  onError={(e) => {
    e.target.onerror = null; // prevent infinite loop
    e.target.src =
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=644&h=805&q=80"; // fallback image
  }}
/>


              <div>
                <h2 className="title">{item.title}</h2>

                <p className="desc">{item.desc}</p>

                <div className="price-rating">
                  <span className="price">{item.price}</span>
                  <span className="rating">{item.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div></div>
    </div>
  );
};

const saketh = ReactDOM.createRoot(document.getElementById("saketh"));
saketh.render(<SakethComp />);
