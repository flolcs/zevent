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
sr.reveal(".h2016", { origin: "left" });
sr.reveal(".h2017", { origin: "top" });
sr.reveal(".h2018", { origin: "left" });
sr.reveal(".h2019", { origin: "top" });
sr.reveal(".h2020", { origin: "left" });
sr.reveal(".h2021", { origin: "top" });
sr.reveal(".h2022", { origin: "bottom" });

VANTA.TOPOLOGY({
  el: ".top-header",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  color: "#57af37",
  backgroundColor: "#202020",
  minHeight: 70.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  waveHeight: 10,
  shininess: 0,
  waveSpeed: 5,
  zoom: 1,
});
