
const Menu = () => {
    const foods=[
        {name:'Pizza',src:require('./pizza.jpg'),price:10},
        {name:'Burger',src:require('./pizza.jpg'),price:20},
        {name:'Pasta',src:require('./pizza.jpg'),price:30},
        {name:'Salad',src:require('./pizza.jpg'),price:40},
        {name:'Soup',src:require('./pizza.jpg'),price:50},
        {name:'Cake',src:require('./pizza.jpg'),price:60},
        {name:'Coffee',src:require('./pizza.jpg'),price:70},
        {name:'Tea',src:require('./pizza.jpg'),price:80},
        {name:'Juice',src:require('./pizza.jpg'),price:90},
        {name:'Milk',src:require('./pizza.jpg'),price:100},
    ]
    
//     try {
//         const docRef = await addDoc(collection(db, "users"), {
//           first: "Alan",
//           middle: "Mathison",
//           last: "Turing",
//           born: 1912
//         });
      
//         console.log("Document written with ID: ", docRef.id);
//       } catch (e) {
//         console.error("Error adding document: ", e);
//       }

//       const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

  return (
    <form>
        <div className='menu-list'>
            <div className='item-container'>
                {foods.map((food,index)=>{
                    return(
                     <div className='row' key={index}>
                        <div>
                            <h2>{food.name} </h2>
                            <p>Lorem ipsum dolor sit amet</p><button type='submit' className='order-btn'>Order</button>
                            <div className='image'>
                                <img src={food.src} alt='food'/>
                            </div>
                        </div>
                        <span className=';price'>
                            <strong>${food.price}</strong>
                        </span>
                    </div>)
                })}
            </div>
        </div>
    </form>
  )
}

export default Menu