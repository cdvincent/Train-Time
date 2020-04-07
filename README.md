<h1>Train Time</h1>

<h4>Link</h4>
<p>https://cdvincent.github.io/Train-Time/</p>

<h4>Technologies used</h4>
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>Bootstrap</li>
    <li>Javascript</li>
    <li>Jquery</li>
    <li>Firebase</li>
    <li>MomentJs npm</li>
</ul>

<h2>Description</h2>
<p>Train Time is an application that allows the user to add trains to a scheduler and tracks when the next train will arrive. The user is required to fill a form out with the train's name, the destination, and the frequency that the train arrives in minutes. The app will calculate what time the train will arrive next, along with how many minutes away the train is.</p>

<h2>Development</h2>
<p>The styling was done with Bootstrap and raw CSS. The train schedule is a styled table. The HTML forms inputs are captured with Jquery and stored into variables for calculations. The form is validated with the number type for the frequency, and some RegEx to keep the user from entering the time in the wrong format. Alerts are used to notify the user of issues with filling out the form. MomentJs is used to calcuate the time of next arrival, as well as how many minutes the train is from arriving. If the form was calculated properly, it will be pushed to a firebase database. Once the entry is added, a new row with the trains data is dynamically created using Jquery.</p>