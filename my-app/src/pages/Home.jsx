import React from 'react'

const Home = () => {
  return (
    <div>
     <img src="/images/ban.jpg" class="img-fluid w-100 pt-1" alt="..."/ >
     <div class="row row-cols-1 row-cols-md-2 g-4 m-2">
  <div class="col">
    <div class="card">
      <img src="/ban.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Veg Recipes</h5>
        <p class="card-text">A veg diet is rich in fiber, antioxidants, and healthy fats that help reduce cholesterol and lower the risk of heart diseases.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/img2.jpeg" class="card-img-top" alt="..."/ >
      <div class="card-body">
        <h5 class="card-title">non-veg Recipes</h5>
        <p class="card-text">Non-veg foods like chicken, fish, and eggs are rich in complete proteins, containing all essential amino acids.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/ban.jpg" class="card-img-top" alt="..."/ >
      <div class="card-body">
        <h5 class="card-title">pizzaa</h5>
        <p class="card-text">Pizzas made with whole grain crust, fresh veggies, and lean proteins provide fiber, vitamins, and protein.
        Tomato sauce is rich in lycopene, an antioxidant that supports heart health.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/ban.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">fast food</h5>
        <p class="card-text">Quick and accessible, making it ideal for people with busy schedules.
        Perfect for on-the-go meals or when you’re short on time.</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Home;