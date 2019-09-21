function GetTime() {
    var modiDate = new Date(document.GetTime);
    var modiDate = new Date();
    var CurTime = modiDate.getHours() + ":" + modiDate.getMinutes();
    return CurTime
}
document.write(GetTime();