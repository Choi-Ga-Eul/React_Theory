function LikeButton(){
    const youtuber = "KOREA IT";

    const hello = (guest) => `${guest || "guest"}님 환영합니다!`;

    return(
        <div>
            <button>{ hello("백종원") } 좋아요!</button>
            <button>{ youtuber } 좋아요!</button>
            <button>{ youtuber } 싫어요!</button>
        </div>
    );
}

export default LikeButton;