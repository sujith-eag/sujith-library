# DOM Events

[HTML DOM Events](https://www.w3schools.com/jsref/dom_obj_event.asp)

HTML events are actions that occur to HTML elements, which JavaScript can respond to. By using event listeners, you can execute JavaScript code in reaction to these events.

**Example of an Event Handler:**

```html
<button onclick="myFunction()">Click me</button>
```

**Using `addEventListener`:**

```js
button.addEventListener("click", myFunction);
```

## HTML Events

An HTML event can be triggered by various actions, either by the browser itself or by user interactions. Here are some examples:

- The web page has finished loading.
- An input field's value has changed.
- A button has been clicked.

When these events occur, you might want to execute specific code. JavaScript allows you to run code in response to these detected events.

### Event Handler Attributes

HTML supports event handler attributes that allow you to embed JavaScript code directly into HTML elements. For example:

```html
<input type="text" onchange="alert('Input changed!')">
```

## Common HTML Events

Here’s a list of some common HTML events along with their descriptions:

| Event        | Description                                           |
|--------------|-------------------------------------------------------|
| `onchange`   | Triggered when the value of an HTML element changes. |
| `onclick`    | Triggered when the user clicks on an HTML element.   |
| `onmouseover`| Triggered when the mouse moves over an HTML element.  |
| `onmouseout` | Triggered when the mouse moves away from an HTML element. |
| `onkeydown`  | Triggered when the user presses a key on the keyboard. |
| `onload`     | Triggered when the browser has finished loading the page. |

---


|Event|Occurs When|Belongs To|
|---|---|---|
|[abort](https://www.w3schools.com/jsref/event_onabort_media.asp)|The loading of a media is aborted|[UiEvent](https://www.w3schools.com/jsref/obj_uievent.asp), [Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[afterprint](https://www.w3schools.com/jsref/event_onafterprint.asp)|A page has started printing|[Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[animationend](https://www.w3schools.com/jsref/event_animationend.asp)|A CSS animation has completed|[AnimationEvent](https://www.w3schools.com/jsref/obj_animationevent.asp)|
|[animationiteration](https://www.w3schools.com/jsref/event_animationiteration.asp)|A CSS animation is repeated|[AnimationEvent](https://www.w3schools.com/jsref/obj_animationevent.asp)|
|[animationstart](https://www.w3schools.com/jsref/event_animationstart.asp)|A CSS animation has started|[AnimationEvent](https://www.w3schools.com/jsref/obj_animationevent.asp)|
|[beforeprint](https://www.w3schools.com/jsref/event_onbeforeprint.asp)|A page is about to be printed|[Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[beforeunload](https://www.w3schools.com/jsref/event_onbeforeunload.asp)|Before a document is about to be unloaded|[UiEvent](https://www.w3schools.com/jsref/obj_uievent.asp), [Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[blur](https://www.w3schools.com/jsref/event_onblur.asp)|An element loses focus|[FocusEvent](https://www.w3schools.com/jsref/obj_focusevent.asp)|
|[canplay](https://www.w3schools.com/jsref/event_oncanplay.asp)|The browser can start playing a media (has buffered enough to begin)|[Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[canplaythrough](https://www.w3schools.com/jsref/event_oncanplaythrough.asp)|The browser can play through a media without stopping for buffering|[Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[change](https://www.w3schools.com/jsref/event_onchange.asp)|The content of a form element has changed|[Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[click](https://www.w3schools.com/jsref/event_onclick.asp)|An element is clicked on|[MouseEvent](https://www.w3schools.com/jsref/obj_mouseevent.asp)|
|[contextmenu](https://www.w3schools.com/jsref/event_oncontextmenu.asp)|An element is right-clicked to open a context menu|[MouseEvent](https://www.w3schools.com/jsref/obj_mouseevent.asp)|
|[copy](https://www.w3schools.com/jsref/event_oncopy.asp)|The content of an element is copied|[ClipboardEvent](https://www.w3schools.com/jsref/obj_clipboardevent.asp)|
|[cut](https://www.w3schools.com/jsref/event_oncut.asp)|The content of an element is cut|[ClipboardEvent](https://www.w3schools.com/jsref/obj_clipboardevent.asp)|
|[dblclick](https://www.w3schools.com/jsref/event_ondblclick.asp)|An element is double-clicked|[MouseEvent](https://www.w3schools.com/jsref/obj_mouseevent.asp)|
|[drag](https://www.w3schools.com/jsref/event_ondrag.asp)|An element is being dragged|[DragEvent](https://www.w3schools.com/jsref/obj_dragevent.asp)|
|[dragend](https://www.w3schools.com/jsref/event_ondragend.asp)|Dragging of an element has ended|[DragEvent](https://www.w3schools.com/jsref/obj_dragevent.asp)|
|[dragenter](https://www.w3schools.com/jsref/event_ondragenter.asp)|A dragged element enters the drop target|[DragEvent](https://www.w3schools.com/jsref/obj_dragevent.asp)|
|[dragleave](https://www.w3schools.com/jsref/event_ondragleave.asp)|A dragged element leaves the drop target|[DragEvent](https://www.w3schools.com/jsref/obj_dragevent.asp)|
|[dragover](https://www.w3schools.com/jsref/event_ondragover.asp)|A dragged element is over the drop target|[DragEvent](https://www.w3schools.com/jsref/obj_dragevent.asp)|
|[dragstart](https://www.w3schools.com/jsref/event_ondragstart.asp)|Dragging of an element has started|[DragEvent](https://www.w3schools.com/jsref/obj_dragevent.asp)|
|[drop](https://www.w3schools.com/jsref/event_ondrop.asp)|A dragged element is dropped on the target|[DragEvent](https://www.w3schools.com/jsref/obj_dragevent.asp)|
|[durationchange](https://www.w3schools.com/jsref/event_ondurationchange.asp)|The duration of a media is changed|[Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[ended](https://www.w3schools.com/jsref/event_onended.asp)|A media has reach the end ("thanks for listening")|[Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[error](https://www.w3schools.com/jsref/event_onerror.asp)|An error has occurred while loading a file|[ProgressEvent](https://www.w3schools.com/jsref/obj_progressevent.asp), [UiEvent](https://www.w3schools.com/jsref/obj_uievent.asp), [Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[focus](https://www.w3schools.com/jsref/event_onfocus.asp)|An element gets focus|[FocusEvent](https://www.w3schools.com/jsref/obj_focusevent.asp)|
|[focusin](https://www.w3schools.com/jsref/event_onfocusin.asp)|An element is about to get focus|[FocusEvent](https://www.w3schools.com/jsref/obj_focusevent.asp)|
|[focusout](https://www.w3schools.com/jsref/event_onfocusout.asp)|An element is about to lose focus|[FocusEvent](https://www.w3schools.com/jsref/obj_focusevent.asp)|
|[fullscreenchange](https://www.w3schools.com/jsref/event_fullscreenchange.asp)|An element is displayed in fullscreen mode|[Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[fullscreenerror](https://www.w3schools.com/jsref/event_fullscreenerror.asp)|An element can not be displayed in fullscreen mode|[Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[hashchange](https://www.w3schools.com/jsref/event_onhashchange.asp)|There has been changes to the anchor part of a URL|[HashChangeEvent](https://www.w3schools.com/jsref/obj_hashchangeevent.asp)|
|[input](https://www.w3schools.com/jsref/event_oninput.asp)|An element gets user input|[InputEvent](https://www.w3schools.com/jsref/obj_inputevent.asp), [Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[invalid](https://www.w3schools.com/jsref/event_oninvalid.asp)|An element is invalid|[Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[keydown](https://www.w3schools.com/jsref/event_onkeydown.asp)|A key is down|[KeyboardEvent](https://www.w3schools.com/jsref/obj_keyboardevent.asp)|
|[keypress](https://www.w3schools.com/jsref/event_onkeypress.asp)|A key is pressed|[KeyboardEvent](https://www.w3schools.com/jsref/obj_keyboardevent.asp)|
|[keyup](https://www.w3schools.com/jsref/event_onkeyup.asp)|A key is released|[KeyboardEvent](https://www.w3schools.com/jsref/obj_keyboardevent.asp)|
|[load](https://www.w3schools.com/jsref/event_onload.asp)|An object has loaded|[UiEvent](https://www.w3schools.com/jsref/obj_uievent.asp), [Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[loadeddata](https://www.w3schools.com/jsref/event_onloadeddata.asp)|Media data is loaded|[Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[loadedmetadata](https://www.w3schools.com/jsref/event_onloadedmetadata.asp)|Meta data (like dimensions and duration) are loaded|[Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[loadstart](https://www.w3schools.com/jsref/event_onloadstart.asp)|The browser starts looking for the specified media|[ProgressEvent](https://www.w3schools.com/jsref/obj_progressevent.asp)|
|[message](https://www.w3schools.com/jsref/event_onmessage_sse.asp)|A message is received through the event source|[Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[mousedown](https://www.w3schools.com/jsref/event_onmousedown.asp)|The mouse button is pressed over an element|[MouseEvent](https://www.w3schools.com/jsref/obj_mouseevent.asp)|
|[mouseenter](https://www.w3schools.com/jsref/event_onmouseenter.asp)|The pointer is moved onto an element|[MouseEvent](https://www.w3schools.com/jsref/obj_mouseevent.asp)|
|[mouseleave](https://www.w3schools.com/jsref/event_onmouseleave.asp)|The pointer is moved out of an element|[MouseEvent](https://www.w3schools.com/jsref/obj_mouseevent.asp)|
|[mousemove](https://www.w3schools.com/jsref/event_onmousemove.asp)|The pointer is moved over an element|[MouseEvent](https://www.w3schools.com/jsref/obj_mouseevent.asp)|
|[mouseover](https://www.w3schools.com/jsref/event_onmouseover.asp)|The pointer is moved onto an element|[MouseEvent](https://www.w3schools.com/jsref/obj_mouseevent.asp)|
|[mouseout](https://www.w3schools.com/jsref/event_onmouseout.asp)|The pointer is moved out of an element|[MouseEvent](https://www.w3schools.com/jsref/obj_mouseevent.asp)|
|[mouseup](https://www.w3schools.com/jsref/event_onmouseup.asp)|A user releases a mouse button over an element|[MouseEvent](https://www.w3schools.com/jsref/obj_mouseevent.asp)|
|mousewheel|Deprecated. Use the [wheel](https://www.w3schools.com/jsref/event_onwheel.asp) event instead|[WheelEvent](https://www.w3schools.com/jsref/obj_wheelevent.asp)|
|[offline](https://www.w3schools.com/jsref/event_onoffline.asp)|The browser starts working offline|[Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[online](https://www.w3schools.com/jsref/event_ononline.asp)|The browser starts working online|[Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[open](https://www.w3schools.com/jsref/event_onopen_sse.asp)|A connection with the event source is opened|[Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[pagehide](https://www.w3schools.com/jsref/event_onpagehide.asp)|User navigates away from a webpage|[PageTransitionEvent](https://www.w3schools.com/jsref/obj_pagetransitionevent.asp)|
|[pageshow](https://www.w3schools.com/jsref/event_onpageshow.asp)|User navigates to a webpage|[PageTransitionEvent](https://www.w3schools.com/jsref/obj_pagetransitionevent.asp)|
|[paste](https://www.w3schools.com/jsref/event_onpaste.asp)|Some content is pasted in an element|[ClipboardEvent](https://www.w3schools.com/jsref/obj_clipboardevent.asp)|
|[pause](https://www.w3schools.com/jsref/event_onpause.asp)|A media is paused|[Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[play](https://www.w3schools.com/jsref/event_onplay.asp)|The media has started or is no longer paused|[Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[playing](https://www.w3schools.com/jsref/event_onplaying.asp)|The media is playing after being paused or buffered|[Event](https://www.w3schools.com/jsref/obj_event.asp)|
|popstate|The window's history changes|[PopStateEvent](https://www.w3schools.com/jsref/obj_popstateevent.asp)|
|[progress](https://www.w3schools.com/jsref/event_onprogress.asp)|The browser is downloading media data|[Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[ratechange](https://www.w3schools.com/jsref/event_onratechange.asp)|The playing speed of a media is changed|[Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[resize](https://www.w3schools.com/jsref/event_onresize.asp)|The document view is resized|[UiEvent](https://www.w3schools.com/jsref/obj_uievent.asp), [Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[reset](https://www.w3schools.com/jsref/event_onreset.asp)|A form is reset|[Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[scroll](https://www.w3schools.com/jsref/event_onscroll.asp)|An scrollbar is being scrolled|[UiEvent](https://www.w3schools.com/jsref/obj_uievent.asp), [Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[search](https://www.w3schools.com/jsref/event_onsearch.asp)|Something is written in a search field|[Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[seeked](https://www.w3schools.com/jsref/event_onseeked.asp)|Skipping to a media position is finished|[Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[seeking](https://www.w3schools.com/jsref/event_onseeking.asp)|Skipping to a media position is started|[Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[select](https://www.w3schools.com/jsref/event_onselect.asp)|User selects some text|[UiEvent](https://www.w3schools.com/jsref/obj_uievent.asp), [Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[show](https://www.w3schools.com/jsref/event_onshow.asp)|A `<menu>` element is shown as a context menu|[Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[stalled](https://www.w3schools.com/jsref/event_onstalled.asp)|The browser is trying to get unavailable media data|[Event](https://www.w3schools.com/jsref/obj_event.asp)|
|storage|A Web Storage area is updated|[StorageEvent](https://www.w3schools.com/jsref/obj_storageevent.asp)|
|[submit](https://www.w3schools.com/jsref/event_onsubmit.asp)|A form is submitted|[Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[suspend](https://www.w3schools.com/jsref/event_onsuspend.asp)|The browser is intentionally not getting media data|[Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[timeupdate](https://www.w3schools.com/jsref/event_ontimeupdate.asp)|The playing position has changed (the user moves to a different point in the media)|[Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[toggle](https://www.w3schools.com/jsref/event_ontoggle.asp)|The user opens or closes the `<details>` element|[Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[touchcancel](https://www.w3schools.com/jsref/event_touchcancel.asp)|The touch is interrupted|[TouchEvent](https://www.w3schools.com/jsref/obj_touchevent.asp)|
|[touchend](https://www.w3schools.com/jsref/event_touchend.asp)|A finger is removed from a touch screen|[TouchEvent](https://www.w3schools.com/jsref/obj_touchevent.asp)|
|[touchmove](https://www.w3schools.com/jsref/event_touchmove.asp)|A finger is dragged across the screen|[TouchEvent](https://www.w3schools.com/jsref/obj_touchevent.asp)|
|[touchstart](https://www.w3schools.com/jsref/event_touchstart.asp)|A finger is placed on a touch screen|[TouchEvent](https://www.w3schools.com/jsref/obj_touchevent.asp)|
|[transitionend](https://www.w3schools.com/jsref/event_transitionend.asp)|A CSS transition has completed|[TransitionEvent](https://www.w3schools.com/jsref/obj_transitionevent.asp)|
|[unload](https://www.w3schools.com/jsref/event_onunload.asp)|A page has unloaded|[UiEvent](https://www.w3schools.com/jsref/obj_uievent.asp), [Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[volumechange](https://www.w3schools.com/jsref/event_onvolumechange.asp)|The volume of a media is changed (includes muting)|[Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[waiting](https://www.w3schools.com/jsref/event_onwaiting.asp)|A media is paused but is expected to resume (e.g. buffering)|[Event](https://www.w3schools.com/jsref/obj_event.asp)|
|[wheel](https://www.w3schools.com/jsref/event_onwheel.asp)|The mouse wheel rolls up or down over an element|[WheelEvent](https://www.w3schools.com/jsref/obj_wheelevent.asp)|

