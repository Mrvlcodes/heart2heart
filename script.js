const loveNote = document.getElementById('love-note');
const newNoteButton = document.getElementById('new-note');

const loveNotes = [
  'Your smile lights up my world.',
  'I love how you make me laugh.',
  'You are my everything.',
  'I am so lucky to have you in my life.',
  'You are my soulmate.',
  'You are complete me.',
  'I love you more and more each day.',
  'You are my rock, my safe haven.',
  'I am grateful for every moment we spend together.',
  'You are my sunshine, my rainbow.',
  'I love you from the bottom of my heart.',
  'You own my thoughts papi.'
];

newNoteButton.addEventListener('click', () => {
  const randomNote = loveNotes[Math.floor(Math.random() * loveNotes.length)];
  loveNote.textContent = randomNote;
});

// Generate a random love note on page load
const randomNote = loveNotes[Math.floor(Math.random() * loveNotes.length)];
loveNote.textContent = randomNote;