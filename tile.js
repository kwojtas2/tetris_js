class TetrisTile {
  constructor(boardWidth, colors, cellSize) {
    this.bits = [];
    this.type = random(7) >> 0;

    this.boardWidth = boardWidth;

    this.rotation = 0;
    this.color = colors[this.type];
    this.cellSize = cellSize;

    this.x = ((boardWidth - 4) / 2) >> 0;

    if(this.type == 0) this.y = -3;
    else               this.y = -2;

    switch (this.type) {
      case 0: // I
        this.bits = [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [1, 1, 1, 1],
        ];
        break;
      case 1: // J
        this.bits = [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [1, 0, 0, 0],
          [1, 1, 1, 0],
        ];
        break;
      case 2: // L
        this.bits = [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 1, 0],
          [1, 1, 1, 0],
        ];
        break;
      case 3: // O
        this.bits = [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [1, 1, 0, 0],
          [1, 1, 0, 0],
        ];
        break;
      case 4: // S
        this.bits = [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 1, 1, 0],
          [1, 1, 0, 0],
        ];
        break;
      case 5: // T
        this.bits = [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 1, 0, 0],
          [1, 1, 1, 0],
        ];
        break;
      case 6: // Z
        this.bits = [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [1, 1, 0, 0],
          [0, 1, 1, 0],
        ];
        break;
    }
  }
  rotate() {
    if (this.type == 0 && this.rotation == 1 && this.x <= this.boardWidth - 4)
    {
      this.bits = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 1, 1, 1],
      ];
      this.rotation = 0;
    } else if(this.type == 0 && this.rotation == 0 && this.y >= 0) {
      this.bits = [
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
      ];
      this.rotation = 1;
    }

    else if(this.type == 1) {
      if(this.rotation < 3) this.rotation++;
      else this.rotation = 0;
      switch (this.rotation) {
        case 0:
          this.bits = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 1, 1, 0],
          ];
          break;
        case 1:
          this.bits = [
            [0, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [1, 1, 0, 0],
          ];
          break;
        case 2:
          this.bits = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 1, 0],
            [0, 0, 1, 0],
          ];
          break;
        case 3:
          this.bits = [
            [0, 0, 0, 0],
            [1, 1, 0, 0],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
          ];
          break;
      }
    } else if(this.type == 2) {
      if(this.rotation < 3) this.rotation++;
      else this.rotation = 0;
      switch (this.rotation) {
        case 0:
          this.bits = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 1, 0],
            [1, 1, 1, 0],
          ];
          break;
        case 1:
          this.bits = [
            [0, 0, 0, 0],
            [1, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
          ];
          break;
        case 2:
          this.bits = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 1, 0],
            [1, 0, 0, 0],
          ];
          break;
        case 3:
          this.bits = [
            [0, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 1, 0, 0],
          ];
          break;
      }
    } else if(this.type == 4) {
      if(this.rotation < 1) this.rotation++;
      else this.rotation = 0;
      switch (this.rotation) {
        case 0:
          this.bits = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [1, 1, 0, 0],
          ];
          break;
        case 1:
          this.bits = [
            [0, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 1, 0, 0],
            [0, 1, 0, 0],
          ];
          break;
        }
    } else if(this.type == 5) {
      if(this.rotation < 3) this.rotation++;
      else this.rotation = 0;
      switch (this.rotation) {
        case 0:
          this.bits = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 1, 0, 0],
            [1, 1, 1, 0],
          ];
          break;
        case 1:
          this.bits = [
            [0, 0, 0, 0],
            [0, 1, 0, 0],
            [1, 1, 0, 0],
            [0, 1, 0, 0],
          ];
          break;
        case 2:
          this.bits = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 1, 0],
            [0, 1, 0, 0],
          ];
          break;
        case 3:
          this.bits = [
            [0, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 1, 0, 0],
            [1, 0, 0, 0],
          ];
          break;
      }
    } else if(this.type == 6) {
      if(this.rotation < 1) this.rotation++;
      else this.rotation = 0;
      switch (this.rotation) {
        case 0:
          this.bits = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 0, 0],
            [0, 1, 1, 0],
          ];
          break;
        case 1:
          this.bits = [
            [0, 0, 0, 0],
            [0, 1, 0, 0],
            [1, 1, 0, 0],
            [1, 0, 0, 0],
          ];
          break;
      }
    }
  }
  checkForTileStop(staticTiles) {
    for(let y = 0; y < 4; y++) {
      for(let x = 0; x < 4; x++) {
        if(this.bits[y][x] == 1) {
          let inBoardIndex = (this.y + y + 1) * this.boardWidth + this.x + x;
          if(inBoardIndex >= staticTiles.length) return true;
          else if(staticTiles[inBoardIndex]._array[0] != 1) return true;
        }
      }
    }
    return false;
  }
  moveTileToBackBoard(staticTiles) {
    let inBoardIndex = this.y * this.boardWidth + this.x;
    for(let y = 0; y < 4; y++) {
      for(let x = 0; x < 4; x++) {
        if(this.bits[y][x] == 1) {
          staticTiles[inBoardIndex] = this.color;
        }
        inBoardIndex++;
      }
      inBoardIndex += this.boardWidth - 4;
    }
  }
  getRealWidth() {
    let maxX = 0;
    for(let y = 0; y < 4; y++) {
      for(let x = 0; x < 4; x++) {
        if(this.bits[y][x] == 1 && maxX < x) maxX = x;
      }
    }
    return maxX + 1;
  }
  show() {
    fill(this.color);
    for(let y = 0; y < 4; y++) {
      for(let x = 0; x < 4; x++) {
        if(this.bits[y][x] == 1) {
          rect((this.x + x) * this.cellSize, (this.y + y) * this.cellSize, this.cellSize, this.cellSize);
        }
      }
    }

  }
}
