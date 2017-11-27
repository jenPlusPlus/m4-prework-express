const button = document.getElementById('show-members');
const list = document.getElementById('class-members');

const classMembers = [
  "Adam",
  "Alex",
  "Amy",
  "Ben",
  "Francy",
  "Hector",
  "Jen",
  "John Michael",
  "Lola",
  "Luke",
  "Nick",
  "Nik",
  "Robbie",
  "Rufus"
];

const mapMembers = () => {
  const mappedMembers = classMembers.map(member => {
    return `<li>${member}</li>`;
  });
  return mappedMembers.join('');
}

button.addEventListener('click', () => {
  if(list.style.display === 'none') {
    list.style.display = 'block';
    list.innerHTML = mapMembers();
    button.innerText = 'Hide Class Members';
  } else {
    list.style.display = 'none';
    button.innerText = 'Show Class Members';
  }
})
