// TODO: Document
const fetchPinsByChannel = (id, bot, sender) => {
  bot.channels.fetch(id).then(channel => {
    c = channel.messages;
    c.fetchPinned()
      .then(messages => {
        // console.log(`Received ${messages.size} messages`);
        keysArray = Array.from(messages.keys());
        randMsgIdx = getRandomIndex(0, keysArray.length - 1);
        pin = c.cache.get(keysArray[randMsgIdx]);
        sender.send(pin);
      })
      .catch(console.error);
  });
};

// TODO: Document
const getRandomIndex = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

module.exports = {
  fetchPinsByChannel,
  getRandomIndex
};
