var drawSnake = function (snakeToDraw) {
  var drawableSnake = { color: "green", pixels: snakeToDraw };
  var drawableObjects = [drawableSnake];
  CHUNK.draw(drawableObjects);
};

var moveSegment = function (segment) {
  switch (segment.direction) {
    case "down":
      return { top: segment.top + 1, left: segment.left };
    case "up":
      return { top: segment.top - 1, left: segment.left };
    case "right":
      return { top: segment.top, left: segment.left + 1 };
    case "left":
      return { top: segment.top, left: segment.left - 1 };
    default:
      return segment;
  }
};

var moveSnake = function (snake) {
  var oldSegment = snake[0];
  var newSegment = moveSegment(oldSegment);
  newSegment.direction = oldSegment.direction;
  var newSnake = [newSegment];
  return newSnake;
};

var advanceGame = function () {
  snake = moveSnake(snake);
  drawSnake(snake);
};

var changeDirection = function (direction) {
  snake[0].direction = direction;
};

var snake = [{ top: 0, left: 0, direction: "down" }];
CHUNK.executeNTimesPerSecond(advanceGame, 1);
CHUNK.onArrowKey(changeDirection);
