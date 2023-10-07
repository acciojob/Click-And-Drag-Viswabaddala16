// Your code here.
let isDragging = false;
        let dragElement = null;

        document.addEventListener('mousedown', (e) => {
            if (e.target.classList.contains('cube')) {
                isDragging = true;
                dragElement = e.target;
                dragElement.style.zIndex = 1000;
            }
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging && dragElement) {
                const offsetX = e.clientX - dragElement.offsetWidth / 2;
                const offsetY = e.clientY - dragElement.offsetHeight / 2;

                dragElement.style.position = 'absolute';
                dragElement.style.left = offsetX + 'px';
                dragElement.style.top = offsetY + 'px';
            }
        });

        document.addEventListener('mouseup', () => {
            if (isDragging && dragElement) {
                dragElement.style.zIndex = '';
                isDragging = false;
                dragElement = null;
            }
        });
