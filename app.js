(function disableNoopOnce(){
	// Seleciona elementos que representam ações sem função (links ou botões)
	const noops = document.querySelectorAll('.noop, button.noop, a.noop');
	if(!noops.length) return;

	noops.forEach(el => {
		// Usa listener de captura para interceptar a primeira interação
		const handler = (e) => {
			// Previna comportamento padrão (ex.: navegar)
			e.preventDefault();
			// Se for botão, desabilita; se for link, remove href para evitar navegação futura
			if(el.tagName.toLowerCase() === 'button') el.disabled = true;
			if(el.tagName.toLowerCase() === 'a') {
				el.removeAttribute('href');
				el.style.pointerEvents = 'none';
				el.style.opacity = '0.6';
			}
			// Remove o listener para que não fique em memória
			el.removeEventListener('click', handler);
		};
		el.addEventListener('click', handler, { once: true });
	});
})();