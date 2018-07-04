// #include<vector>
// using namespace std;

// int dp[100001][4] = {0};
// int solution(vector<vector<int> > land)
// {
//     int r = land.size();
//     for (int i = 0; i < 4; ++i)
//     {
//         dp[0][i] = land[0][i];
//     }

//     for (int i = 0; i < r; ++i)
//     {
//         for (int j = 0; j < 4; ++j)
//         {
//             for(int k = 0; k < 4; ++k)
//             {
//                 if (j != k)
//                 {
//                     dp[i][j] = max(dp[i][j], land[i][j] + dp[i-1][k]);
//                 }
//             }
//         }
//     }
//     int ans = 0;
//     for (int i = 0; i < 4; ++i)
//     {
//         ans = max(ans, dp[r-1][i]);
//     }
//     return ans;
// }

// 제한사항
// 행의 개수 N : 100,000 이하의 자연수
// 열의 개수는 4개이고, 땅(land)은 2차원 배열로 주어집니다.
// 점수 : 100 이하의 자연수


function solution(land){
 
  const dp = land.slice()
  const row = land.length
  for (let i = 0; i < 4; ++i){
      dp[0][i] = land[0][i];
  }

  for (let i = 0; i < row; i++){
    for (let j = 0; j < 4; j++){
      for(let k = 0; k < 4; ++k){
        if (j!== k) dp[i][j] = max(dp[i][j], land[i][j] + dp[i-1][k]);
      }
    }
  }
  
}

  