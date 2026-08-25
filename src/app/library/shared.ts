// shared.ts
// Shared module containing various miscellaneous functions used througout the application.

// type/struct/whatever definitions

// ...

// functions

/**
 * Sleep for a given amount of time.
 *
 * @param {number} time  Amount of time in milliseconds to sleep for
 */
export function sleep(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

/**
 * Get the current UNIX timestamp.
 */
export function unixTimestampNow() {
  return Math.floor(Date.now() / 1000);
}

// function GetUrlVars() {
//   const vars = {};
//   const parts = window.location.href.replace(
//     /[?&]+([^=&]+)=([^&]*)/gi,
//     function (m, key, value) {
//       vars[key] = value;
//     }
//   );
//   return vars;
// }

/**
 * Pad a number with zeroes for use in 12 hour time formatting.
 *
 * @param {number} num  Number to pad
 */
export function pad(num: number) {
  return (num < 10 ? "0" : "") + num;
}

/**
 * Convert a UNIX timestamp into a human-readable format.
 *
 * @param {number} timestamp  Timestamp to prettify
 * @param {string | undefined} format  Output format (optional)
 */
export function prettifyUnixTime(timestamp: number, format?: string) {
  const d = new Date(timestamp * 1000); // JS expects millisecond timestamp so we needa multiply
  const hrs24 = d.getHours();
  let hrs12: number = 0;
  const m = pad(d.getMinutes());
  const s = pad(d.getSeconds());
  let amPm: "AM" | "PM" = "AM";
  if (hrs24 === 0) {
    hrs12 = 12;
    amPm = "AM";
  } else if (hrs24 < 12) {
    hrs12 = hrs24;
    amPm = "AM";
  } else if (hrs24 === 12) {
    hrs12 = 12;
    amPm = "PM";
  } else {
    hrs12 = hrs24 - 12;
    amPm = "PM";
  }

  const months_short: Array<string> = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const months_full: Array<string> = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const formatReplacements = {
    "%y": d.getFullYear().toString().slice(-2),
    "%Y": d.getFullYear(),
    "%M": d.getMonth() + 1,
    "%g": months_short[d.getMonth()], // g for gregorian idk but these need to be single letters for the regex to work
    "%G": months_full[d.getMonth()],
    "%d": d.getDate(),
    "%h": hrs12,
    "%H": hrs24,
    "%m": m,
    "%s": s,
    "%r": amPm, // r for roman cuz they used 12hr time ig idk bruh
    "%u": timestamp,
  };
  // Formatting guide:
  // [date used in examples: 1/30/2023 6:45:15 PM]
  // %y - Short year (ex. 23)
  // %Y - Full year (ex. 2023)
  // %M - Month number (ex. 1)
  // %g - Month name short (ex. Jan)
  // %G - Month name full (ex. January)
  // %d - Day number (ex. 30)
  // %h - Hours (ex. 12hr) (ex. 6)
  // %H - Hours (ex. 24hr) (ex. 18)
  // %m - Minutes (ex. 45)
  // %s - Seconds (ex. 15)
  // %r - AM/PM (ex. PM)
  // %u - Unix timestamp (ex. 1675122315)

  let timeformat: string = "";
  if (format === undefined) {
    // default time format
    timeformat = "%M/%d/%Y • %h:%m %r";
  } else {
    // allow the format to be specified in the function call ( ex. prettifyUnixTime('%g %d, %Y @ %h:%m:%s %r') )
    timeformat = format;
  }

  let f = timeformat;
  for (const [key, val] of Object.entries(formatReplacements)) {
    const regex = new RegExp(key, "g");
    f = f.replace(regex, String(val));
  }

  return f;
}
