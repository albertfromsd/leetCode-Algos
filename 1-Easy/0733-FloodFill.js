// Easy
// https://leetcode.com/problems/flood-fill/

// An image is represented by a 2-D array of integers, 
// each integer representing the pixel value of the image (from 0 to 65535).

// Given a coordinate (startRow, startCol) representing the startRowng pixel (row and column) 
// of the flood fill, and a pixel value newColor, "flood fill" the image.

// To perform a "flood fill", consider the startRowng pixel, 
// plus any pixels connected 4-directionally to the startRowng pixel of 
// the same color as the startRowng pixel, plus any pixels connected 
// 4-directionally to those pixels (also with the same color as the startRowng pixel), 
// and so on. Replace the color of all of the aforementioned pixels with the newColor.

// At the end, return the modified image.

// Example 1:
// Input: 
// image = [[1,1,1],[1,1,0],[1,0,1]]
// startRow = 1, startCol = 1, newColor = 2
// Output: [[2,2,2],[2,2,0],[2,0,1]]

// Explanation: 
// From the center of the image (with position (startRow, startCol) = (1, 1)), all pixels connected 
// by a path of the same color as the startRowng pixel are colored with the new color.
// Note the bottom corner is not colored 2, because it is not 4-directionally connected
// to the startRowng pixel.

// Note:
// The length of image and image[0] will be in the range [1, 50].
// The given startRowng pixel will satisfy 0 <= startRow < image.length and 0 <= startCol < image[0].length.
// The value of each color in image[i][j] and newColor will be an integer in [0, 65535].



// Runtime: 92 ms, faster than 71.47% of JavaScript online submissions for Flood Fill.
// Memory Usage: 39.6 MB, less than 25.35% of JavaScript online submissions for Flood Fill.
const floodFill = ( image, startRow, startCol, newColor, ogColor=image[startRow][startCol] ) => {
   if( 
      startRow < 0 || 
      startCol < 0 || 
      startRow >= image.length || 
      startCol >= image[0].length || 
      image[startRow][startCol] !== ogColor || 
      image[startRow][startCol] === newColor 
   ) return image;
  
  image[startRow][startCol] = newColor;
  
  floodFill(image, startRow+1, startCol, newColor, ogColor);
  floodFill(image, startRow-1, startCol, newColor, ogColor);
  floodFill(image, startRow, startCol+1, newColor, ogColor);
  floodFill(image, startRow, startCol-1, newColor, ogColor);
  
  return image;
};


const image1 = [
   [1,1,1],
   [1,1,0],
   [1,0,1]
];

console.log( floodFill(image1, 1, 1, 2) );