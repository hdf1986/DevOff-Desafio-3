(function () {
  const canvas = document.querySelector('.canvas');
  const colorPicker = document.querySelector('.color-picker');
  const sizePicker = document.querySelector('.size-picker');
  const downloadLink = document.querySelector('.download-link');
  
  canvas.width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  canvas.height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
  
  const ctx = canvas.getContext('2d');
  let color = 'black';
  let mouseDown = false;
  let lineWidth = 1;
  let x = 0;
  let y = 0;

  canvas.addEventListener('mousedown', (e) => {
    mouseDown = true
    x = e.offsetX;
    y = e.offsetY;
  })

  canvas.addEventListener('mouseup', () => {
    mouseDown = false
  })
  
  canvas.addEventListener('mousemove', (e) => {
    if (mouseDown === true) {
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      ctx.lineJoin = "round";
      ctx.moveTo(x, y);
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
      ctx.closePath();

      x = e.offsetX;
      y = e.offsetY;
    }
  })

  colorPicker.addEventListener('change', e => {
    color = e.target.value
  })

  sizePicker.addEventListener('change', e => {
    lineWidth = e.target.value
  })

  downloadLink.addEventListener('click', e => {
    downloadLink.href = canvas.toDataURL("image/png").replace(/^data:image\/[^;]/, 'data:application/octet-stream')
  })
})()