const { search } = window.location;

if (search) {
  const param = new URLSearchParams(search).get('success');

  switch (param) {
    case '1':
      document.querySelector('p.message').style.display = 'block';
      break;
    default:
      break;
  }
}
