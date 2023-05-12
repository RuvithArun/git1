//generate rgba colors

// const randomNumber = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomByte = () => randomNumber(0, 255);
// const randomPercent = () => (randomNumber(50, 80) * 0.01).toFixed(2);
// const randomCssRgba = () =>
//   `rgba(${[randomByte(), randomByte(), randomByte(), randomPercent()].join(
//     ","
//   )})`;

// let RGBAColors = [];
// for (let i = 0; i < 200; i++) {
//   RGBAColors.push(randomCssRgba());
// }
// console.log(RGBAColors);

//Run the above code and paste the generated colors in cfg variable

define("ColorsForGraph", function (d) {
  var cfg = [
    "rgba(9,72,132,0.73)",
    "rgba(170,68,144,0.52)",
    "rgba(148,228,236,0.50)",
    "rgba(67,219,211,0.61)",
    "rgba(123,200,55,0.62)",
    "rgba(233,63,30,0.56)",
    "rgba(102,104,20,0.77)",
    "rgba(79,142,152,0.70)",
    "rgba(18,236,48,0.50)",
    "rgba(255,16,254,0.70)",
    "rgba(52,133,33,0.55)",
    "rgba(109,99,72,0.60)",
    "rgba(4,246,223,0.74)",
    "rgba(24,233,229,0.57)",
    "rgba(114,234,181,0.80)",
    "rgba(135,204,48,0.56)",
    "rgba(24,64,23,0.76)",
    "rgba(42,213,210,0.61)",
    "rgba(10,171,117,0.73)",
    "rgba(218,42,34,0.58)",
    "rgba(236,233,3,0.62)",
    "rgba(167,43,219,0.69)",
    "rgba(140,196,83,0.79)",
    "rgba(52,194,203,0.61)",
    "rgba(18,238,129,0.70)",
    "rgba(86,115,94,0.75)",
    "rgba(206,214,228,0.67)",
    "rgba(94,89,133,0.51)",
    "rgba(130,210,122,0.54)",
    "rgba(26,245,139,0.71)",
    "rgba(57,174,79,0.73)",
    "rgba(34,128,240,0.64)",
    "rgba(248,63,222,0.50)",
    "rgba(197,144,238,0.50)",
    "rgba(127,201,186,0.56)",
    "rgba(136,205,251,0.79)",
    "rgba(232,190,23,0.58)",
    "rgba(125,203,214,0.71)",
    "rgba(166,93,60,0.65)",
    "rgba(160,170,205,0.79)",
    "rgba(99,242,162,0.69)",
    "rgba(49,103,224,0.68)",
    "rgba(200,96,118,0.72)",
    "rgba(37,83,211,0.71)",
    "rgba(10,138,239,0.78)",
    "rgba(180,163,164,0.71)",
    "rgba(248,121,78,0.56)",
    "rgba(116,143,103,0.61)",
    "rgba(78,143,143,0.72)",
    "rgba(193,126,184,0.72)",
    "rgba(224,156,239,0.57)",
    "rgba(230,151,9,0.66)",
    "rgba(38,84,18,0.66)",
    "rgba(25,101,173,0.68)",
    "rgba(10,192,78,0.78)",
    "rgba(100,187,202,0.72)",
    "rgba(114,148,99,0.69)",
    "rgba(39,63,10,0.52)",
    "rgba(181,153,202,0.52)",
    "rgba(186,51,241,0.67)",
    "rgba(156,252,68,0.69)",
    "rgba(239,223,247,0.79)",
    "rgba(195,40,3,0.52)",
    "rgba(183,47,42,0.64)",
    "rgba(51,180,68,0.74)",
    "rgba(199,58,202,0.70)",
    "rgba(126,178,219,0.59)",
    "rgba(4,107,111,0.74)",
    "rgba(245,176,126,0.77)",
    "rgba(216,86,144,0.60)",
    "rgba(21,174,84,0.72)",
    "rgba(236,155,130,0.64)",
    "rgba(5,228,161,0.55)",
    "rgba(126,82,162,0.54)",
    "rgba(128,200,107,0.70)",
    "rgba(153,202,2,0.74)",
    "rgba(180,223,97,0.63)",
    "rgba(255,186,144,0.70)",
    "rgba(86,0,63,0.80)",
    "rgba(52,38,194,0.56)",
    "rgba(131,201,76,0.80)",
    "rgba(76,169,86,0.68)",
    "rgba(98,156,253,0.71)",
    "rgba(15,104,86,0.79)",
    "rgba(46,241,124,0.77)",
    "rgba(130,197,208,0.63)",
    "rgba(153,71,138,0.75)",
    "rgba(121,244,179,0.73)",
    "rgba(212,253,121,0.78)",
    "rgba(147,100,141,0.77)",
    "rgba(190,63,142,0.59)",
    "rgba(161,185,93,0.53)",
    "rgba(39,254,149,0.76)",
    "rgba(18,47,136,0.52)",
    "rgba(85,233,28,0.60)",
    "rgba(139,12,206,0.76)",
    "rgba(102,60,155,0.78)",
    "rgba(241,169,214,0.58)",
    "rgba(144,212,95,0.66)",
    "rgba(223,128,129,0.69)",
    "rgba(106,89,180,0.68)",
    "rgba(211,48,15,0.52)",
    "rgba(250,116,143,0.77)",
    "rgba(82,51,85,0.64)",
    "rgba(21,42,168,0.66)",
    "rgba(231,2,57,0.51)",
    "rgba(63,209,218,0.66)",
    "rgba(122,157,111,0.74)",
    "rgba(166,196,155,0.56)",
    "rgba(86,197,152,0.61)",
    "rgba(43,18,137,0.72)",
    "rgba(176,203,236,0.61)",
    "rgba(193,235,167,0.66)",
    "rgba(52,44,70,0.68)",
    "rgba(100,198,208,0.66)",
    "rgba(188,85,52,0.55)",
    "rgba(0,59,225,0.52)",
    "rgba(197,4,148,0.69)",
    "rgba(86,246,192,0.61)",
    "rgba(30,184,68,0.68)",
    "rgba(192,190,66,0.66)",
    "rgba(57,94,22,0.72)",
    "rgba(34,65,210,0.63)",
    "rgba(30,179,5,0.74)",
    "rgba(160,81,51,0.69)",
    "rgba(54,3,23,0.73)",
    "rgba(60,65,175,0.59)",
    "rgba(149,186,1,0.77)",
    "rgba(70,149,155,0.59)",
    "rgba(45,117,200,0.80)",
    "rgba(74,46,56,0.78)",
    "rgba(151,56,143,0.65)",
    "rgba(55,207,24,0.53)",
    "rgba(204,255,180,0.72)",
    "rgba(106,210,187,0.70)",
    "rgba(160,23,87,0.68)",
    "rgba(176,209,67,0.79)",
    "rgba(118,72,144,0.57)",
    "rgba(102,193,86,0.77)",
    "rgba(42,170,169,0.58)",
    "rgba(247,179,245,0.56)",
    "rgba(167,116,240,0.65)",
    "rgba(186,26,206,0.62)",
    "rgba(229,230,154,0.67)",
    "rgba(101,79,157,0.64)",
    "rgba(49,165,147,0.51)",
    "rgba(237,210,205,0.78)",
    "rgba(5,239,90,0.58)",
    "rgba(126,81,122,0.70)",
    "rgba(71,65,198,0.54)",
    "rgba(249,52,207,0.80)",
    "rgba(17,203,8,0.64)",
    "rgba(49,72,170,0.70)",
    "rgba(203,190,155,0.51)",
    "rgba(182,10,21,0.79)",
    "rgba(160,132,17,0.69)",
    "rgba(129,13,130,0.65)",
    "rgba(165,226,191,0.73)",
    "rgba(159,56,85,0.57)",
    "rgba(5,198,100,0.60)",
    "rgba(202,170,124,0.72)",
    "rgba(202,140,187,0.66)",
    "rgba(22,58,166,0.52)",
    "rgba(25,143,100,0.71)",
    "rgba(37,190,228,0.68)",
    "rgba(22,4,210,0.62)",
    "rgba(5,96,109,0.66)",
    "rgba(129,230,195,0.76)",
    "rgba(89,146,231,0.61)",
    "rgba(97,137,85,0.71)",
    "rgba(111,64,107,0.76)",
    "rgba(7,209,242,0.61)",
    "rgba(122,175,172,0.57)",
    "rgba(12,153,169,0.60)",
    "rgba(160,79,211,0.80)",
    "rgba(196,215,78,0.68)",
    "rgba(177,217,199,0.68)",
    "rgba(51,177,60,0.55)",
    "rgba(72,36,242,0.80)",
    "rgba(220,1,108,0.72)",
    "rgba(245,251,97,0.68)",
    "rgba(32,59,34,0.53)",
    "rgba(161,255,129,0.70)",
    "rgba(58,127,80,0.59)",
    "rgba(185,235,108,0.58)",
    "rgba(17,245,178,0.77)",
    "rgba(126,37,105,0.60)",
    "rgba(192,218,159,0.54)",
    "rgba(3,154,101,0.55)",
    "rgba(197,38,166,0.56)",
    "rgba(135,100,109,0.69)",
    "rgba(173,144,122,0.68)",
    "rgba(236,96,93,0.66)",
    "rgba(14,181,62,0.71)",
    "rgba(39,187,162,0.63)",
    "rgba(61,80,159,0.54)",
    "rgba(186,233,116,0.59)",
    "rgba(208,153,4,0.78)",
    "rgba(177,131,172,0.75)",
    "rgba(189,136,20,0.54)",
  ];
  return cfg;
});