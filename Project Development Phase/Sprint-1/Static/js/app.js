const selectedItem = document
  .getElementById('sidebarCollapse')
  .addEventListener('click', (e) => {
    const ele = document.getElementById('sidebar');
    ele.classList.toggle('active');
  });
