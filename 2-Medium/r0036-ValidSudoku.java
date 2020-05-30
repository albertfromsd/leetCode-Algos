// [ COPIED ]
// What makes this solution so fast?

// Runtime: 1 ms, faster than 100.00% of Java online submissions for Valid Sudoku.
// Memory Usage: 39 MB, less than 100.00% of Java online submissions for Valid Sudoku.

class Solution {
    public boolean isValidSudoku(char[][] board) {
        for(int i=0;i<9;i++){
            for(int j=0;j<9;j++){
                if(board[i][j]!='.'){
                    if(isCorrect(board,i,j,board[i][j])==false)
                        return false;
                }
            }
        }
        return true;
    }
    public boolean isCorrect(char[][] board,int i,int j,char num){

        for(int r=0;r<9;r++){
            if(r!=i && board[r][j]==num){
                return false;
            }
        }
		
        for(int c=0;c<9;c++){
            if(c!=j && board[i][c]==num){
                return false;
            }
        }
        
        // why is the (i/3)*3 necessary when it essentially equals i?
        // really doesn't work unless if that operation is as-is
        int rr=(i/3)*3;
        int cc=(j/3)*3;
        for(int r=0;r<3;r++){
            for(int c=0;c<3;c++){
                int ii=rr+r;
                int jj=cc+c;
                if(ii!=i && jj!=j && board[ii][jj]==num){
                    return false;
                }
            }
        }
        return true;
    }
}