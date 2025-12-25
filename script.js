fetch("signals.json")
  .then(res => res.json())
  .then(data => {
    const s = data[0];

    document.getElementById("signals").innerHTML = `
      <h2>${s.type} - ${s.pair}</h2>
      <p>Entry: ${s.entry}</p>
      <p>TP: ${s.tp}</p>
      <p>SL: ${s.sl}</p>
      <b>${s.note}</b>
    `;
  });
