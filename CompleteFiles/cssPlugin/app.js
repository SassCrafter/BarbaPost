barba.use(barbaCss);
barba.init({
  transitions: [
    {
      name: 'home',
      // Code inside won't run with css plugin, use beforeOnce or afterOnce
      once() {},
    },
    {
      name: 'cover',
      //sync: true,
      leave() {},
      enter() {},
    },
  ],
});
