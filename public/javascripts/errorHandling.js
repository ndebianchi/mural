const { search } = window.location;

if (search) {
  const param = new URLSearchParams(search).get('error');

  switch (param) {
    case '3':
      document.querySelector('p.message').style.display = 'block';
      break;
    default:
      break;
  }
}
