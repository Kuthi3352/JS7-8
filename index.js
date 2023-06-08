
var mang = [];
document.querySelector('#btn').onclick = function(){
var soNguyen = +document.querySelector('#soNguyenInput').value ; 

mang.push(soNguyen);
document.querySelector('#txtInput').innerHTML = mang + '' ;

}

//---b1---
document.querySelector('#btnTinhTong').onclick = function(){
var sum = 0;
for (var i = 0; i < mang.length; i++) {
if (mang[i] > 0){
    sum += mang[i] } ;
}
document.querySelector('#txtTinhTongInput').innerHTML = 'Tổng số dương :' + sum ;

};
//---b2----
document.querySelector('#btnDemSo').onclick = function(){
var TinhRaSoDuong = 0 ;
for (var i = 0; i < mang.length; i++){
    if(mang[i] > 0){
        TinhRaSoDuong++ ;
    }
}
document.querySelector('#txtSoDuongInput').innerHTML = 'Số Dương :' +  TinhRaSoDuong

};

//---b3-----
document.querySelector('#btnNhoNhat').onclick = function(){
var timSoNhoNhat = mang[0];
for(var i = 1; i < mang.length; i++){
   if(mang[i] < timSoNhoNhat){
    timSoNhoNhat = mang[i] ;
   }
}
document.querySelector('#txtSoNhoNhatInput').innerHTML = 'Số nhỏ nhất là :' + timSoNhoNhat
};


//----b4------------
document.querySelector('#btnSoDuongNhoNhat').onclick = function(){
var soDuongNhoNhat = Infinity ;
for(var i = 0; i < mang.length; i++){
   if (mang[i] > 0 && mang[i] < soDuongNhoNhat){
    soDuongNhoNhat = mang[i] ;
   }
}
if(soDuongNhoNhat === Infinity){
    soDuongNhoNhat = 'Không có số dương trong mảng'
};
document.querySelector('#txtSoDuongNhoNhatInput').innerHTML = 'Số dương nhỏ nhất :' + soDuongNhoNhat
};


//-----------b5----------
document.querySelector('#btnSoChanCuoiCung').onclick = function(){
var tinhRaSoChanCuoi = -1 ;
for(var i = mang.length -1; i>=0; i--){
    if(mang[i] % 2 === 0){
        tinhRaSoChanCuoi = mang[i] 
        break
    }
}
document.querySelector('#txtSoChanCuoiCung').innerHTML = 'Số dương nhỏ nhất là :' + tinhRaSoChanCuoi === -1 ? '-1' : tinhRaSoChanCuoi ;

};

//-----------b7----------
document.querySelector('#btnSapXepTangDan').onclick = function(){ 
var SapXep = mang.slice().sort(function(a,b){
return a - b;
});
document.querySelector('#txtSapXepTangDan').innerHTML = 'Mảng sau khi sắp xếp :' + SapXep
};


//-----------b8----------
function isPrime(soNguyen){
    if(soNguyen < 2){
        return false;
    }

    for(var i = 2; i <= Math.sqrt(soNguyen); i++){
        if(soNguyen % i === 0){
            return  false;
}
    }
    return true;
}

document.querySelector('#btnSoNguyenTo').onclick = function(){ 
var SoDauTien = null;
for(var i = 0; i < mang.length; i++){
if(isPrime(mang[i])){
    SoDauTien = mang[i];
    break ;
}
}

var SoNguyenTo = document.querySelector('#txtSoNguyenTo');
if(SoDauTien === null){
    SoNguyenTo.innerHTML = 'Không có số nguyên tố';
}else{
    SoNguyenTo.innerHTML = 'Số nguyên tố đầu tiên :' + SoDauTien ;
}

};

//------------------------b9--------------------------------

var mangSoThuc = [];
document.querySelector('#btnSoThuc').onclick = function(){
var soThuc = +document.querySelector('#soThucInput').value ; 
mangSoThuc.push(soThuc);
document.querySelector('#txtSoThucInput').innerHTML = mangSoThuc + '' ;
}
function isInteger(soThuc) {
    return Number.isInteger(soThuc);
  }


document.querySelector('#btnDemSoNguyen').onclick = function(){
    var demSo = 0 ;
    for(var i = 0 ; i < mangSoThuc.length; i++){
        if(isInteger(mangSoThuc[i])){
            demSo++;
        }
    }
    document.querySelector('#txtDemSoNguyen').innerHTML = 'Số Nguyên :' + demSo

};

//-------b10------------

document.querySelector('#btnSoSanh').onclick = function(){
var soDuong = 0;
var soAm = 0;
for(var i = 0 ; i < mang.length; i++){
if(mang[i] > 0){
    soDuong++;
}else if(mang[i] < 0){
    soAm++;
}
}
var txtSoSanh = document.querySelector("#txtSoSanhInput");
var soSanh = "";
if(soDuong > soAm){
    soSanh = "Số dương > số âm";
}else if(soDuong < soAm){
    soSanh = "Số âm < số dương";
}else {
    soSanh = "Số âm = số dương";
}
txtSoSanh.innerHTML = soSanh;

}





















