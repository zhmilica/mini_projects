

const team = {
  _players: [
    {firstName: 'Michel', lastName: 'Platini', age: 22},
    {firstName: 'Lionel', lastName: 'Messi', age: 36},
    {firstName: 'Diego', lastName: 'Maradona', age: 52}
  ],
 
   _games: [
    {opponent: 'Broncos', teamPoints: 42, opponentPoints: 27},
    {opponent: 'Raptors', teamPoints: 22, opponentPoints: 10},
    {opponent: 'Rockets', teamPoints: 73, opponentPoints: 78}
  ],
  
  //Getters
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
  
   //Setters -  we dont need to create setter methods, because we don't want  anyone to change the values saved to these keys;
  
  addPlayer(firstName, lastName, age){
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },
  addGame(opp, myPts, oppPts){
    const game = {
      opponent: opp,
      points: myPts,
      opponentPoints: oppPts
    };
    this.games.push(game);
  }
};

//invoking addPlayer methods:
team.addPlayer("Steph", "Curry", "28");
team.addPlayer("Lisa", "Leslie", "42");
team.addPlayer("Bugs", "Bunny", "76");

//invoking addGames method
team.addGame("Titans", 80, 75);

console.log(team.players);
console.log(team.games);