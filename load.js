document.addEventListener('DOMContentLoaded', () => {
    let progress = 0;
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');

    const interval = setInterval(() => {
        if (progress < 100) {
            progress += 1;
            progressBar.style.width = progress + '%';
            progressText.textContent = progress + '%';
        } else {
            clearInterval(interval);
            window.location.href = 'index.html'; // Redirecionar para a página principal após completar
        }
    }, 30); // Aumenta o progresso a cada 50ms
});
