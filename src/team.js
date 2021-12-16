(() => {
  const refs = {
    openTeamBtn: document.querySelector('[data-team-open]'),
    closeTeamBtn: document.querySelector('[data-team-close]'),
    team: document.querySelector('[data-team]'),
  };

  refs.openTeamBtn.addEventListener('click', toggleModal);
  refs.closeTeamBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.team.classList.toggle('is-hidden');
  }
})();
