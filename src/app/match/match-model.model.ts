import { BoardComponent } from './game-board/game-board.component';
import { User } from './user.model';
import { ChatComponent } from './chat/chat.component';

export class MatchModel {
    board: BoardComponent
    user1: User
    user2: User
    chat: ChatComponent
    presentUser: String
    turnNumber: Number
    

    constructor(board:BoardComponent, user1:User,user2:User,chat:ChatComponent,presentUser:String,turnNumber:Number){
        this.board = board;
        this.user1 = user1;
        this.user2 = user2;
        this.chat = chat;
        this.presentUser = presentUser
        this.turnNumber = turnNumber;
    }

    

}
