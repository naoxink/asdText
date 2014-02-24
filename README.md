asdText
=======

Show your text with random colors

Use
===

##### HTML
```html
<div class='asd'>My awesome text</div>
```
##### JavaScript
```javascript
$(document).ready(function() {
  $('.asd').asd({
    rcolor: true,
    fcolor: true,
    fade: true
  });
});
```

Params
======

| Name | Type | Description |
| --- | --- | --- |
| rcolor | `boolean` | Random background-color |
| fcolor | `boolean` | Text color opposite to the background color |
| fade | `boolean` | Fade effect |
