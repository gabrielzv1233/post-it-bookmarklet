javascript:(function() {  const createDraggableResizableTextbox = () => {    alert("hold Shift and drag to to resize or drag to move");    const textarea = document.createElement('textarea');    textarea.style.position = 'fixed';    textarea.style.top = '50px';    textarea.style.left = '50px';    textarea.style.zIndex = '9999';    textarea.style.resize = 'both';    textarea.style.overflow = 'auto';    textarea.style.backgroundColor = 'white';    textarea.style.border = '2px solid black';    document.body.appendChild(textarea);    let isResizing = false;    let startX, startY, startWidth, startHeight;    textarea.addEventListener('mousedown', (e) => {      e.preventDefault();      if (e.shiftKey) {        isResizing = true;        startX = e.clientX;        startY = e.clientY;        startWidth = parseInt(document.defaultView.getComputedStyle(textarea).width, 10);        startHeight = parseInt(document.defaultView.getComputedStyle(textarea).height, 10);      } else {        const offsetX = e.clientX - parseFloat(textarea.style.left);        const offsetY = e.clientY - parseFloat(textarea.style.top);        const onMouseMove = (e) => {          textarea.style.left = `${e.clientX - offsetX}px`;          textarea.style.top = `${e.clientY - offsetY}px`;        };        const onMouseUp = () => {          document.removeEventListener('mousemove', onMouseMove);          document.removeEventListener('mouseup', onMouseUp);        };        document.addEventListener('mousemove', onMouseMove);        document.addEventListener('mouseup', onMouseUp);      }      const onMouseMove = (e) => {        if (isResizing) {          const width = startWidth + e.clientX - startX;          const height = startHeight + e.clientY - startY;          textarea.style.width = `${width}px`;          textarea.style.height = `${height}px`;        }      };      const onMouseUp = () => {        isResizing = false;        document.removeEventListener('mousemove', onMouseMove);        document.removeEventListener('mouseup', onMouseUp);      };      document.addEventListener('mousemove', onMouseMove);      document.addEventListener('mouseup', onMouseUp);    });  };  createDraggableResizableTextbox();})();
