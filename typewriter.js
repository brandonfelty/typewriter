const typewriter = (sentence) => {
  let timeout = 0;
  for (const char of sentence) {  
    setTimeout(() => {
      process.stdout.write(char)}, timeout)
      timeout += 50;
  }
  setTimeout(() => {console.log('\n')}, timeout);
};

const sentence1 = 'hello there from lighthouse labs';
typewriter(sentence1);