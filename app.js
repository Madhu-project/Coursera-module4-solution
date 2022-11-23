var names = ["Madhu", "Sundar", "jayesh", "Kalpana"];

for (var i in names) {
  if (names[i].charAt(0) === "j" || names[i].charAt(0) === "J") {
    runscript1(names[i]);
  } else {
    runscript2(names[i]);
  }
}
