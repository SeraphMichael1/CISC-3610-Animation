document.addEventListener('DOMContentLoaded', init);
let canvas, ctx, backgroundImg, sprites, thoughtBubble, frames;
function init()
{
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    backgroundImg = new Image();
    backgroundImg.src = 'assets/images/City Park Background.jpg';
    backgroundImg.onload = () => ctx.drawImage(backgroundImg, 0, 0);

    sprites = new Image();
    sprites.src = 'assets/images/spritesheet.png';

    thoughtBubble = new Image();
    thoughtBubble.src = 'assets/images/Thought Bubble.png';

    frames = timRunning.frames;
    startAnim();
}
function startAnim()
{
    let count = 0;
    setInterval(() =>
    {
        drawFrame(count);
        count >= frames.length - 1 ? count = 0 : count++;
    }, 50);
}
function clearCanvas()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(backgroundImg, 0, 0);
}

function drawFrame(frameNum)
{
    clearCanvas();
    let f = frames[frameNum];
    ctx.drawImage(
        sprites,
        f.frame.x,
        f.frame.y,
        f.frame.w,
        f.frame.h,
        (canvas.width / 2) - 100,
        150,
        f.sourceSize.w,
        f.sourceSize.h
    );
    drawSpeech();
}

function drawSpeech()
{
    ctx.drawImage(thoughtBubble, 75, 0);
    ctx.font = '14px Times New Roman';
    ctx.fillStyle = 'black'
    ctx.textAlign = 'center';
    ctx.fillText('Oh God, the meeting is starting!', 210, 75);
    ctx.fillText('I cant afford to be late!', 210, 95);
}