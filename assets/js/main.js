// ScrollReveal
const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 1000,
  delay: 200,
  //reset: true
});

sr.reveal("#p1", { delay: 0, origin: "left" });
sr.reveal("#p2", { delay: 300, origin: "left" });
sr.reveal("#p3", { delay: 600, origin: "left" });
