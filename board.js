class Board {
  constructor(width, height, cellSize, colors) {
    this.points = 0;
    this.cellSize = cellSize;
    this.width  = width;
    this.height = height;
    this.colors = colors;

    this.activeTile = new TetrisTile(width, colors, cellSize);
    this.staticTiles = [];
    for(let i = 0; i < width * height; i++) {
      this.staticTiles[i] = color(255, 255, 255);
    }
  }
  move(direction) {
    if(this.activeTile != null) {
      if (direction == 0 && this.activeTile.x > 0) {
        this.activeTile.x--;
      }
      else if(direction == 1 && this.activeTile.x < this.width - this.activeTile.getRealWidth()) {
        this.activeTile.x++;
      }
      else if(direction == 2) {
        this.activeTile.rotate();
      }
      else if(direction == 3) {
        while(!this.activeTile.checkForTileStop(this.staticTiles)) this.activeTile.y += 1;
        this.activeTile.moveTileToBackBoard(this.staticTiles);
        this.checkForRowFlush();
        this.activeTile = new TetrisTile(this.width, this.colors, this.cellSize);
      }
    }
  }

  checkForRowFlush() {
    for(let y = this.height - 1; y > 0; y--) {
      let fullRow = true;
      for(let x = 0; x < this.width; x++) {
        if(this.staticTiles[y * this.width + x]._array[0] == 1) {
          fullRow = false;
          break;
        }
      }
      if(fullRow) {
        this.points += 100;
        for(let x = 0; x < this.width; x++) {
          this.staticTiles[y * this.width + x] = color(255, 255, 255);
        }
        // move all upper rows y++
        for(let tempY = y - 1; tempY > 0; tempY--) {
          for(let x = 0; x < this.width; x++) {
            this.staticTiles[(tempY + 1) * this.width + x] = this.staticTiles[tempY * this.width + x];
          }
        }
        y++;
      }
    } // for y
  }

  step() {
    // find total height and if its smaller than 4 game ends - no more blocks can be added
    for(let y = 0; y < this.height; y++) {
      for(let x = 0; x < this.width; x++) {
        if(this.staticTiles[y * this.width + x]._array[0] != 1 && y < 5) return false;
      }
    }
    this.points += 1;

    if(this.activeTile != null) {
      if(!this.activeTile.checkForTileStop(this.staticTiles)) {
        this.activeTile.y++;
      }
      else {
        this.activeTile.moveTileToBackBoard(this.staticTiles);
        this.checkForRowFlush();
        this.activeTile = new TetrisTile(this.width, this.colors, this.cellSize);
      }
    }
    return true;
  }
  show() {
    fill(255);
    stroke(51);
    rect(1, 1, this.width * this.cellSize - 1, this.height * this.cellSize - 1);

    for(let i = 0; i < this.width * this.height; i++) {
      let y = (i / this.width) >> 0;
      let x = (i % this.width);
      fill(this.staticTiles[i]);
      noStroke();
      rect(x * this.cellSize, y * this.cellSize, this.cellSize, this.cellSize);
    }

    if(this.activeTile != null) {
      this.activeTile.show();
    }

    stroke(200);
    for(let y = 0; y < this.height; y++) {
      line(1, y * this.cellSize, this.width * this.cellSize, y * this.cellSize);
    }
    for(let x = 0; x < this.width; x++) {
      line(x * this.cellSize, 1, x * this.cellSize, this.height * this.cellSize);
    }

    // gui:
    fill(0);
    noStroke();
    textSize(28);
    text('Points',    this.width * this.cellSize + 10, 30);
    text(this.points, this.width * this.cellSize + 10, 60);
  }
}
