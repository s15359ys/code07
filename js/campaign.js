function campaignNumber(user){
 if(user.age>=30&&user.sex==1&&user.married==true){
return 1;
}else if(Math.floor(user.age/10)==2&&user.sex==0&&user.married==false){
return 2;
}else if(user.sex==0&&user.married==true){
return 3;
}else{
return 4;
}
}