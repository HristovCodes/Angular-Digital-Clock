# Hristov Digital Clock

## Usage

```ts
<lib-hristov-digital-clock [format]="'h:m:s:t'"></lib-hristov-digital-clock>
```

_The size of the clock is determined from the parent element. If it's inside an element that has 100 height and a 100 width the clock will have the same dimensions._

## Format can be a combination of the following

### Hours:

- h - Formats the hours field in 12-hours format without leading zero (1..12).
- hh - Formats the hours field in 12-hours format with leading zero (01..12).
- H - Formats the hours field in 24-hours format without leading zero (0..23).
- HH - Formats the hours field in 24-hours format with leading zero (00..23).

### Minutes:

- m - Formats the minutes field without leading zero (0..59).
- mm - Formats the minutes field with leading zero (00..59).

### Seconds:

- s - Formats the seconds field without leading zero (0..59).
- ss - Formats the seconds field with leading zero (00..59).

### AM/PM display:

- t - If you are using the 12-hours format the clock will display whether the time is am or pm. Has no effect on 24-hours format.
- f - This will hide the am/pm display.
