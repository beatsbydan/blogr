var hamburger = document.getElementById("hamb")
var close = document.getElementById("ex")
var mob = document.querySelector(".exit")
var opened = document.querySelector(".hamburger")
var clo = document.querySelector(".close")
var prod = document.getElementById("prodd")
var prodd = document.querySelector(".product")
var prdd = document.querySelector(".prod")
var cmm =document.querySelector(".comp")
var com = document.getElementById("comm")
var comm = document.querySelector(".company")
var con =document.getElementById("conne")
var conn = document.querySelector(".connect")
var cnn = document.querySelector(".conn")
var blk = document.querySelector(".top")
var proo = document.getElementById("prodD")
var commp = document.getElementById("comM")
var connn = document.getElementById("connE")
var pro = document.querySelector(".proo")
var cop = document.querySelector(".commp")
var nnn = document.querySelector(".connn")

hamburger.addEventListener("click", () => {
    mob.classList.add('mob')
    opened.classList.add('active')
    clo.classList.add('revealed')
    prdd.classList.add('undone')
    cmm.classList.add('undone')
    cnn.classList.add('undone')
    prdd.classList.remove("done")
    blk.classList.add("instate")
})

ex.addEventListener("click", () =>{
    mob.classList.remove('mob')
    opened.classList.remove('active')
    clo.classList.remove('revealed')
    prodd.classList.remove("produce")
    comm.classList.remove("companies")
    conn.classList.remove("connectionss")
    cnn.classList.remove('undone')
    cmm.classList.remove('done')
    cnn.classList.remove('done')
    blk.classList.remove('instate')
    pro.classList.remove("under")
    cop.classList.remove("under")
    nnn.classList.remove('under')
})

prod.addEventListener("click", () => {
    prodd.classList.add("produce")
    prdd.classList.remove("undone")
    prdd.classList.remove("done")
    pro.classList.add("under")
    prdd.classList.add("desk")
    
})
proo.addEventListener("click", () => {
    pro.classList.remove("under")
    prodd.classList.remove("produce")
    prdd.classList.add("undone")
    prdd.classList.remove("desk")
})

com.addEventListener("click", () => {
    comm.classList.add("companies")
    cmm.classList.remove('done')
    cmm.classList.remove('undone')
    cop.classList.add("under")
    cmm.classList.add("desk")
})
commp.addEventListener("click", () => {
    cop.classList.remove("under")
    cmm.classList.add('done')
    cmm.classList.add('undone')
    comm.classList.remove("companies")
    cmm.classList.remove("desk")
})

con.addEventListener("click", () => {
    conn.classList.add("connectionss")
    cnn.classList.remove('done')
    cnn.classList.remove('undone')
    nnn.classList.add('under')
    cnn.classList.add("desk")
})
connn.addEventListener("click", () => {
    nnn.classList.remove("under")
    conn.classList.remove("connectionss")
    cnn.classList.add('done')
    cnn.classList.add('undone')
    cnn.classList.remove("desk")
})