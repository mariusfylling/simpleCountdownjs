# simpleCountdownjs
A very simple Javascript for website countdowns.

## How to use
In the example.html-file, you will find theese DIV-objects. The Javascript will replace the contents of the objects with the IDs "days", "hours", "minutes" and "seconds" with the correct value. Place the DIVs where you prefer them to be. 
```
  <div class="countElement">
      <span id="days"></span>
      <div class="footer">day(s)</div>
    </div>
    <div class="countElement">
      <span id="hours"></span>
      <div class="footer">hour(s)</div>
    </div>
    <div class="countElement">
      <span id="minutes"></span>
      <div class="footer">minute(s)</div>
    </div>
    <div class="countElement">
      <span id="seconds"></span>
      <div class="footer">second(s)</div>
    </div>
```
Configuring the countdown is simple, like in the example.html-file, you will find a date at the bottom of the file. Change the date to the one you wish to count to. The bottom of the file should look like this: 
```
  <script>
    var date = "February 5, 2016 18:00:00";
  </script>
  <script src="countdown.js"></script>
```

## License
This work is protected by the GNU GENERAL PUBLIC license.
