let sudokuBoard_0 = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ];

let sudokuBoard_1 = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
  ];
  
  
let sudokuBoard = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 0, 0, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 17, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 03, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 5, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ];

let sudokuResultCheck
sudokuResultCheck = SudokuResultCheck(sudokuBoard);
console.log("sudokuResultCheck is " + sudokuResultCheck);

sudokuResultCheck = SudokuResultCheck(sudokuBoard_0);
console.log("sudokuResultCheck is " + sudokuResultCheck);

sudokuResultCheck = SudokuResultCheck(sudokuBoard_1);
console.log("sudokuResultCheck is " + sudokuResultCheck);

function SudokuResultCheck(board){
    let isValidBlock;
    isValidBlock = CheckRowsBlock(board);
    if(isValidBlock){
        isValidBlock = CheckColumnBlock(board);
    };
    if(isValidBlock){
        isValidBlock = CheckBoxBlocks(board);
    };
    return isValidBlock;
};

function CheckRowsBlock(board){
    console.log("CheckRowsBlock");
    let isValid = true;
    for(let i = 0; i < 9 && isValid; i++){
        isValid = CheckBlockSudoku(board[i]);
        console.log("Row = " + i + " is " + isValid + " " + board[i]);
    }
    return isValid;
} 

function CheckColumnBlock(board){
    console.log("CheckColumnBlock");
    let blocks = GetColumnBlock(board);
    let isValid = true;
    for(let i = 0; i < 9 && isValid; i++){
        isValid = CheckBlockSudoku(blocks[i]);
        console.log("Column = " + i + " is " + isValid + " " + blocks[i]);
    }
    return isValid;
} 

function GetColumnBlock(board){
    let colBlocks = [];
    let colBlock;
    for(let j = 0; j < 9; j++){
        colBlock = [];
        for(let i = 0; i < 9; i++){
            colBlock.push(board[i][j]);
        }
        colBlocks.push(colBlock);
    }
    return colBlocks;
} 

function CheckBoxBlocks(board){
    console.log("CheckBoxBlocks");
    let blocks = GetBoxBlock(board); 
    let isValid = true;
    for(let i = 0; i < 9 && isValid; i++){
        isValid = CheckBlockSudoku(blocks[i]);
        console.log("Box = " + i + " is " + isValid + " " + blocks[i]);
    }
    return isValid;
} 

function GetBoxBlock(board){
    console.log("GetBoxBlock");
    let boxBlocks = [];
    let boxBlock;
    for(let k = 0; k < 3; k++){
        for(let n = 0; n < 3; n++){
            boxBlock = [];
            for(let i = 3*k; i < 3*(k + 1); i++){
                for(let j = 3*n; j < 3*(n + 1); j++){
                    boxBlock.push(board[i][j]);
                };
            };  
            boxBlocks.push(boxBlock);   
        };
    };
    return boxBlocks;
} 

function CheckBlockSudoku(block){
    let isIncludeZero = block.some(elem => elem === 0);
    if(isIncludeZero){
        return false;
    };
    let uniqBlock = [...new Set(block)];
    if(uniqBlock.length < block.length){
        return false;
    };
    return block.every((x) => x > 0 && x < 10);
}  


