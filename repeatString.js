function repeatStringNumTimes(string, times) {
  var repeatedString = "";
  while (times > 0) {
    repeatedString += string;
    times--;
  }
  /* While loop logic
                        Condition       T/F       repeatedString += string      repeatedString        times
      First iteration    (3 > 0)        true            "" + "abc"                  "abc"               2
      Second iteration   (2 > 0)        true           "abc" + "abc"               "abcabc"             1
      Third iteration    (1 > 0)        true          "abcabc" + "abc"            "abcabcabc"           0
      Fourth iteration   (0 > 0)        false
      }
    */
  return repeatedString; // "abcabcabc"
}
repeatStringNumTimes("abc", 3);
