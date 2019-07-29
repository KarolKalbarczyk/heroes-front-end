import { GameBoardComponent } from './game-board/game-board.component';
import { User } from './user.model';
import { ChatComponent } from './chat/chat.component';

export class MatchModel {
    //board: GameBoardComponent
    user1: User
    user2: User
    chat: ChatComponent
    

    constructor(/*board:GameBoardComponent*/ user1:User,user2:User,chat:ChatComponent){
        //this.board = board;
        this.user1 = user1;
        this.user2 = user2;
        this.chat = chat;
    }
}
