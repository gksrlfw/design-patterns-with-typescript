/*
    ** UI를 만들어 실제로 동작하는 채팅방을 만들어야 함

    User: 관찰자
    ChatRoom: 관찰대상

    => ChatRoom에 User를 유지하여, 새로운 message가 발생하면 관찰자들을 update한다
*/


import { ChatServer } from "./ChatServer"
import { User } from "./User";
import { UserChatWindow } from "./UserChatWindow";


const test = (): void => {
    const chatServer: ChatServer = ChatServer.getServer();
    chatServer.addUser(new User("홍길동"));
    chatServer.addUser(new User("임꺽정"));
    chatServer.addUser(new User("장길산"));
    chatServer.addUser(new User("장보고"));
    chatServer.addUser(new User("잭스패로우"));
    chatServer.addRoom("객체지향개발론및실습");
    chatServer.addRoom("놀자");
    chatServer.addUserToRoom("홍길동","객체지향개발론및실습");
    chatServer.addUserToRoom("임꺽정","객체지향개발론및실습");
    chatServer.addUserToRoom("장길산","객체지향개발론및실습");
    chatServer.addUserToRoom("장보고","객체지향개발론및실습");
    chatServer.addUserToRoom("홍길동","놀자");
    chatServer.addUserToRoom("임꺽정","놀자");
    chatServer.addUserToRoom("잭스패로우","놀자");


    // 유저마다 채팅창 하나씩 할당
    chatServer.getUsers().forEach((user, i) => {
        let chatWindow: UserChatWindow = new UserChatWindow(user);
        chatWindow.sendMessage();
        console.log(`********************************************`);
    });
};

test();