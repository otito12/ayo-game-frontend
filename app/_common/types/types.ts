interface Match {
  players: Player[];
  start: Date;
  tournament?: string;
}

interface Player {
  id: string;
  firtname: string;
  lastname: string;
  wins?: number;
  loses?: number;
  prizes?: any;
  games?: any;
}

interface Tournament {}
