fetch("signals.json")
.then(res => res.json())
.then(data => {
  const box = document.getElementById("signals");
  box.innerHTML = "";

  data.forEach(s => {
    box.innerHTML += `
      <div class="card">
        <h2 class="${s.type === 'BUY' ? 'buy' : 'sell'}">
          ${s.type} - ${s.pair}
        </h2>
        <p>Entry: ${s.entry}</p>
        <p>TP: ${s.tp}</p>
        <p>SL: ${s.sl}</p>
        <p class="note">${s.note}</p>
      </div>
    `;
  });
});
