class WordLadder {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.queue = [[start]];
  }

  bfs() {
    while (this.queue.length > 0) {
      const path = this.queue.shift();
      const word = path[path.length - 1];
      if (word === this.end) return path;
      for (let i = 0; i < word.length; i++) {
        for (let c = 'a'.charCodeAt(0); c <= 'z'.charCodeAt(0); c++) {
          const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
          if (newWord !== word && !path.includes(newWord)) {
            this.queue.push([...path, newWord]);
          }
        }
      }
    }
    return null;
  }
}

const wordLadder = new WordLadder('hit', 'cog');
const result = wordLadder.bfs();
console.log(result);
