import {User} from "../match/user.model";
import {Message} from "../match/chat/chat.component";

export class MatchResult {
  winner: string;
  users: User[];
  chat: Message[];
  log: string[];
  beginTime: Date;


}
