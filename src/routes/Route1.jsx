import React from 'react'

function Route1() {
  return (
    <div>
      <header>
        <div>
          <h1>Stacking Cards</h1>
          <p>👇 Scroll down to see the effect.</p>
        </div>
      </header>
      <main>
        <ul id="cards">
          <li class="card" id="card_1">
            <div class="card__content">
              <div>
                <h2>Card One</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p><a href="#top" class="btn btn--accent">Read more</a></p>
              </div>
              <figure>
                <img src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-1.jpg" alt="Image description" />
              </figure>
            </div>
          </li>
          <li class="card" id="card_2">
            <div class="card__content">
              <div>
                <h2>Card Two</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p><a href="#top" class="btn btn--accent">Read more</a></p>
              </div>
              <figure>
                <img src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-2.jpg" alt="Image description" />
              </figure>
            </div>
          </li>
          <li class="card" id="card_3">
            <div class="card__content">
              <div>
                <h2>Card Three</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p><a href="#top" class="btn btn--accent">Read more</a></p>
              </div>
              <figure>
                <img src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-3.jpg" alt="Image description" />
              </figure>
            </div>
          </li>
          <li class="card" id="card_4">
            <div class="card__content">
              <div>
                <h2>Card Four</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p><a href="#top" class="btn btn--accent">Read more</a></p>
              </div>
              <figure>
                <img src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-2.jpg" alt="Image description" />
              </figure>
            </div>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default Route1
