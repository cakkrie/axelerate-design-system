The row at the top of a top-level screen: wordmark on the left, controls pushed right.

```jsx
<AppBar wordmark="axelerate">
  <button type="button" className="ax-appbar__action" aria-label="Inbox">
    <BellIcon />
  </button>
  <Link to="/me" className="ax-appbar__avatar" aria-label="Me">
    <Avatar />
  </Link>
</AppBar>
```

The two utility classes are the point: both give a **44px touch target whose visible ink is smaller** (36px for the avatar), with negative margins so the row still measures as if the ink were the control. Hand-rolling that per screen is how a header ends up 8px short of the touch floor.

The system does not ship the icons or the avatar — bring your own, and bring your own router for the link. Drop the wordmark entirely on a screen that already names itself; `ScreenHeader` is the header for screens you arrive at from somewhere else.
