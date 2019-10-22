import { rowLength, squareWidth, barcode, borderWidth } from "./constants";

const canvas = document.getElementById("barcode");
const ctx = canvas.getContext("2d");

function drawLine({ x1, y1, x2, y2 }) {
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
}

function drawSquare({ x, y }) {
  ctx.fillRect(x, y, squareWidth, squareWidth);
}

function drawBorder() {
  const points = {
    p1: { x: barcode.start.x, y: barcode.start.y },
    p2: { x: barcode.start.x + barcode.w, y: barcode.start.y },
    p3: { x: barcode.start.x + barcode.w, y: barcode.start.y + barcode.h },
    p4: { x: barcode.start.x, y: barcode.start.y + barcode.h }
  };
  ctx.beginPath();
  ctx.lineWidth = borderWidth;
  ctx.lineCap = "square";
  drawLine({ x1: points.p1.x, y1: points.p1.y, x2: points.p2.x, y2: points.p2.y });
  drawLine({ x1: points.p2.x, y1: points.p2.y, x2: points.p3.x, y2: points.p3.y });
  drawLine({ x1: points.p3.x, y1: points.p3.y, x2: points.p4.x, y2: points.p4.y });
  drawLine({ x1: points.p4.x, y1: points.p4.y, x2: points.p1.x, y2: points.p1.y });
  ctx.stroke();
}

export default function draw(code) {
  drawBorder();
  let j = -1;
  for (let i = 0; i < code.length; i++) {
    if (i % rowLength === 0) {
      j++;
    }
    const point = {
      x: barcode.start.x + barcode.first.dx + squareWidth * (i % rowLength),
      y: barcode.start.y + barcode.first.dy + squareWidth * j
    };
    if (+code[i]) {
      drawSquare(point);
    }
  }
}
