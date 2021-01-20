const randomMessages = {
  firstMessages: [1, 2, 3, 4],
  secondMessages: [5, 6, 7, 8],
  thirdMessages: [9, 10, 11, 12],
};

const getMessage = () => {
  const message1 = randomMessages.firstMessages[Math.floor(Math.random() * randomMessages.firstMessages.length)];
  const message2 = randomMessages.secondMessages[Math.floor(Math.random() * randomMessages.secondMessages.length)];
  const message3 = randomMessages.thirdMessages[Math.floor(Math.random() * randomMessages.thirdMessages.length)];

  console.log(`Your first message is ${message1}.`)
  console.log(`Your second message is ${message2}.`)
  console.log(`Your third message is ${message3}.`)
}
getMessage();
