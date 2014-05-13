#Togglr - A jQuery Plugin

This plugin will let you make easy jQuery toggle associations between multiple HTML elements.

It's hard to explain but hopefully the example will clear it up.

###How To Use:

Add 'toggle-btn' as a class to the HTML element you want to act as trigger together with a 'data-toggle' attribute and set the value to an identifier you wish to use.

####Example:

```html
<div class="toggle-btn" data-toggle="snail">
</div>

<div class="toggle-box" data-toggle="snail" style="display:none;">
</div>

<div class="toggle-box" data-toggle="bear" style="display:none;">
</div>
```

In the example above clicking the top div will make the second div appear, and hide the third div with the 'toggle-box' class that doesn't have the same data-toggle value.

It will always hide any other element with the 'toggle-box' class with a different data-toggle value.


Created by Jamie Röling - 5/13/2014 
Released under MIT License