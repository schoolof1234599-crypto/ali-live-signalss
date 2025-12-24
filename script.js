fetch("signals.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("signals");

    data.forEach(signal => {
      const card = document.createElement("div");
      card.className = `card ${signal.type.toLowerCase()}`;

      card.innerHTML = `
        <div class="type">${signal.type} • ${signal.pair}</div>
        <p>Entry: ${signal.entry}</p>
        <p>TP: ${signal.tp}</p>
        <p>SL: ${signal.sl}</p>
        <small>${signal.note}</small>
      `;

      container.appendChild(card);
    });
  });
