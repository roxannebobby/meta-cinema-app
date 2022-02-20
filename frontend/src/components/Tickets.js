import React from 'react'

const Tickets = () => {
  return (
    <div class="show-container">
    <h1>Broadway Shows at the Roxy Theater</h1>
    <label for="broadway-show">Choose an Event</label>
    <select id="show">
      <option value="175">Les Miserables ($175)</option>
      <option value="225">The Greatest Showman ($225)</option>
      <option value="125">Bye Bye Birdie ($125)</option>
      <option value="325">Hamilton ($325)</option>
    </select>
  </div>

  <ul class='showcase'>
    <li>
      <div class="seat selected"></div>
      <small>Selected</small>
    </li>
    <li>
      <div class="seat occupied"></div>
      <small>Occupied</small>
    </li>
  </ul>

  <ul class='showcase ticket-band'>
    <li>
      <div class="seat front"></div>
      <small>Premium</small>
    </li>
    <li>
      <div class="seat center"></div>
      <small>Center Mezz</small>
    </li>
    <li>
      <div class="seat ends"></div>
      <small>Left/Right Mezz</small>
    </li>
  </ul>


  <div class="container">
    <div class="stage"></div>

    <div class="row">
      <div id="premium" class="seat front occupied"></div>
      <div id="premium" class="seat front occupied"></div>
      <div id="premium" class="seat front"></div>
      <div id="premium" class="seat front"></div>
      <div id="premium" class="seat front"></div>
      <div id="premium" class="seat front"></div>
      <div id="premium" class="seat front"></div>
      <div id="premium" class="seat front"></div>
    </div>
    <div class="row">
      <div id="premium" class="seat front"></div>
      <div id="premium" class="seat front"></div>
      <div id="premium" class="seat front"></div>
      <div id="premium" class="seat front occupied"></div>
      <div id="premium" class="seat front occupied"></div>
      <div id="premium" class="seat front"></div>
      <div id="premium" class="seat front"></div>
      <div id="premium" class="seat front"></div>
    </div>
    <div class="row">
      <div id="ends-mezz" class="seat ends"></div>
      <div id="ends-mezz" class="seat ends"></div>
      <div id="center-mezz" class="seat center occupied"></div>
      <div id="center-mezz" class="seat center occupied"></div>
      <div id="center-mezz" class="seat center occupied"></div>
      <div id="center-mezz" class="seat center"></div>
      <div id="ends-mezz" class="seat ends"></div>
      <div id="ends-mezz" class="seat ends"></div>
    </div>
    <div class="row">
      <div id="ends-mezz" class="seat ends"></div>
      <div id="ends-mezz" class="seat ends"></div>
      <div id="center-mezz" class="seat center"></div>
      <div id="center-mezz" class="seat center"></div>
      <div id="center-mezz" class="seat center"></div>
      <div id="center-mezz" class="seat center"></div>
      <div id="ends-mezz" class="seat ends occupied"></div>
      <div id="ends-mezz" class="seat ends"></div>
    </div>
    <div class="row">
      <div id="ends-mezz" class="seat ends"></div>
      <div id="ends-mezz" class="seat ends"></div>
      <div id="center-mezz" class="seat center"></div>
      <div id="center-mezz" class="seat center"></div>
      <div id="center-mezz" class="seat center"></div>
      <div id="center-mezz" class="seat center"></div>
      <div id="ends-mezz" class="seat ends"></div>
      <div id="ends-mezz" class="seat ends"></div>
    </div>
    <div class="row">
      <div id="ends-mezz" class="seat ends"></div>
      <div id="ends-mezz" class="seat ends"></div>
      <div id="center-mezz" class="seat center"></div>
      <div id="center-mezz" class="seat center"></div>
      <div id="center-mezz" class="seat center"></div>
      <div id="center-mezz" class="seat center"></div>
      <div id="ends-mezz" class="seat ends"></div>
      <div id="ends-mezz" class="seat ends"></div>
    </div>
  </div>


  </div>
  <div style="text-align: left;">
    <p class="text">Selected Seats: <span id="count">0</span> | Total Price: <span id="total">0</span></p>
  </div>
  <script src="script.js"></script>
  )
}

export default Tickets