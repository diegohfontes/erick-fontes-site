// Data real do lançamento de "Uma praia" ainda não confirmada (ver Pendências do brief).
// Quando o Diego confirmar, troca null por uma string ISO, ex: '2026-10-15T00:00:00-03:00'
const RELEASE_DATE = null;

function renderCountdown() {
  const area = document.getElementById('countdown-area');
  if (!area) return;

  if (!RELEASE_DATE) {
    area.innerHTML = '<span class="badge-em-breve">Em breve</span>';
    return;
  }

  const target = new Date(RELEASE_DATE).getTime();

  function tick() {
    const now = Date.now();
    const diff = Math.max(0, target - now);

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    area.innerHTML = `
      <div class="countdown">
        <div class="countdown-unit"><strong>${String(days).padStart(2, '0')}</strong><span>dias</span></div>
        <div class="countdown-unit"><strong>${String(hours).padStart(2, '0')}</strong><span>horas</span></div>
        <div class="countdown-unit"><strong>${String(minutes).padStart(2, '0')}</strong><span>min</span></div>
        <div class="countdown-unit"><strong>${String(seconds).padStart(2, '0')}</strong><span>seg</span></div>
      </div>
    `;

    if (diff <= 0) clearInterval(interval);
  }

  tick();
  const interval = setInterval(tick, 1000);
}

renderCountdown();
