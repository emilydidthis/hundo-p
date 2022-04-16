# Day 1 Notes

`Goal: Create a keylogger that saves the character and timestamp/timing to an array`

- Keypressed is deprecated; use [Keydown](https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event)
- There is also the [before input](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/beforeinput_event) event
- Use the `Date` object to add time stamps. | [How to measure elapsed time](https://stackoverflow.com/questions/41632942/how-to-measure-time-elapsed-on-javascript)
- I am still not super sure whether to put the user data in an object versus an array, but I picked an array. I should probably reread this:
[Object vs Arrays](https://medium.com/@zac_heisey/objects-vs-arrays-42601ff79421)

**Outstanding**:
- There are a lot of examples of keyloggers. I started with one using an input field and used `before input` but that event is used when a field experiences changes. Ultimately, I ended up using a textarea and listened to an `input` event.
- In both, I am still relying on the value of the input/textarea field. There was another [example](https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event) that just logged the key codes pressed. I think I will try to build off of this for tomorrow, or try to hide the input field (to be utilized by Racing Thoughts or Slow Journal).